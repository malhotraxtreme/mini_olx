var User = require('../models/user');

module.exports.renderProfileView = (req,res)=>{
  res.status(200);
  res.render('profile');
}
