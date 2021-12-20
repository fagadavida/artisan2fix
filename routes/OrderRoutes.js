const express = require("express");
const router = express.Router();

//import controller
const orderController = require("../controllers/OrderController");
//API
router.get("/index", orderController.index);
// router.get("/orderid/:id", orderController.orderid);
router.post("/create", orderController.create);
router.post("/edit/:id", orderController.edit);
router.get("/details/:id", orderController.details);
router.get("/delete/:id", orderController.delete);

module.exports = router;
