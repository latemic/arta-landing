'use strict';

class ModalWindow {
  constructor(parameters) {
    this.toggles = document.getElementsByClassName(parameters.toggleSelector);
    this.toggleSelector = parameters.toggleSelector;
    this.visibility = parameters.visibility;
    this.modal = parameters.modal;
    this.close = parameters.close;

    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
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
      this.setModalEvents(this.toggles[i]);
    }
  }

  setModalEvents() {
    const modalItem = document.getElementById(this.modal);
    const closeModal = document.getElementById(this.close);

    closeModal.addEventListener('click', this.hide);
    modalItem.addEventListener('click', this.handleModalClick);
  }

  handleToggleClick(event) {
    event.stopPropagation();
    event.preventDefault();

    const toggle = event.target;
    const isTarget = toggle.classList.contains(this.toggleSelector);
    const modalLayout = document.getElementById(this.modal);

    if (!isTarget) return;

    modalLayout.classList.add(this.visibility);
    document.body.style.overflow = 'hidden';
  }

  handleModalClick(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  hide() {
    const modalLayout = document.getElementById(this.modal);

    modalLayout.classList.remove(this.visibility);
    document.body.style.overflow = 'auto';
  }
}

const modalWindow = new ModalWindow({
  toggleSelector: 'toggle-menu',
  visibility: 'item--visible',
  modal: 'menu',
  close: 'close-menu'
});

const subscribeWindow = new ModalWindow({
  toggleSelector: 'open-modal-window',
  visibility: 'item--visible',
  modal: 'sub',
  close: 'close-modal-window'
});
