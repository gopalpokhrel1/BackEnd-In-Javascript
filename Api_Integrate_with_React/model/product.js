const mongoose = require('mongoose');

const {Schema} = mongoose;

const productSchema = new Schema({

    firstname:String,
    lastname:String,
    userid:String,
    password:String,
    gender:String,

})

 exports.data = mongoose.models.data ||  mongoose.model('data', productSchema);