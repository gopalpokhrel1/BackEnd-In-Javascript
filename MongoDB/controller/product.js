const mongoose = require('mongoose');
const model = require('../model/product');
const Product = model.Product;


//Create Product

exports.createProducts = (req,res)=>{
   const product = new Product(req.body);
   product.save().then(doc=> console.log(doc)).catch(err=> res.send(err));
}

//Read
exports.getAllProducts = async(req,res)=>{
    const data = await Product.find();
    res.send(data);
}

exports.getProduct= async(req,res)=>{
    const id = req.params.id;
    const data = await Product.findById(id);
    res.json(data); 
} 

//update and Replace

exports.putProduts = async(req,res)=>{ 
    const id = req.params.id;
    const data = await Product.findOneAndReplace({_id:id}, req.body, {new:true});
    res.send(data);
}

//update content only

exports.patchProducts =  async(req,res)=>{
    const id = req.params.id;
    const data = await Product.findOneAndUpdate({_id:id}, req.body, {new:true});
    res.send(data);
}

//delete

exports.deleteProducts = async(req,res)=>{
    const id = req.params.id;
    const data = await Product.findOneAndDelete({_id:id}, req.body, {new:true});
    res.send(data);
}