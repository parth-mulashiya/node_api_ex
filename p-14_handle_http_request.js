const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())
const port = 3000

//GET request
app.get('/users',(req,res)=> {
    res.send(`GET/users`)
})

//POST request
app.post('/users',(req,res)=> {
    res.send(`User created successfully`)
})

//PUT request
app.put('/users/:id',(req,res)=> {
    const userId = req.params.id
    res.send(`PUT/users/${userId}`)
})

//DELETE request
app.delete('/users/:id',(req,res)=> {
    const userId = req.params.id
    res.send(`DETELE/users/${userId}`)
})

app.listen(port,() => {
    console.log(`Server is running on Port : ${port}`);
})