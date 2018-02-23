

$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9', 'section10', 'footer'],
        afterLoad: function(anchorLink, index){
            if(anchorLink !== 'section1'){
                $(".navbar").addClass("navbar-fix");
            }
            
            
        },
        fixedElements: '.modal',
        scrollingSpeed: 350
    });
});

var supportsOrientationChange = "onorientationchange" in window,
orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

$(window).bind(orientationEvent, function () {
    if (isTablet) {
        doneResizing();
    }
});

