require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authrouter = require('./routes/authroute');



let app=express()  
console.log("Mongo URL:", process.env.MONGO_URL);
app.use(express.json())    
app.use(cookieParser()) 

const allowedOrigin=["https://mern-project-9vb9.onrender.com"]
app.use(cors({origin:allowedOrigin,credentials:true}))

app.use("/api/auth",authrouter); 


 mongoose.connect(process.env.MONGO_URL).then(()=>{

    console.log("Connected to Mongodb")

    app.listen(process.env.MY_PORT || 5000,()=>{ 
        console.log(`Server running on port ${process.env.MY_PORT}`) 
    })
 })
 .catch((err)=>{  
    console.log(err.message) 
 })