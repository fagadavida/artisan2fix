const router = require("express").Router();
const auth = require("../middleware/auth");

const {
  signup,
  login,
  edit,
  deleteuser,
  details,
  index,
  forgotpassword,
  resetpassword,
  dashboard,
} = require("../controllers/UserController");
const { upload } = require("../helpers/helper");

// authentication
router.get("/index", index);
router.post("/signup", signup);
router.post("/login", login);
router.post("/dashboard", auth, dashboard);
router.post("/forgotpassword", forgotpassword);
router.post("/resetpassword/:resetToken", resetpassword);
router.post("/edit/:id", upload, auth, edit);
router.get("/details/:id", auth, details);
router.delete("/delete/:id", deleteuser);

module.exports = router;
