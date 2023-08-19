const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')
// Import the UserModel instead of Admin
const { ConnectionStates } = require('mongoose');

// Admin Login
router.post("/verifyAdmin",adminController.VerifyAdmin);

module.exports = router;
