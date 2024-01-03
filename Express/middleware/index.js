const express = require('express');

const morgan = require('morgan');  // npm i morgan 

const app = express();

//Middleware  application level middleware
app.use((req, res, next)=>{
    console.log(req.method, req.ip, req.hostname, req.get('User-Agent'), new Date());
    next();
})


//Built in middleware
app.use(express.json())// handle body params in file like:req.body
app.use(express.urlencoded()) // we can handle form data form this middleware

app.use(morgan('dev')) 

app.use(express.static('Public'))  // we can handle static file in server 

// const auth = (req,res,next)=>{
//     if(req.query.password=='123'){
//        next();
//     }
//     else{
//         res.send('Unauthorized');
//     }
// }

// //router level middleware
// app.get('/', auth, (req,res)=>{
//     res.send("Successful");
// })

const auth = (req,res,next)=>{
    if(req.body.password=='123'){
       next();
    }
    else{
        res.send('Unauthorized');
    }
}

app.get('/products/:id', (req,res)=>{
    res.send("Nice");
    console.log(req.params);
})
app.post('/', auth, (req,res)=>{
    res.send("successfull");
})

app.listen(8080, ()=> console.log("server created"));