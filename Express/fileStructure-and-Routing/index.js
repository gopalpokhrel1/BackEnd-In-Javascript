const express = require('express');

const app = express();
const productRouter = require('./routes/products')

app.use(express.json());
app.use('/', productRouter.routes);


app.listen(3001, ()=> console.log("Server Started"));