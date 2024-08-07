const fs = require('fs')
const folderName = 'Users/demos/test'

try{
    if(!fs.existsSync(folderName)){
        fs.mkdirSync(folderName)
    }
}catch(err){
    console.error(err)
}