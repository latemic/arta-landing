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
