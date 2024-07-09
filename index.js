// const fs = require('fs')
// console.log('start reading a file...')

// fs.readFile('test1.txt', 'utf-8',function(err,content){
//     if(err){
//         console.log('error happend during reading the file')
//         return console.log(err)
//     }
//     console.log(content)
// })
// console.log('end of the file')




const express = require('express');
const app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/msg", (req, res, next) => {
    res.json({"message": "Hii hello how are you?"});
   });

   app.use(express.json()); // for parsing application/json

app.post("/msg/", (req, res, next) => {
 const message = req.body.message;
 res.json({"receivedMessage": message});
});

class Message {
    constructor(content) {
      this.content = content;
    }
   
    getContent() {
      return this.content;
    }
   }


   app.post("/msg", (req, res, next) => {
    const newMessage = new Message(req.body.message);
    res.json({"receivedMessage": newMessage.getContent()});
   });