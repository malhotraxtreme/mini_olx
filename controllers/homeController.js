module.exports.renderHomeView = (req,res)=>{
  res.status(200);
  res.render("home");
}

module.exports.renderContactView = (req,res)=>{
  res.status(200);
  res.render("contact");
}

module.exports.renderAboutView = (req,res)=>{
  res.status(200);
  res.render("about");
}

module.exports.renderHowView = (req,res)=>{
  res.status(200);
  res.render("how");
}

module.exports.login = (req,res)=>{
  res.status(200);
  res.send(req.body);
}

module.exports.register = (req,res)=>{
  res.status(200);
  res.send(req.body);
}
