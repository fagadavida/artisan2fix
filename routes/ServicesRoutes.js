const express = require("express");
const router = express.Router();
const { upload } = require("../helpers/helper");

//import controller
const serviceController = require("../controllers/Servicescontroller");
//API
router.get("/index", serviceController.index);
router.post("/create", upload, serviceController.create);
router.get("/editById/:id", serviceController.editById);
router.post("/edit/:id", serviceController.edit);
router.get("/details/:id", serviceController.details);
router.delete("/delete/:id", serviceController.delete);

module.exports = router;
