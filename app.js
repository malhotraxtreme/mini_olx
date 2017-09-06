var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.get('/',(req,res)=>{
  res.send(' Yeah Bitch !');
});

app.listen(3000);

console.log("Server started @ 3000");
