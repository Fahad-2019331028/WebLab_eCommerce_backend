const Order = require("../models/order");
exports.ShippingOrder =  async (req, res)=> {
    const orderid= req.body.orderid;
    console.log("SupplyChaineOrder Id = "+ orderid);

    try {
         const res=await Order.findByIdAndUpdate({_id:orderid},{isDelivered:2}).exec();
         return res.status(200).send(orderid);

    } catch (error) {
         return res.status(400).json({message: error})
    }
};