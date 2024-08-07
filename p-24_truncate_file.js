const fs = require('fs')

fs.truncate('demo.txt',0,function(err){
    console.log('File content deleted.')
})