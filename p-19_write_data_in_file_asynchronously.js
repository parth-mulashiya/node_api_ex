
const fs = require("fs")

const file = 'hello_world.txt'
const data = 'Hello World!'

fs.writeFile(file,data,'utf8',error => {
    if(error){
        throw error;
    }else{
        console.log(`Successfully write ${data} to ${file}`)
    }
})