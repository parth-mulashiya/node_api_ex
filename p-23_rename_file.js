const fs = require('fs')

fs.rename('text.txt','myText.txt',function(err){
    if(err) throw err;
    console.log("File Renamed.")
})