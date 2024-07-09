var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var fs = require("fs");
var data_old;
app.get('/users', function (req, res) {
    
   fs.readFile( "user.json", 'utf8', function (err, data) {
     data_old = data; 
     res.end( data_old );
   });
})
var server = app.listen(3000, function () {
   console.log("Express App running at http://localhost:3000/");
})

app.get('/users/:id', function (req, res) {
    fs.readFile("user.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       res.end( JSON.stringify(user));
    });
 })



app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({  extended: true }));

app.post('/', function (req, res) {
   fs.readFile("user.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
    
      var userId = Object.keys(users).length + 1;
      const jsonNewData = req.body;
      const keyToFind = 'user'+userId;
      var user = jsonNewData[keyToFind];
      users["user"+userId] = user;
    //   users["user"+user.id] = user;
      res.end( JSON.stringify(users));

      var jsonData = JSON.stringify(users)
      fs.writeFile("user.json", jsonData,function(err,data){})
   });
})