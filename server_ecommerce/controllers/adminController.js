const express= require('express');
const router= express.Router();
const User = require('../models/user'); 
const bcrypt = require('bcryptjs');
const { ConnectionStates } = require('mongoose');

exports.VerifyAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Fetching user info from the database
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User Doesn't Exist!" });
        }

        if (!existingUser.isAdmin) {
            return res.status(403).json({ message: "Access Forbidden. Not an admin." });
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        return res.status(200).send(existingUser); // Sending the user object if it's an admin
    } catch (error) {
        return res.status(400).json({ message: error });
    }
};