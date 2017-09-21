var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var adSchema = new Schema({
  title:{type:String,required:true},
  imageUrl:String,
  category:{type:String,required:true},
  price:{type:Number,required:true},
  post_date:{type:Date,required:true},
  description:{type:String,required:true},
  location:{type:String,required:true},
  ad_user:{type:Schema.ObjectId ,required:true,ref:'User'}
});

module.exports = mongoose.model('Ad',adSchema);
