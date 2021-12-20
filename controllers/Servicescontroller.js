const Serviceschema = require("../models/Services");

exports.index = async (req, res) => {
  const serviceslist = await Serviceschema.find({}).populate(
    "category",
    "name -_id"
  );
  return res.status(200).json(serviceslist);
};
exports.create = async (req, res) => {
  const { category, name, amount, description } = req.body;
  const imageurl = req.file.path;
  Serviceschema.findOne({ name }, function (error, exist) {
    if (exist && !error) {
      res.status(200).send({ message: name + " already exist" });
    } else {
      let newService = new Serviceschema({
        category,
        name,
        amount,
        description,
        imageurl,
      });
      newService.save();

      res.status(201).json(newService);
    }
  });
};
exports.editById = async (req, res) => {
  const serviceslist = await Serviceschema.findById(req.params.id);
  if (serviceslist) {
    return res.status(200).json(serviceslist);
  } else {
    return res
      .status(404)
      .json({ success: false, message: "Record not found" });
  }
};
exports.edit = async (req, res) => {
  const service = await Serviceschema.findById(req.params.id);
  const { category, name, amount, description } = req.body;
  try {
    service.category = category;
    service.name = name;
    service.amount = amount;
    service.description = description;
    await service.save();
    res.status(200).json(`${name} edited successfully`);
  } catch (error) {
    res.status(200).json(`Couldn't edit ${name} `);
  }
};
exports.details = async (req, res) => {
  try {
    const service = await Serviceschema.findById(req.params.id);
    res.status(200).json(service);
  } catch (er) {
    res.status(500).json({ success: false, message: er });
  }
};
exports.delete = async (req, res) => {
  try {
    Serviceschema.findByIdAndRemove(req.params.id, (err, service) => {
      if (!err) {
        res.status(200).json(service);
      }
    });
  } catch (er) {
    res.status(400).json(er.message);
  }
};
