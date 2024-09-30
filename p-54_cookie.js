const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("Welcome to express app")
})

let users = {
    name : 'Parth',
    age : 22
}

app.get('/setusers',(req,res)=>{
    res.cookie('usersData',users)
    res.send('users data added to cookie')
})

app.get('/getusers',(req,res)=>{
    res.send(req.cookies)
})

app.listen(3000,(err)=>{
    if(err) throw err;
    console.log("listening on port: 3000")
})