const express = require('express');
const router=   express.Router();
const orderController = require('../controllers/orderController')


//  User Places an Order
router.post('/placeOrder', orderController.PlaceOrder);

// Showing all respective orders to a particular user
router.get('/getUserOrders', orderController.GetUserOrders);
// Show all orders to admin
router.get('/getAllOrders', orderController.GetAllOrders);

// Order Verification by admin
router.post("/verifyOrder",orderController.VerifyOrder);

module.exports = router;