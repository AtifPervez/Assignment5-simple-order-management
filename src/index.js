const express = require('express')
const router = require("./router/route")
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
mongoose.connect("mongodb+srv://atifpervez:34BmDa5XVvtznQvO@code.8mvlc.mongodb.net/assignment5_simpleOrderManagement")
    .then(() => {
        console.log("Connected With MongoDb");
    })
    .catch(err => {
        console.log(err.message);
    })
app.use("/", router)
app.listen(process.env.PORT || 3000, () => {
    console.log("Express App Is Running On Port " + (process.env.PORT || 3000));
})
