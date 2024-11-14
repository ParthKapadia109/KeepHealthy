const express = require("express");
const { createProduct, getProducts, searchProducts,getProductById } = require("../Controllers/product");
const upload = require('../Controllers/upload')
const router = express.Router();

router.post("/create",upload.single('image') ,createProduct);
router.get('/products/search', searchProducts);
router.get("/", getProducts);
router.get('/:id', getProductById);

module.exports = router;
