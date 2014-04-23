'use strict';

app.directive('revo', function(){
  return {
    link: function(scope, element, attrs) {
    var areamenu = $('.mobileAreaMenu');
    var all_li =$('.mobileAreaMenu li');
    var menu_trigger = element;
        menu_trigger.click(function() {


        if (menu_trigger.hasClass('active')){

              $(areamenu).slideUp(200,function(){
                $(areamenu).css("display","");
                menu_trigger.removeClass("active");
              });

              } else {
                $(areamenu).slideDown(200,function(){
                  //
                });

                menu_trigger.addClass("active");
              }
        });
    }
  };
});


var menu_trigger = $('.menu_trigger');
var areamenu = $('.mobileAreaMenu');
var all_li =$('.mobileAreaMenu li');
