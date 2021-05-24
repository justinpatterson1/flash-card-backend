const express = require("express");
const mongoose = require("mongoose");

const flashCardController = require("./controller/Q&AController.js")
const app = express()

require("dotenv").config({path:"config/keys.env"});

app.use(express.json());

app.use("/flashcard",flashCardController)

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("express is alive")
    mongoose.connect(process.env.MONGO_DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("mongoose is alive");
    })
    .catch(err=>{
        console.log(err);
    })
})