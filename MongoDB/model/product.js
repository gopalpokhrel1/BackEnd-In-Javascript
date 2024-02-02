const mongoose = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {type:String, required:true},
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: {type:Number, min:[0, 'wrong rating'], max:[5, 'good rating']},
    brand:String,
    category:String,
    thumbnail: String,
    images:[String]
    });
  
    exports.Product = mongoose.model('Product', productSchema)