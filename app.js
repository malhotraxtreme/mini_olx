var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var profileRouter = require('./routes/profileRouter');
var advertismentsRouter = require('./routes/advertisementsRouter');
var homeRouter = require('./routes/homeRouter');


var app = express();
var db = mongoose.connect('mongodb://localhost/mini_olx',{useMongoClient:true});
//To give access to static files
app.use('/assets',express.static('./assets'));
app.use('/node_modules',express.static('./node_modules'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.set('view engine','ejs');

//Routes
app.use('/',homeRouter);
app.use('/advertisements',advertismentsRouter);
app.use('/profile',profileRouter);


app.listen(3000);

console.log("Server started @ 3000\n\n\n");
