'use strict';

class ModalWindow {
  constructor(parameters) {
    this.toggles = document.getElementsByClassName(parameters.toggleSelector);
    this.toggleSelector = parameters.toggleSelector;
    this.visibility = parameters.visibility;
    this.modal = parameters.modal;

    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleMobileMenuClick = this.handleMobileMenuClick.bind(this);
    this.hide = this.hide.bind(this);

    this.init();
  }

  init() {
    this.setToggleEvents();

    document.addEventListener('click', this.hide);
  }

  setToggleEvents() {
    if (!this.toggles) return;

    for(let i = 0; i < this.toggles.length; i++) {
      this.toggles[i].addEventListener('click', this.handleToggleClick);
      this.setMobileMenuEvents(this.toggles[i]);
    }
  }

  setMobileMenuEvents() {
    const mobileMenu = document.getElementById('menu');
    const closeModal = document.getElementById('close-menu');
    closeModal.addEventListener('click', this.hide);
    mobileMenu.addEventListener('click', this.handleMobileMenuClick);
  }

  handleToggleClick(event) {
    event.stopPropagation();

    const toggle = event.target;
    const isTarget = toggle.classList.contains(this.toggleSelector);
    const modalLayout = document.getElementById(this.modal);

    if (!isTarget) return;

    modalLayout.classList.add(this.visibility);
  }

  handleMobileMenuClick(event) {
    event.stopPropagation();
  }

  hide() {
    const modalLayout = document.getElementById(this.modal);
      modalLayout.classList.remove(this.visibility);
  }
}

const modalWindow = new ModalWindow({
  toggleSelector: 'toggle-menu',
  visibility: 'item--visible',
  modal: 'menu'
});


// //SUBSCRIBE WINDOW
// (function (){
//
//   'use strict';
//
//   const modal = document.getElementById('sub');
//   let btn = document.getElementById('open-modal-window');
//   let close = document.getElementById('close-modal-window');
//
//   btn.addEventListener('click', openModalWindow);
//   close.addEventListener('click', closeModalWindow);
//
//   function addClass(obj, className) {
//     obj.classList.add(className);
//   }
//
//   function removeClass(obj, className) {
//     obj.classList.remove(className);
//   }
//
//   function defaultBehaviour(e, flowStyle) {
//     e.preventDefault();
//     document.body.style.overflow = flowStyle;
//   }
//
//   //Open Modal Window
//   function openModalWindow(e) {
//     defaultBehaviour(e, 'hidden');
//     addClass(modal, 'subscribe--visible');
//   }
//
//   //Close Modal Window
//   function closeModalWindow(e) {
//     defaultBehaviour(e, 'auto');
//     removeClass(modal, 'subscribe--visible');
//   }
//
//
//   //CHANGING HEADER CLASS ON SCROLLING
//   window.addEventListener('scroll', changeHeaderClass);
//
//   function changeHeaderClass(){
//     let scrollPosY = window.pageYOffset | document.body.scrollTop;
//     let navBar = document.getElementById('changing-header');
//
//     if(scrollPosY > 74) {
//       addClass(navBar, 'header--scrolled');
//     } else if(scrollPosY <= 74) {
//       removeClass(navBar, 'header--scrolled');
//     }
//   }
//
// })();
