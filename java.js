window.addEventListener('scroll',ActiveMenu)
window.addEventListener('scroll',reveal);

function Verifyposition(){
    var mybutton = document.getElementById("myBtn");
    mybutton.style.display = "none";
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
      } else {
      mybutton.style.display = "none";
             }
      }
    
}

function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'}) 
}

function ActiveMenu(){
  document.getElementById("nav").classList.remove('nav-opacity');
  document.getElementById("navitem").className += " active";
  document.getElementById("content1-java").classList.remove('active');
  document.getElementById("propos-java").classList.remove('active');
  document.getElementById("Contact-java").classList.remove('active');
  document.getElementById("line-java").classList.remove('line-animation');
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    document.getElementById("nav").className += " nav-opacity";
    document.getElementById("navitem").classList.remove('active');
    document.getElementById("content1-java").className += " active"; 
    document.getElementById("propos-java").classList.remove('active');
    document.getElementById("Contact-java").classList.remove('active');
    document.getElementById("line-java").classList.remove('line-animation');
  }
  if (document.body.scrollTop > 710 || document.documentElement.scrollTop > 710) { 
    document.getElementById("nav").className += " nav-opacity";
    document.getElementById("navitem").classList.remove('active');
    document.getElementById("content1-java").classList.remove('active');
    document.getElementById("propos-java").className += " active"; 
    document.getElementById("Contact-java").classList.remove('active');
    document.getElementById("line-java").classList.remove('line-animation');
  }
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("nav").className += " nav-opacity";
    document.getElementById("navitem").classList.remove('active');
    document.getElementById("content1-java").classList.remove('active');
    document.getElementById("propos-java").classList.remove('active');
    document.getElementById("Contact-java").className += " active"; 
    document.getElementById("line-java").className += " line-animation"; 
  }

}
function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  
  for(var i = 0;i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

