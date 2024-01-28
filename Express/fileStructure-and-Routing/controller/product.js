const fs= require('fs');

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


exports.createProducts = (req,res)=>{
    console.log(req.body);
    products.push(req.body);

    res.json(products);
}

exports.getAllProducts = (req,res)=>{
    res.json(products);
}

exports.getProduct=  (req,res)=>{
    const id = +req.params.id;
    const data = products.find(p=> p.id == id);
    res.json(data); 
} 

exports.putProduts = (req,res)=>{ 
    const id = +req.params.id;
    const ProductIndex = products.findIndex(p=> p.id === id);
    products.splice(ProductIndex,1, {...req.body, id:id});
    res.send("Updated");
}

exports.patchProducts =  (req,res)=>{
     const id = +req.params.id;
    const ProductIndex = products.findIndex(p=> p.id === id);
    const product = products[ProductIndex];
    products.splice(ProductIndex,1, {...product,...req.body});
    res.send("Updated");
}

exports.deleteProducts = (req,res)=>{
    const id = +req.params.id;

    const ProductIndex = products.findIndex(p=>p.id==id);

    const Product = products[ProductIndex];

    Product.splice(ProductIndex, 1);

    res.json(Product)
}