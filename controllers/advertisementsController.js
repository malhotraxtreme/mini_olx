var Ad = require('../models/advertisement');
var User = require('../models/user');

module.exports.renderAdsView = (req,res)=>{
  res.status(200);
  res.render('advertisements');
}
