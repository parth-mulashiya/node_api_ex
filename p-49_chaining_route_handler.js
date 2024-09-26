const express = require('express');
const app = express();

app.route('/book').get((req,res)=>{
    res.send('Get a random book')
}).post((req,res)=>{
    res.send("Add a book")
}).put((req,res)=>{
    res.send('Update the book')
})

app.listen(3000,()=>{
    console.log('Server started on port : 3000')
})