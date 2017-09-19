var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var userController = require('./controllers/userController');
var adController = require('./controllers/adController');


var app = express();
var db = mongoose.connect('mongodb://localhost/mini_olx',{useMongoClient:true});
//To give access to static files
app.use('/assets',express.static('./assets'));
app.use('/node_modules',express.static('./node_modules'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.set('view engine','ejs');

//Basic route for Home page
app.get('/',(req,res)=>{
  res.status(200);
  res.render("index");
});

//Handle App Routing
//app.use('/user',userRouter);
userController(app);
adController(app);


app.listen(3000);

console.log("Server started @ 3000\n\n\n");
