const JWT = require("jsonwebtoken");
const PaymentModel = require("../models/paymentModel");
const bcrypt = require("bcryptjs");

exports.index = async (req, res) => {
  const userlist = await PaymentModel.find();
  return res.status(200).json(userlist);
};

exports.create = async (req, res) => {
  const { amount, date, admin, user } = req.body;

  const hashPSW = await bcrypt.hash(password, 12);
  let newPayment = new PaymentModel({
    amount,
    date,
    admin,
    user,
  });
  await newPayment.save();

  res.status(200).json({
    newPayment,
  });
};

exports.edit = async (req, res) => {
  try {
    await PaymentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, payment) => {
        if (!err) {
          res.status(201).json(payment);
        }
      }
    );
  } catch (er) {}
};
exports.details = async (req, res) => {
  try {
    await PaymentModel.findById(req.params.id, (err, payment) => {
      if (!err) {
        res.status(200).json(payment);
      }
    });
  } catch (er) {
    res.status(401).json(er.message);
  }
};
exports.delete = async (req, res) => {
  try {
    await PaymentModel.findByIdAndRemove(req.params.id, (err, payment) => {
      if (!err) {
        res.json(payment);
      }
    });
  } catch (er) {
    res.status(401).json(er.message);
  }
};
