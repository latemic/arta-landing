const babel = 'babel';
console.log('scripts has loaded!');
console.log(`${babel} works!`);


//SUBSCRIBE WINDOW
var modal = document.getElementById('sub');
var btn = document.getElementById('modal-window');
var close = document.getElementById('close-modal-window');

btn.addEventListener('click', openModalWindow);
close.addEventListener('click', closeModalWindow);

//Open Modal Window
function openModalWindow() {
  modal.classList.add('subscribe--visible');
}

//Close Modal Window
function closeModalWindow() {
  modal.classList.remove('subscribe--visible');
}


//CHANGING HEADER CLASS ON SCROLLING
window.onscroll = function changeClass(){
  var scrollPosY = window.pageYOffset | document.body.scrollTop;
  var navBar = document.getElementById('changing-header');

  if(scrollPosY > 100) {
    navBar.classList.add('header--scrolled');
  } else if(scrollPosY <= 100) {
    navBar.classList.remove('header--scrolled');
  }
}

//MOBILE MENU
var menu = document.getElementById('menu');
var burger = document.getElementById('toggle-menu');
var closeMenuBtn = document.getElementById('close-menu');

burger.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

//Open Menu
function openMenu(){
  menu.classList.add('mobile-menu--visible');
}

//Close Menu
function closeMenu(){
  menu.classList.remove('mobile-menu--visible');
}

//Any click outside of the Menu will close the menu if it's open
document.addEventListener('click', function(event) {
  var isClickInside = menu.contains(event.target);
  var isToggleClicked = burger.contains(event.target);
  if (!isClickInside && !isToggleClicked) {
    closeMenu();
  }
});
