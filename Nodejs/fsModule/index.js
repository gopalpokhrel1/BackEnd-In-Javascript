const fs = require('fs');

// const txt = fs.readFileSync('txt.txt', 'utf-8');

// console.log(txt);


// fs.readFile('txt.txt', 'utf-8', (err,txt)=>{
//     console.log(txt);
// })

// fs.writeFile('txt.txt', "hello world", (err)=>{
//     if(err){
//         console.log("error was found")
//     }
//     else{
//         console.log("successfully inserted");
//     }
// })

fs.appendFile('txt.txt', '\n'+ 'lorem', (err)=>{
    if(err){
        console.log('error')
    }
    else{
        console.log('inserted');
    }
})