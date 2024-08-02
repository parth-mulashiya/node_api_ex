

const fs = require("fs")

fs.open('myFile.txt','w',function(err,file){
    if(err) throw err;
    console.log(`Saved.`)
})