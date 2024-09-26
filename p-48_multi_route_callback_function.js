const express = require('express');
const app = express();

const middleware1 = (req,res,next)=>{
    console.log("Middleware 1");
    next();
}

const middleware2 = (req,res,next)=>{
    console.log("Middleware 2");
    next();
}

app.get('/',middleware1,middleware2,(req,res)=>{
    console.log("Final route handler");
    res.send('Response from the route');
})

app.listen(3000,()=>{
    console.log('Server started on port: 3000');
})