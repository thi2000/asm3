const express = require("express");

const productController = require("../controller/product");

const router = express.Router();
router.get("/products", productController.getProduct);
router.get("/products/:productId", productController.getProductid);
module.exports = router;
