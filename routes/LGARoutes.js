const express = require("express");
const router = express.Router();

//import controller
const lgaController = require("../controllers/LGA");
//API
router.get("/index", lgaController.index);
router.get("/lgaid/:id", lgaController.lgaid);
router.post("/create", lgaController.create);
router.post("/edit/:id", lgaController.edit);
router.get("/details/:id", lgaController.details);
router.get("/delete/:id", lgaController.delete);

module.exports = router;
