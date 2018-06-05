class changingHeader {
  constructor(parameters) {
    this.header = document.getElementById(parameters.headerSelector);
    this.state = parameters.state;

    this.init();
  }

  init() {
    if (!this.header) return;
    window.addEventListener('scroll', this.changeHeaderClass);
  }

  changeHeaderClass = () => {
    const scrollPosY = window.pageYOffset || document.body.scrollTop;

    if(scrollPosY > 74) {
      this.header.classList.add(this.state);
    } else {
      this.header.classList.remove(this.state);
    }
  }
}

const header = new changingHeader({
  headerSelector: 'changing-header',
  state: 'header--scrolled'
});
