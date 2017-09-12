var Ad = require('../models/ad');

var User = require('../models/user');

module.exports = (app)=>{


  app.get('/ads',(req,res)=>{
    //res.send("This is in User's profile Area");
    Ad.find({},function(err,ads){
      if(err){
        res.status(404);
        res.send('ass');
      }
      res.status(200);
      res.send(ads);
    });
  });

  app.post('/ads',(req,res)=>{
    console.log('Post Works');
  });

  app.put('/ads',(req,res)=>{
    console.log('Put Works !');
  });

  app.delete('/ads',(req,res)=>{
    console.log('Delete Works !');
  });

}
