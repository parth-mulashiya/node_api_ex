const fs = require('fs')
console.log('start reading a file...')

fs.readFile('test1.txt', 'utf-8',function(err,content){
    if(err){
        console.log('error happend during reading the file')
        return console.log(err)
    }
    console.log(content)
})
console.log('end of the file')