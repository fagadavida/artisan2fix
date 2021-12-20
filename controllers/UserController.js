const crypto = require("crypto");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/UserModel");
var SendMail = require("../utils/mySendMail");
const mailSender = new SendMail();

exports.index = async (req, res) => {
  const userlist = await UserModel.find({});

  return res.status(200).json(userlist);
};
exports.dashboard = async (req, res) => {
  const userlist = await UserModel.find({ _id: req.params.id });
  return res.status(200).json(userlist);
};

exports.signup = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!email || !password)
    return res.status(400).json({ msg: "All fields are required." });
  if (password !== confirmPassword)
    return res
      .status(400)
      .json({ success: false, message: "Password missmatched" });
  const isExistingUser = await UserModel.findOne({ email });
  if (isExistingUser)
    return res
      .status(400)
      .send({ message: "An account with this email already exists." });
  try {
    let newUser = await UserModel.create({
      username,
      email,
      password,
    });
    // Create token
    const token = JWT.sign(
      { id: newUser._id, email },
      process.env.JWT_SECRETE,
      {
        expiresIn: process.env.JWT_EXPIRE,
      }
    );
    // save user token
    newUser.token = token;
    // Send actiovation mail to the user
    const activationURL = `${process.env.HOST}/accountactivation/${token}`;
    const message = `
    <h2>Your Account Activation Link</h2>
    <p>click the link below to activate your account </p>
     <p>Or copy and paste the link in your browser</p>
    <a href=${activationURL} clicktracking=off>${activationURL}</a>
    `;
    // mailSender.sendEmailFromMailer(email, "ACCOUNT ACTIVATION", message);

    return res.status(201).json({
      token: token,
      user: newUser,
      message: "Registration successful",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validate
    const user = await UserModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = JWT.sign(
        { id: user._id, email, role: user.role },
        process.env.JWT_SECRETE,
        {
          expiresIn: process.env.JWT_EXPIRE,
        }
      );
      // save user token
      user.token = token;
      res.status(200).json({ success: true, token, user });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Invalid login credentials" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.forgotpassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const resetToken = user.getResetPasswordToken();

    await user.save();

    const resetUrl = `${process.env.HOST}/resetpassword/${resetToken}`;

    const message = `
    <h2>Your Password Reset Link</h2>
    <p>click the link below to reset your password</p>
     <p>Or copy and paste the link in your browser</p>
    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;
    try {
      // mailSender.sendEmailFromMailer(email, "Password Reset", message);
      res.status(201).json({
        success: true,
        message:
          "Password reset link has been sent to your email, kindly check!",
      });
    } catch (error) {
      res.status(404).json("Connection Error");
    }
  } catch (error) {
    res.status(500).json("Internal server Error");
  }
};

exports.resetpassword = async (req, res) => {
  let resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");
  try {
    const user = await UserModel.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
      return re.status(400).json({
        success: false,
        message: "Invalid token provided, try again!",
      });
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    returnres
      .status(201)
      .json({ success: true, message: "Password Reset Successful" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Invalid token provided, token expired!",
    });
  }
};

exports.edit = async (req, res) => {
    const imageurl = req.file.path;
  UserModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, data) => {
      if (err) {
        res.status(401).json({ success: false });
      } else {
        res.status(201).json(data);
      }
    }
  );
};

exports.details = async (req, res) => {
  try {
    UserModel.findById(req.params.id, (err, user) => {
      if (!err) {
        res.status(200).json(user);
      }
    });
  } catch (er) {
    res.status(400).json(er.message);
  }
};

exports.deleteuser = async (req, res) => {
  try {
    UserModel.findByIdAndRemove(req.params.id, (err, user) => {
      if (!err) {
        res.status(200).json(user);
      }
    });
  } catch (er) {
    res.status(400).json(er.message);
  }
};
