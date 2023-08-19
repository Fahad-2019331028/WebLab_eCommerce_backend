const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: { type: String },
    prices: [{ type: Number }], // Specify the array as an array of numbers
    category: { type: String },
    image: { type: String },
    description: { type: String }
});

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;
