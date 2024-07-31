
const fs = require("fs")
var data = "New File Content"

fs.writeFile('text.txt',data,(err)=>{
    if(err) console.log(err)
    console.log('Successfully Written to File.')
})