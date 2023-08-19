const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

// Showing all available products to a user
router.get('/getAllProducts', productController.GetAllProducts);


// Adding a new product to the product list
router.post('/addNewProduct', productController.AddNewProduct);

module.exports = router;