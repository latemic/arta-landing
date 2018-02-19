$(window).scroll(function() {
var height = $(window).scrollTop();

if(height > 100){
$('.navbar').addClass('navbar-fix');
} else{
$('.navbar').removeClass('navbar-fix');
}

});

