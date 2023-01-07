const mongoose = require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema({
    customerId: {
        type: ObjectId,
        ref: "customer"
    },
    productName: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    discount:{
        type:Number
    },
    },
    {timestamps:true}
    )
    module.exports = mongoose.model("order", orderSchema)
            
    
    







