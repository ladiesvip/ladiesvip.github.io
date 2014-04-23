'use strict';

app.directive('slider', function(){
  return {
    link: function(scope, element, attrs) {
      element.carousel({
        slider: '.slider',
        slide: '.slide',
        slideHed: '.slidehed',
        nextSlide : '.next',
        prevSlide : '.prev',
        addPagination: false,
        addNav : true,
        speed: 500 // ms.
      });
    }
  };
});
