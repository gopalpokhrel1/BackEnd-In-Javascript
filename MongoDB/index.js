const express = require('express');
const mongoose = require('mongoose');

main().catch(error => console.log(err));

async function main(){
    await mongoose.connect('insert url of database');
    console.log("Database connected");
}

const app = express();
const productRouter = require('./routes/products')



app.use(express.json());
app.use('/', productRouter.routes);


app.listen(3001, ()=> console.log("Server Started"));