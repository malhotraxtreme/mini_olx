function showLoginForm(){
    $('.loginform').removeClass("bounceOutDown").addClass("bounceInUp show");
    $('.authenticatebg').fadeIn(400);
}

function hideAuth(e){
  if(e== "logincross" || e=="loginbg" || e=="regcross"){
  $('.loginform').removeClass("bounceInUp").addClass("bounceOutDown");
  $('.regform').removeClass("bounceInUp").addClass("bounceOutDown");
  setTimeout(()=>{
    $('.loginform').removeClass("show");
    $('.regform').removeClass("show");
  },1000);
  $('.authenticatebg').delay(400).fadeOut(600);
}}

function showRegForm(){
  $('.loginform').removeClass("bounceInUp").addClass('bounceOutDown').removeClass("show");
  $('.regform').removeClass("bounceOutDown").addClass('bounceInUp show');
}
