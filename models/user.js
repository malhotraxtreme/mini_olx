var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema =  new Schema({
  firstName:{type:String,required:true},
  lastName:{type:String,required:true},
  dob:Date,
  password:{type:String,required:true},
  mobile:{type:Number,required:true},
  email:{type:String,required:true},
  gender:{type:String,required:true}
  // address:{type:Schema.ObjectId,ref:'Address'}
});

// var addressSchema  = new Schema({
//   line1:{type:String,required:true},
//   line2:String,
//   state:{type:String,required:true},
//   city:{type:String,required:true},
//   country:{type:String,required:true},
//   pincode:{type:Number,required:true},
//   landmark:String
// });
// var address = mongoose.model('Address',addressSchema);

module.exports = mongoose.model('User',userSchema);
