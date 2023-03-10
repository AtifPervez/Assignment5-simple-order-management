const customerModel = require("../model/customerModel")

const createCustomer = async (req, res) => {
    try {
        let data = req.body
        let { fname, lname, mobileNumber,   category, address } = data
        if (!Object.keys(data).length) {
            return res.status(400).send({ status: false, message: "enter some data" })
        }
        if (!fname) {
            return res.status(400).send({ status: false, message: "enter your fname" })
        }
        if (/[^a-zA-Z]/.test(fname)) {
            return res.status(400).send({ status: false, message: "enter the fname format in alphabet only" })
        }
        if (!lname) {
            return res.status(400).send({ status: false, message: "enter your lname" })
        }
        if (/[^a-zA-Z]/.test(lname)) {
            return res.status(400).send({ status: false, message: "enter the lname format in alphabet only" })
        }

        if (!mobileNumber) {
            return res.status(400).send({ status: false, message: "plz enter your mobileNumber" })
        }
        if (/[^0-9]/.test(mobileNumber)) {
            return res.status(400).send({ status: false, message: "enter mobileNumber in numbers" })
        }
        if (mobileNumber.length != 10) {
            return res.status(400).send({ status: false, message: "plz enter 10 digits mobile number" })
        }
       

         if(category){
            return res.status(400).send({status:false,message:"you cannot give the category name"})
         }



        if (!address) {
            return res.status(400).send({ status: false, message: "plz enter your address" })
        }

        let createData = await customerModel.create(data)
        

        return res.status(201).send({ status: true, message: "customer created successfully", data: createData })



    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }

}
module.exports = { createCustomer }
        






 



















