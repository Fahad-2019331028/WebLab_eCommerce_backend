const mongoose =require('mongoose');

var mongoURL = "mongodb+srv://FahadBM32:FahadBM32@cluster0.dp3w3dd.mongodb.net/eCommerce";

mongoose.connect( mongoURL,{useUnifiedTopology:true, useNewUrlParser:true});

var db=mongoose.connection;


db.on('connected', ()=>{ console.log("Connection established ");});
db.on('error', ()=>{console.log("FAILED")});

module.exports = mongoose;