const express= require('express');
const router= express.Router();
const Product= require('../models/product')

exports.GetAllProducts = async(req, res) => {
       
    // Fetching from database
       try {
           const products= await Product.find();
           res.status(200).send(products);
       } catch (error) {
           res.status(400).send(error);
       }
};

exports.AddNewProduct = async (req, res) => {

    const {name,category,description,image,prices} = req.body;
    const newProduct = new Product({name,prices,category,image,description});

    // Saving product info to database
    try {
        newProduct.save();
        res.status(200).send('Product Information saved successfully');
    } catch (error) {
        return res.status(400).json({ message:error});
    }
};