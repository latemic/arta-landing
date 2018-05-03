//SUBSCRIBE WINDOW
let modal = document.getElementById('sub');
let btn = document.getElementById('open-modal-window');
let close = document.getElementById('close-modal-window');

btn.addEventListener('click', openModalWindow);
close.addEventListener('click', closeModalWindow);

function addClass(obj, className) {
  obj.classList.add(className);
}

function removeClass(obj, className) {
  obj.classList.remove(className);
}

//Open Modal Window
function openModalWindow(e) {
  e.preventDefault();
  addClass(modal, 'subscribe--visible');
}

//Close Modal Window
function closeModalWindow(e) {
  e.preventDefault();
  removeClass(modal, 'subscribe--visible');
}


//CHANGING HEADER CLASS ON SCROLLING
window.addEventListener('scroll', changeHeaderClass);

function changeHeaderClass(){
  let scrollPosY = window.pageYOffset | document.body.scrollTop;
  let navBar = document.getElementById('changing-header');

  if(scrollPosY > 74) {
    addClass(navBar, 'header--scrolled');
  } else if(scrollPosY <= 74) {
    removeClass(navBar, 'header--scrolled');
  }
}

//MOBILE MENU
let menu = document.getElementById('menu');
let burger = document.getElementById('toggle-menu');
let closeMenuBtn = document.getElementById('close-menu');

burger.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

//Open Menu
function openMenu(e){
  e.preventDefault();
  addClass(menu, 'mobile-menu--visible');
}

//Close Menu
function closeMenu(e){
  e.preventDefault();
  removeClass(menu, 'mobile-menu--visible');
}

//Any click outside of the Menu will close the menu
document.addEventListener('click', function(e) {
  let isClickInside = menu.contains(e.target);
  let isToggleClicked = burger.contains(e.target);
  if (!isClickInside && !isToggleClicked) {
    removeClass(menu, 'mobile-menu--visible');
  }
});
