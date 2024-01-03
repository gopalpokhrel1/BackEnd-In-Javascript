const fs = require('fs');

const data = fs.readFileSync('data.json', 'utf-8');
const index = fs.readFileSync('index.html', 'utf-8');



// npm i express

const express = require('express');

const server = express();

server.get('/', (req,res)=>{
    res.json({type:"Get"})
})

server.post('/', (req,res)=>{
    res.json({type:"Post"})
})

server.put('/', (req,res)=>{
    res.json({type:"Put"})
})

server.patch('/', (req,res)=>{
    res.json({type:"Patch"})
})

server.delete('/', (req,res)=>{
    res.json({type:"Delete"})
})

server.get('/demo', (req,res)=>{
   // res.json(data);
//    res.send('Hello world');
//  res.sendFile('E:\Coding\Backend in Javascript\Express\basic\index.html');
})


server.listen(8080, ()=> console.log("Server Started"));