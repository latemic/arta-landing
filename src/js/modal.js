const toggleSelector = 'modal-toggle';
const closeBtnSelector = 'modal-close';
const eventType = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';

class ModalWindow {
  constructor(toggle) {
    this.toggle = toggle;
    this.modalWindow = null;
    this.closeButton = null;

    this.init();
  }

  init() {
    this.initModalWindow();
    this.initCloseButton();

    if (this.modalWindow) {
      document.addEventListener(eventType, this.close);
      this.toggle.addEventListener(eventType, this.handleToggleClick);
    }
  }

  initModalWindow() {
    const modalWindow = document.querySelector(`[front-role="${this.toggle.dataset.target}"]`);

    if (!modalWindow) return;

    modalWindow.addEventListener(eventType, this.handleModalWindowClick);

    this.modalWindow = modalWindow;
  }

  initCloseButton() {
    const modalWindow = this.modalWindow;

    if (!modalWindow) return;

    const closeBtn = modalWindow.querySelector(`[front-role="${closeBtnSelector}"]`);

    if (!closeBtn) return;

    closeBtn.addEventListener(eventType, this.handleCloseBtnClick);

    this.closeBtn = closeBtn;
  }

  handleToggleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    this.open();
  }

  handleModalWindowClick = (event) => {
    event.stopPropagation();
  }

  handleCloseBtnClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    this.close();
  }

  open = () => {
    document.body.style.overflow = 'hidden';
    this.modalWindow.style.display = 'block';
  }

  close = () => {
    document.body.style.overflow = null;
    this.modalWindow.style.display = 'none';
  }
}

const toggles = document.querySelectorAll(`[front-role="${toggleSelector}"]`);

if (toggles) {
  for (let i = 0; i <= toggles.length; i++) {
    const toggle = toggles[i];

    let modalWindow;

    if (!toggle) continue;

    modalWindow = new ModalWindow(toggle);
  }
}
