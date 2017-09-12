var User = require('../models/user');

module.exports = (app)=>{


  app.get('/users',(req,res)=>{
    console.log("This is in User's profile Area");
    User.find(function(err,users){
      if(err){
        res.status(404);
        res.send('ass');
      }
      res.status(200);
      res.send(users);
    });
  });


  app.post('/users',(req,res)=>{
    console.log('Post Works');
  });

  app.put('/users',(req,res)=>{
    console.log('Put Works !');
  });

  app.delete('/users',(req,res)=>{
    console.log('Delete Works !');
  });

}
