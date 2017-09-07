var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var userRouter = require('./routes/user/userRouter');

var app = express();
mongoose.connect('mongodb://localhost/mini_olx');
//To give access to static files
app.use('/assets', express.static('./assets'));

//Basic route for Home page
app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/index.html");
});

//Handle App Routing
app.use('/user',userRouter);





app.listen(3000);

console.log("Server started @ 3000");
