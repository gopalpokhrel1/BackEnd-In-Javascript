const express = require('express');
const fs= require('fs');

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const app = express();

//body parser

app.use(express.json());


//Create
app.post('/products', (req,res)=>{
    console.log(req.body);
    products.push(req.body);

    res.json(products);
})

//Read 
app.get('/products', (req,res)=>{
    res.json(products);
})

app.get('/products/:id', (req,res)=>{
        const id = +req.params.id;
        const data = products.find(p=> p.id == id);
        res.json(data); 
} )


//Update 

app.put('/products/:id', (req,res)=>{  //content is overwrite with this method
    const id = +req.params.id;
    const ProductIndex = products.findIndex(p=> p.id === id);
    products.splice(ProductIndex,1, {...req.body, id:id});
    res.send("Updated");
})


app.patch('/products/:id', (req,res)=>{  //contents are updated  with this method
    const id = +req.params.id;
    const ProductIndex = products.findIndex(p=> p.id === id);
    const product = products[ProductIndex];
    products.splice(ProductIndex,1, {...product,...req.body});
    res.send("Updated");
})


app.delete('/products/:id', (req,res)=>{
    const id = +req.params.id;

    const ProductIndex = products.findIndex(p=>p.id==id);

    const Product = products[ProductIndex];

    products.splice(ProductIndex, 1);

    res.json(Product)
})





app.listen(3001, ()=> console.log("Server Started"));