function showSignUpForm(){
    $('.loginform').removeClass("flipOutY").delay(400).addClass("flipInY").css("display","block");
    $('.login').fadeIn(400);
}

function hideSignUpForm(e){
  if(e== "logincross" || e=="loginbg"){
  $('.loginform').removeClass("flipInY").addClass("flipOutY");
  $('.login').delay(400).fadeOut(600);
}}
