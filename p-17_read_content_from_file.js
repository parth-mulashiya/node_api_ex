const fs = require("fs")
fs.readFile('text.txt', function(err,buf){
    console.log(buf.toString())
})