window.addEventListener('scroll',() => { ActiveMenu(); reveal(); AnimateLine(); parallax();Closemenu()});
window.addEventListener('click',() => { Closemenu();CloseProductMenu()});
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
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    document.getElementById("nav").className += " nav-opacity";
    document.getElementById("navitem").classList.remove('active');
    document.getElementById("content1-java").className += " active"; 
    document.getElementById("propos-java").classList.remove('active');
    document.getElementById("Contact-java").classList.remove('active');
  }
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) { 
    document.getElementById("nav").className += " nav-opacity";
    document.getElementById("navitem").classList.remove('active');
    document.getElementById("content1-java").classList.remove('active');
    document.getElementById("propos-java").className += " active"; 
    document.getElementById("Contact-java").classList.remove('active');
  }
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    document.getElementById("nav").className += " nav-opacity";
    document.getElementById("navitem").classList.remove('active');
    document.getElementById("content1-java").classList.remove('active');
    document.getElementById("propos-java").classList.remove('active');
    document.getElementById("Contact-java").className += " active"; 
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
  }
}

function AnimateLine(){
  var line = document.querySelectorAll('.line');
  var windowheight = window.innerHeight;
  var linetop = line[0].getBoundingClientRect().top;
  var revealpoint = 150;
  if(linetop < windowheight - revealpoint){
      line[0].classList.add('line-animation');
  }
}

function parallax(){
  var parallax = document.getElementById("parallax");
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.5 +"px";
}

function Closemenu(){
  var button = document.getElementById("check");
  document.onclick = function(clickevent){
    if(clickevent.target.className =="NavLink" ){
      button.checked = false;
    }
  }
}

function OpenProductMenu(){
  var page = document.getElementById("Product_page");
  page.style.display = "block";
}

function CloseProductMenu(){
  var page = document.getElementById("Product_page");
  if(page.style.display == "block"){
    document.onclick = function(clickevent){
      if(clickevent.target.className !=="Product_page" && clickevent.target.className !=="shop_img" || clickevent.target.className =="closebutton"){
        page.style.display = "none";
      }
    }
  }
}