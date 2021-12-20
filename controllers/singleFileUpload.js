"use strict";
// const UserModel = require("../models/Singleupload");

exports.FileUploads = async (req, res) => {
  try {
    const imageurl = req.file.path;
    const newUser = new UserModel({ imageurl: imageurl });
    newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports.getSingleFile = async (req, res) => {
  const file = await UserModel.find({});
  res.status(200).json(file);
};
