const StateData = require("../models/stateModel");

exports.index = async (req, res) => {
  const stateslist = await StateData.find({});
  return res.status(200).json(stateslist);
};
exports.lgabystate = async (req, res) => {
  try {
    let id = req.params.id;
    const stateslist = await StateData.find({ stateID: id });
    return res.status(200).json(stateslist);
  } catch (er) {
    res.json({ message: er.message });
  }
};
exports.create = async (req, res) => {
  StateData.findOne({ name: req.body.name }, function (error, exist) {
    if (exist && !error) {
      res.status(201).send({ message: req.body.name + " already exist" });
    } else {
      let newState = new StateData();
      // newState.countryID = req.body.countryID;
      newState.name = req.body.name;
      newState.save();

      res.status(200).json({
        message: newState,
      });
    }
  });
};
exports.edit = async (req, res) => {
  try {
    await StateData.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, stat) => {
        if (!err) {
          return res.status(201).json({ success: true, stat });
        }
      }
    );
  } catch (er) {
    return res.status(500).json({ success: false, message: er });
  }
};
exports.details = async (req, res, next) => {
  try {
    await StateData.findById(req.params.id, (err, stat) => {
      if (!err) {
        res.status(201).json({
          success: false,
          message: stat,
        });
      }
    });
  } catch (er) {
    res.status(500).json({ success: false, message: er });
  }
};
exports.delete = async (req, res) => {
  try {
    await StateData.findByIdAndRemove(req.params.id, (err, stat) => {
      if (!err) {
        res.status(201).json({
          success: false,
          message: stat,
        });
      }
    });
  } catch (er) {
    res.status(500).json({ success: false, message: er.message });
  }
};
