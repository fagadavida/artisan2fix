const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const JWT = require("jsonwebtoken");

var Userchema = Schema({
  username: {
    type: String,
    required: true,
  },
  // firstname: {
  //   type: String,
  //   required: true,
  // },
  // othernames: {
  //   type: String,
  //   required: true,
  // },
  // phone: {
  //   type: String,
  //   require: true,
  // }
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,

    //minlength: 4,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  surname: String,
  othernames: String,
  dob: Date,
  phone: String,
  address: String,

  resetPasswordToken: String,
  resetPasswordExpired: Date,

  role: {
    type: String,
    default: "user",
  },

  // state: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "State",
  //   },
  // ],
  // lga: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "LGA",
  //   },
  // ],
  // dob: {
  //   type: Date,
  // },
  // address: { String },
  // image: String,
});

Userchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

Userchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpired = Date.now() + 20 * (60 * 1000);
  return resetToken;
};
module.exports = model("User", Userchema);
