const express= require('express');
const router= express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/userID');
const userController =  require('../controllers/userController'); 

// Bank ID registration
router.post('/register',userController.BankRegister);

// User login
router.post('/login',userController.BankLogin);

// Checking if a user has a bank account upon loging in 
router.get('/getUID',userController.getUserId);

// Updating admin balance after a purchase
router.post('/updateAdminBalance',userController.UpdateAdminBalance);

// Updating user balance after a purchase
router.post('/updateBalance',userController.UpdateBalance);

// Find a users bank id
router.get('/findbyUid',userController.FindByID);


module.exports = router;