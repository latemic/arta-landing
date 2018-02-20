$(window).scroll(function() {
var height = $(window).scrollTop();

if(height > 100){
$('.navbar').addClass('navbar-fix');
} else{
$('.navbar').removeClass('navbar-fix');
}

});


$(function() {
    $.scrollify({
      section : ".section",
      setHeights: false
    });
  });


var modal = document.getElementById('simpleModal');

var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementsByClassName('closeBtn')[0];



modalBtn.addEventListener('click', openModal);


closeBtn.addEventListener('click', closeModal);


window.addEventListener('click', clickOutside);

function openModal(){
    modal.style.display = 'block';
}


function closeModal(){
    modal.style.display = 'none';
}

