const express = require('express');
const router = express.Router();
const productController = require('../controller/product');

router.
get('/user', productController.getproduct)
.get('/user/:id', productController.getspecificproduct)
.post('/user', productController.createuser)
.put('/user/:id', productController.replace)
.patch('/user/:id', productController.update)
.delete('/user/:id', productController.delete)



exports.routes = router;