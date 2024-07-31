
const http = require("http")
const options = {
    hostname: "jsonplaceholder.typicode.com",
    path: "/posts",
    method: "GET",
}

//sending request
const req = http.request(options,(res)=>{
    let data = ''
    res.on('data',(show)=>{
        data += show
    })
    //ending the response
    res.on('end',()=>{
        console.log('Body : ',JSON.parse(data))
    })
}).on("error",(err)=>{
    console.log("Error : ",err)
}).end()