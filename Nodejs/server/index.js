const http = require("http");
const fs = require('fs');



const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8')) ;
const products = data.products;

const server = http.createServer((req,res)=>{
    // console.log(req.url);


    console.log("Server started");
    // res.setHeader('Dummy', "Dummy value");


    // res.setHeader('Content-type', 'application/json');
    // res.end("<h1>Hello world</h1>");

    // res.end(JSON.stringify(data));

    //............html file
    // res.setHeader('Content-type', 'text/html');
    // res.end(index);


    //.......json file

    // res.setHeader('Content-type', 'application/json');
    // res.end(data);


    if(req.url.startsWith('/products')){
        console.log(req.url);
        console.log(req.url.split('/'));
        const id = req.url.split('/')[2];

        const product = products.find(p=>p.id== (+id));

        res.setHeader('Content-type', 'text/html');
        const file=  index.replace('**title**', product.title).replace("**url**", product.thumbnail).replace("**price**", product.price).replace("**rating**", product.rating);
        res.end(file);

        return;

    }

    switch(req.url){
        case '/':
            res.setHeader("Content-type", "text/html");
            res.end(index);
            break;

        case '/api':
            res.setHeader("Content-type", "application/json");
            res.end(JSON.stringify(data));
            break;
            
          case '/products':
            res.setHeader("Content-type", "text/html");
           res.end(index);
            break;
            
            
        default:
            res.end("404 Not found");    
    }

})

server.listen(3001);