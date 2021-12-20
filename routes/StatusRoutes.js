const express = require("express");
const router = express.Router();

//import controller
const statusController = require("../controllers/StatusController");
//API
router.get("/index", statusController.index);
router.get("/editById/:id", statusController.editById);
router.post("/create", statusController.create);
router.post("/edit/:id", statusController.edit);
router.get("/details/:id", statusController.details);
router.delete("/delete/:id", statusController.delete);

module.exports = router;
