const fs = require('fs')

var data = " Learn NodeJs"

fs.appendFile('text.txt', data,'utf8',function(err){
    if(err) throw err;
    console.log("Data is appended to file successfully.")
})