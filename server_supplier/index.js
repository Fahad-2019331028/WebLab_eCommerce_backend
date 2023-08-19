const express= require('express');
const bodyParser = require('body-parser');
const app= express();
const db=require('./db.js');
const path = require('path');
const OrderRoute = require('./routes/orderRoute.js');

// app.use(cors());
app.use(express.json());
app.use('/supplyAPI/orders',OrderRoute);

app.get("/",(req,res)=>{
    res.status(200).send("Hello from the supplier server");
})

const PORT= process.env.port || 7000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });