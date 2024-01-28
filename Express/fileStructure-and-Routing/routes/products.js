 
 const express = require('express');
 const productcontroller = require('../controller/product');

 const router = express.Router();
 
 router
.post('/products', productcontroller.createProducts )
.get('/products', productcontroller.getAllProducts )
.get('/products/:id', productcontroller.getProduct)
.put('/products/:id', productcontroller.putProduts)
.patch('/products/:id', productcontroller.patchProducts)
.delete('/products/:id', productcontroller.deleteProducts)

exports.routes = router;