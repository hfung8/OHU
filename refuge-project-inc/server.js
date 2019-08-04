var express = require("express");
var app = express();
var home = require('./routes/html-routes');

var path = require("path");
var PORT = 3000;

app.use('/home', home); 
app.use(express.static('public'));


app.listen(PORT, function(err){
  console.log("Connected, you are listening on PORT " + PORT)
})
