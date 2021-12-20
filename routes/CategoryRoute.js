const express = require("express");
const router = express.Router();
const { upload } = require("../helpers/helper");

//import controller
const categoryController = require("../controllers/SericesCategory");
//API
router.get("/index", categoryController.index);
router.get("/categoryedit/:id", categoryController.categoryedit);
router.post("/create", upload, categoryController.create);
router.post("/edit/:id", categoryController.edit);
router.get("/details/:id", categoryController.details);
router.get("/delete/:id", categoryController.delete);

module.exports = router;
