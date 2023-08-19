const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')


// Register a new user
router.post("/register",userController.RegisterUser);
// Existing user Login
router.post("/login",userController.LoginUser); 


module.exports = router;
