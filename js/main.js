

$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9', 'section10', 'footer'],
        afterLoad: function(anchorLink, index){
            if(anchorLink !== 'section1'){
                $(".navbar").addClass("navbar-fix");
            }
            
            
        },
        fixedElements: '.modal'
    });
});



