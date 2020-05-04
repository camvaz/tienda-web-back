const Product_controller = require("../controllers/product.controller");
const express = require("express");
const router = express.Router();

router.post("/create", Product_controller.create_product);

module.exports = router;
