const express = require("express");
const router = express.Router();

//import controller
const stateController = require("../controllers/statesController");
//API
router.get("/", stateController.index);
router.get("/lgabystate/:id", stateController.lgabystate);
router.post("/create", stateController.create);
router.post("/edit/:id", stateController.edit);
router.get("/details/:id", stateController.details);
router.delete("/delete/:id", stateController.delete);

module.exports = router;
