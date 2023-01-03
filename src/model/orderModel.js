const mongoose = require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema({
    customerId: {
        type: ObjectId,
        ref: "customer"
    },
    product: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    discount:{
        type:String,
        required:true,
        trim:true
    }
    
    },
    {timestamps:true}
    )
    
    module.exports = mongoose.model("order", orderSchema)







