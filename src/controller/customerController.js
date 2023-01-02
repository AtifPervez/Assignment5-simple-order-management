const customerModel=require("../model/customerModel")

const createCustomer=async(req,res)=>{
    try {
        let data=req.body
        let{name,category,address}=data
        if(!Object.keys(data).length){
            return res.status(400).send({status:false,message:"enter some data"})
        }
        if(!name){
            return res.status(400).send({status:false,message:"enter your name"})
        }
        if(/[^a-zA-Z]$/.test(name)){
            return res.status(400).send({status:false,message:"enter the name format in alphabet only"})
        }
        if(!address){
            return res.status(400).send({status:false,message:"plz enter your address"})
        }
      
        let createData=await customerModel.create(data)
        if(!createData){
            return res.status(400).send({status:"false",message:"customer is not created"})
        }

         res.status(201).send({status:true,message:"customer created successfully",data:createData})

        
        
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
            
}
module.exports={createCustomer}
        
            
         





        
        


