const mongoose=require("mongoose")
const customerSchema=new mongoose.Schema({
name:{
    type:String,
    trim:true
},
category:{
    type:String,
    default:"regular",
    enum:["regular","gold","silver"],
    
    trim:true
},
address:{
    type:String,
    trim:true
},


},
{timestamps:true}
)
module.exports=mongoose.model("customer",customerSchema)





