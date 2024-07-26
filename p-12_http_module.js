
const http = require("http")

let options = {
    host: 'www.amazon.in',
    path: '/equipments',
    method: 'GET'
}

http.request(options,(response)=>{
    console.log('STATUS : ' + response.statusCode)
}).end();