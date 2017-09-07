var User = require('../../models/userModel');

var userController = (req,res)=>{
  //res.send("This is in User's profile Area");
  User.find(function(err,users){
    if(err){
      res.status(404);
      res.send('ass');
    }
    res.status(200);
    res.send('ass');
  });
}
module.exports = userController;
