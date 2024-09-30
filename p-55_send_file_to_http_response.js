const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    const op = {
        root: path.join(__dirname)
    }
    const myFile = 'demo.txt'
    res.sendFile(myFile,op,(error)=>{
        if(error){
            next(error)
        }
        else {
            console.log("File sent is : ",myFile)
        }
    })
})

app.listen(port,(err)=>{
    if(err) throw err;
    console.log("Server listening on port: ",port);
})