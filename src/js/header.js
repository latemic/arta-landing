//CHANGING HEADER CLASS ON SCROLLING
  window.addEventListener('scroll', changeHeaderClass);

  function changeHeaderClass(){
    let scrollPosY = window.pageYOffset | document.body.scrollTop;
    const navBar = document.getElementById('changing-header');

    if(scrollPosY > 74) {
      navBar.classList.add('header--scrolled');
    } else if(scrollPosY <= 74) {
      navBar.classList.remove('header--scrolled');
    }
  };
