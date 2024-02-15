const express = require('express');
const router = express.Router();
const productController = require('../controller/product');

router.
get('/', productController.getproduct)
.get('/:id', productController.getspecificproduct)
.post('/', productController.createuser)
.put('/:id', productController.replace)
.patch('/:id', productController.update)
.delete('/:id', productController.delete)



exports.routes = router;