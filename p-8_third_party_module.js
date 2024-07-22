const express = require("express")
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    return res.send("Hello Wordl!")
})

app.listen(port,()=>{
    console.log("Example app listing at http://localhost:",port)
})