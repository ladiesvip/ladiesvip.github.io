'use strict';

app.directive('slide', function (){
	return {
    	link: function(scope, element, attrs){
			element.revolution({
				delay:9000,
				startwidth:950,
				startheight:550,
				onHoverStop:"on",
				navigationType:"none",
				soloArrowLeftHOffset:0,
				soloArrowLeftVOffset:0,
				soloArrowRightHOffset:0,
				soloArrowRightVOffset:0,
				touchenabled:"on",
				fullWidth:"on",
				shadow:0
			});

    }
};
});

app.directive('activate', function (){
  return {
    link: function(scope, element, attrs ) {
      element.onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollOffset: 40,
        filter: '',
        easing: 'swing'
      });
    }
  };
});
app.directive('activateLogo', function (){
  return {
    link: function(scope, element, attrs ) {
      element.onePageNav({
        changeHash: false,
        scrollSpeed: 750,
        scrollOffset: 85,
        filter: '',
        easing: 'swing'
      });
    }
  };
});
app.directive('activateMobile', function (){
  return {
    link: function(scope, element, attrs ) {
      element.onePageNav({
        changeHash: false,
        scrollSpeed: 750,
        scrollOffset: 0,
        filter: '',
        easing: 'swing'
      });
    }
  };
});
