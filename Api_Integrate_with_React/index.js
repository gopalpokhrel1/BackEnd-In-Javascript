const express = require('express');
const server= express();
const port = 8080;
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const productRouter = require('./routes/products');
const cors = require('cors');

dotenv.config();

const url = process.env.Connect_URL;

const main = async()=>{
    try{
        await mongoose.connect(url);
        console.log('connect successfully');
    }
    catch(err){
        console.log("Sorry");
    }
}
main();
server.use(express.json());
server.use(cors());

server.use('/', productRouter.routes);

server.listen(port, ()=> console.log('server started'));