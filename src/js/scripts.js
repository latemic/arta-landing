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
function openModalWindow(e) {
  modal.classList.add('subscribe--visible');
  e.preventDefault();
}

//Close Modal Window
function closeModalWindow(e) {
  modal.classList.remove('subscribe--visible');
  e.preventDefault();
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
function openMenu(e){
  menu.classList.add('mobile-menu--visible');
  e.preventDefault();
}

//Close Menu
function closeMenu(e){
  menu.classList.remove('mobile-menu--visible');
  e.preventDefault();
}

//Any click outside of the Menu will close the menu
document.addEventListener('click', function(e) {
  var isClickInside = menu.contains(e.target);
  var isToggleClicked = burger.contains(e.target);
  if (!isClickInside && !isToggleClicked) {
    menu.classList.remove('mobile-menu--visible');
  }
});


//FULL PAGE SCROLLING
function scrollIt(destination, duration = 200, easing = 'linear', callback) {

  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
};

//Invoking Scrolling on arrows
document.querySelector('.intro__arrow').addEventListener('click', () => {
  scrollIt(
    document.querySelector('.one-stop'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.realistic-preview__arrow').addEventListener('click', () => {
  scrollIt(
    document.querySelector('.mobile-sdk'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.assets__arrow').addEventListener('click', () => {
  scrollIt(
    document.querySelector('.ar-cloud'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.lamp__arrow').addEventListener('click', () => {
  scrollIt(
    document.querySelector('.visualisation'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});
