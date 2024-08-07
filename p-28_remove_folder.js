
const fs = require('fs')

fs.rmdir('./Users/test',err => {
    if(err) throw err;
    console.log(`Folder is deleted!`)
})