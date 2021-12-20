const Orderchema = require("../models/OrderModel");

exports.index = async (req, res) => {
  const orderlist = await Orderchema.find({});
  return res.status(200).json(orderlist);
};
exports.create = async (req, res) => {
  const { service, user, amount } = req.body;
  console.log(req.user);
  // Orderchema.findOne({ req.user.id, }, function (error, exist) {
  //   if (exist && !error) {
  //     res.status(201).send({ message: name + " already exist" });
  //   } else {
  //     let newOrder = new Orderchema({ service, user, amount });
  //     newOrder.save();

  //     res.status(200).json({
  //       message: newOrder,
  //     });
  //   }
  //});
};
exports.edit = async (req, res) => {
  try {
    await Orderchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, order) => {
        if (!err) {
          return res.status(201).json({ success: true, order });
        }
      }
    );
  } catch (er) {
    return res.status(500).json({ success: false, message: er });
  }
};
exports.details = async (req, res) => {
  try {
    await Orderchema.findById(req.params.id, (err, order) => {
      if (!err) {
        res.status(201).json({
          success: false,
          message: order,
        });
      }
    });
  } catch (er) {
    res.status(500).json({ success: false, message: er });
  }
};
exports.delete = async (req, res) => {
  try {
    await Orderchema.findByIdAndRemove(req.params.id, (err, order) => {
      if (!err) {
        res.status(201).json({
          success: false,
          message: order,
        });
      }
    });
  } catch (er) {
    res.status(500).json({ success: false, message: er.message });
  }
};
