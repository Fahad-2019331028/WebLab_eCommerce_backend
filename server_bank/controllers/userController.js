const express= require('express');
const router= express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/userID');
exports.BankRegister = async(req,res)=>{

    const {bankUID ,email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    // Creating new ID
    try{
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists!" });
        }

        const newUser = new User(
            {   bankUID,
                email,
                password:hashedPassword
            });
            
        newUser.save();
        res.status(200).send('User Registered successfully');
    }
    catch(error){
        return res.status(400).json({ message:error});
    }
};

exports.BankLogin = async(req,res)=>{

    const {email,password} = req.body;
    console.log(req.body);
    try{
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User Doesn't Exist!" });
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        console.log(existingUser.password)
        if (!passwordMatch) {

            return res.status(400).json({ message: "Invalid Credentials" });
        }
        
        res.status(200).send(existingUser);
    }
    catch(error){
        return res.status(400).json({ message:error});
    }
};

exports.getUserId = async(req,res)=>{

    const email = req.query.user;
   
    try{
        result= await User.findOne({'email':email});
        res.status(200).send(result);
    }
    catch(error){
        return res.status(400).json({ message:error});
    }
};

exports.UpdateAdminBalance = async(req,res)=>{

    const {email,amount}= req.body;
    console.log(" SUPPLIER UPDATE BALANCE : ",email + "   "+amount)
    try {
        await User.updateOne(
            { 'email' : email },
            { $inc: { 'bdt': -amount } }
        );
        await User.updateOne(
            { 'email' : 'fahadbm3234@gmail.com' },{ $inc: { 'bdt': +amount } }
            );
        return res.status(200);

    } catch (error) {
        res.status(400).json({message:error});
    }

}; 

exports.UpdateBalance = async(req,res)=>{

    const {email,amount,token}= req.body;

    try {
        await User.updateOne(
            { 'email' : email },
            { $inc: { 'bdt': -amount } }
        );
        await User.updateOne(
            { 'email' : 'fahadbm3234@gmail.com' },{ $inc: { 'bdt': amount } }
        );
        return res.status(200).send(token.id);

    } catch (error) {
        return res.status(400).json({message:error});
    }

};

exports.FindByID = async(req,res)=>{

    const user = req.query.user;
   
    try{
        result= await User.findById(user);
        console.log("FINDBYid : "+result);
        res.status(200).send(result);
    }
    catch(error){
         res.status(400).json({ message:error});
    }
};


