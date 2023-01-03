const customerModel = require("../model/customerModel")
const orderModel = require("../model/orderModel")
const ObjectId = require("mongoose").Types.ObjectId

const orderInfo = async (req, res) => {
    try {
        let data = req.body
        let customerId = req.params.id
        let { product, price } = data

        if (!ObjectId.isValid(customerId)) {
            return res.status(400).send({ status: false, message: "customerId is incorrect" })
        }
        if (!Object.keys(data).length) {
            return res.status(400).send({ status: false, message: "you must enter some data in postman in the form of json format" })
        }
        if (!product) {
            return res.status(400).send({ status: false, message: "you must enter the products name before execution of further operation " })
        }
        if (!price) {
            return res.status(400).send({ status: false, message: "enter the price of the products" })
        }
        if (!/[0-9]/.test(price)) {
            return res.status(400).send({ status: false, message: "enter the price in number format" })
        }
        let discount = 0
        let category = "regular"
        product = product + 1

        if (product < 10) {
            category = "regular"
            discount = 0
            price = price
        }
        else if (product >= 10 && product < 20) {
            category = "gold"
            discount = (10/100)*price
            price = price - (price / 10)
        }
        else if (product >= 20) {
            category = "platinum"
            discount=(20/100)*price
            price=price-(price/20)
        }
        await orderModel.findByIdAndUpdate({_id:customerId},{$set:{price,category,discount}})
        
        let createOrderInfo=await orderModel.create(data)
        if(!createOrderInfo){
            return res.status(400).send({status:false,message:"orderInfo is not created"})
        }
        return res.status(201).send({status:true,message:"orderInfo is successfully created",data:createOrderInfo})

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })

    }
}


module.exports = { orderInfo }
        
            
            



































