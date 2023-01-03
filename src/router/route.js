const express=require("express")
const router=express.Router()
const customerController=require("../controller/customerController")
const orderController=require("../controller/orderController")

router.post("/createCustomer",customerController.createCustomer)
router.post("/orderInfo/:id",orderController.orderInfo)







module.exports=router

