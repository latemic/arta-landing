$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9', 'section10', 'section11'],       
        
        //Scrolling
        css3: true,
        scrollingSpeed: 600,
        autoScrolling: true,
        fitToSection: false,
        fitToSectionDelay: 300,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        //Design  
        responsiveHeight: 330,
        controlArrows: false,
        afterLoad: function(anchorLink, index){
      if(anchorLink !== 'section1'){
          $(".navbar").addClass("navbar-fix");
      }
  },
  fixedElements: '.modal'
    });
});
 
