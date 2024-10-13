require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 5000

app.use((req,res,next) =>{
    res.setHeader("Access-Control-Allow-Origin","https://tasty-bite-backened.onrender.com")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With, Content-Type, Accept"  
    );
    next();
})
const mongoDB = require("./db")
  mongoDB();
app.get('/',(req,res) => {
    res.send('Hello world!')
})

app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
