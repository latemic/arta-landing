

$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9', 'section10', 'section11'],
        afterLoad: function(anchorLink, index){
            if(anchorLink !== 'section1'){
                $(".navbar").addClass("navbar-fix");
            }
            
            
        },
        fixedElements: '.modal',
    
    });
});

if(options.css3 && options.autoScrolling){
                $.isFunction( options.onLeave ) && options.onLeave.call( this, sectionIndex, yMovement);
                var translate3d = 'translate3d(0px, -' + dtop + 'px, 0px)';
                $('#superContainer').addClass('easing').css({
                    '-webkit-transform': translate3d,
                    '-moz-transform': translate3d,
                    '-ms-transform':translate3d,
                    'transform': translate3d
                });
                setTimeout(function(){
                    $.isFunction( options.afterLoad ) && options.afterLoad.call( this, anchorLink, (sectionIndex + 1));
                    setTimeout(function(){
                        isMoving = false;
                        $.isFunction( callback ) && callback.call( this);
                    }, 700);
                }, options.scrollingSpeed);
            }

