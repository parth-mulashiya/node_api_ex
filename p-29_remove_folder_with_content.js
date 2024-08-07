

const fs = require('fs')

fs.rm('./Users/test',{recursive: true,force: true},err => {
    if(err) throw err;
    console.log("Folder is Deleted!")
})