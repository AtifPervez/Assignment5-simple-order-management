const mongoose = require("mongoose")
const customerSchema = new mongoose.Schema({
    fname: {
        type: String,
        trim: true
    },
    lname:{
         type:String,
         trim:true
    },
    mobileNumber: {
        type: String,
        trim: true
    },
    emailId:{
        type:String,
        trim:true
    },
     password:{
      type:String,
      trim:true
     },
    category: {
        type: String,
        default: "regular",
        enum: ["regular", "gold", "silver"],
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    



},
    { timestamps: true }
)
module.exports = mongoose.model("customer", customerSchema)





