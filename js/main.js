

var nav = document.querySelector(".nav");
var menu = document.querySelector(".menu");

  nav.addEventListener("click", function(){
    menu.classList.toggle('active');
});

window.addEventListener("scroll", function(){
    menu.classList.remove('active');
});