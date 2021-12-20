const Statuschema = require("../models/Status");

exports.index = async (req, res) => {
  const statuslist = await Statuschema.find({});
  return res.status(200).json(statuslist);
};
exports.create = async (req, res) => {
  const { name } = req.body;
  Statuschema.findOne({ name }, function (error, exist) {
    if (exist && !error) {
      res.status(201).send({ message: name + " already exist" });
    } else {
      let newStatus = new Statuschema({
        name,
      });
      newStatus.save();

      res.status(200).json({
        message: newStatus,
      });
    }
  });
};
exports.editById = async (req, res) => {
  const statuslist = await Statuschema.findById(req.params.id);
  if (statuslist) {
    return res.status(200).json(statuslist);
  } else {
    return res
      .status(404)
      .json({ success: false, message: "Record not found" });
  }
};
exports.edit = async (req, res) => {
  const status = await Statuschema.findById(req.params.id);
  const { name } = req.body;
  try {
    status.name = name;
    await status.save();
    res.status(200).json(`${name} edited successfully`);
  } catch (error) {
    res.status(200).json(`Couldn't edit ${name} `);
  }
};
exports.details = async (req, res) => {
  try {
    await Statuschema.findById(req.params.id, (err, status) => {
      if (!err) {
        res.status(201).json({
          success: false,
          message: status,
        });
      }
    });
  } catch (er) {
    res.status(500).json({ success: false, message: er });
  }
};
exports.delete = async (req, res) => {
  console.log("delete");
  try {
    Statuschema.findByIdAndRemove(req.params.id, (err, status) => {
      if (!err) {
        res.status(200).json(status);
      }
    });
  } catch (er) {
    res.status(400).json(er.message);
  }
};
