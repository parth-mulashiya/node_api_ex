
const fs = require('fs')

fs.unlink('myFile.txt',function(err){
    if(err) throw err;
    console.log(`File deleted.`)
})