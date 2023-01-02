const express=require("express")
const router=express.Router()
const customerController=require("../controller/customerController")

router.post("/createCustomer",customerController.createCustomer)






module.exports=router

