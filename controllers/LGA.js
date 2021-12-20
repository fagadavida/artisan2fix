const LGA = require("../models/LGA");
const States = require("../models/stateModel");

exports.index = async (req, res) => {
  const statelist = await States.find({});
  return res.status(200).json(statelist);
};
exports.lgaid = async (req, res) => {
  try {
    let id = req.params.id;
    const lgalist = await LGA.find({ stateID: id });
    return res.status(200).json(lgalist);
  } catch (er) {
    res.json({ message: er.message });
  }
};
exports.create = async (req, res) => {
  LGA.findOne({ name: req.body.name }, function (error, exist) {
    if (exist && !error) {
      res.status(201).json({ message: req.body.name + " already exist" });
    } else {
      const { stateID, name } = req.body;
      let newLGA = new LGA({ stateID, name });
      newLGA.save();

      res.status(200).json({
        message: newLGA,
      });
    }
  });
};
exports.edit = async (req, res) => {
  try {
    await LGA.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, lga) => {
        if (!err) {
          return res.status(201).json({ success: true, lga });
        }
      }
    );
  } catch (er) {
    return res.status(500).json({ success: false, message: er });
  }
};
exports.details = async (req, res) => {
  try {
    await LGA.findById(req.params.id, (err, lga) => {
      if (!err) {
        res.status(201).json({
          success: false,
          message: lga,
        });
      }
    });
  } catch (er) {
    res.status(500).json({ success: false, message: er });
  }
};
exports.delete = async (req, res) => {
  try {
    await LGA.findByIdAndRemove(req.params.id, (err, lga) => {
      if (!err) {
        res.status(201).json({
          success: false,
          message: lga,
        });
      }
    });
  } catch (er) {
    res.status(500).json({ success: false, message: er.message });
  }
};
