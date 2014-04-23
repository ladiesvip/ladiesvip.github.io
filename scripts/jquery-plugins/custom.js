/*global $:false */



// ONEPAGENAV SETTINGS





 $(window).load(function(){
  "use strict";

  $('.custom_button').onePageNav({
    changeHash: true,
    scrollSpeed: 750,
    scrollOffset: 40,
    filter: '',
    easing: 'swing',
});
});




$(document).ready(function() {
    "use strict";
    // cache container
    var $container = $('#container_portfolio');



        // initialize isotope
         $container.isotope({
          masonry: {
            columnWidth: 1
          }
        });


       // filter items when filter link is clicked
        $('#filters a').click(function(){
          var selector = $(this).attr('data-filter');
          $container.isotope({ filter: selector });
          return false;
        });

 });





$(document).ready(function() {
   "use strict";
      $('#filters li>a').click(function() {
   $('#filters li').removeClass('active');
      $(this).parent().addClass('active');
      });
});




// RESPONSIVE MENU

$(document).ready(function(){
"use strict";
var menu_trigger = $('.menu_trigger');
var areamenu = $('.mobileAreaMenu');
var all_li =$('.mobileAreaMenu li');

$(menu_trigger).click(function() {


if ($(menu_trigger).hasClass('active')){

      $(areamenu).slideUp(200,function(){
        $(areamenu).css("display","");
        $(menu_trigger).removeClass("active");
      });

      } else {
        $(areamenu).slideDown(200,function(){
          //
        });

        $(menu_trigger).addClass("active");
      }
});

$('.mobileAreaMenu a').click(function(){

  $(areamenu).slideUp(200);
  $(menu_trigger).removeClass("active");
});
});


// PRETTY PHOTO

$(window).load(function(){
 "use strict";
    $("a[class^='prettyPhoto']").prettyPhoto();
  });




// FIX FOR ISOTOPE PORTFOLIO FIRST TRIGGER

$(window).load(function() {
"use strict";
$('#filters li.active a').trigger('click');

});


// SKILLS BARS EFFECT

$(document).ready(function() {
"use strict";
var bars = $('.bar');

var bar_one = $(bars).slice(0,1);
var bar_one_percent = $(bar_one).find('.percent').text();

var bar_two = $(bars).slice(1,2);
var bar_two_percent = $(bar_two).find('.percent').text();

var bar_three = $(bars).slice(2,3);
var bar_three_percent = $(bar_three).find('.percent').text();

var bar_four = $(bars).slice(3,4);
var bar_four_percent = $(bar_four).find('.percent').text();

var bar_five = $(bars).slice(4,5);
var bar_five_percent = $(bar_five).find('.percent').text();

var bar_six = $(bars).slice(5,6);
var bar_six_percent = $(bar_six).find('.percent').text();

var bar_seven = $(bars).slice(5,6);
var bar_seven_percent = $(bar_seven).find('.percent').text();

setTimeout(
  function()
  {

  $(bar_one).animate({width:bar_one_percent}, 900);
  $(bar_two).animate({width:bar_two_percent}, 900);
  $(bar_three).animate({width:bar_three_percent}, 900);
  $(bar_four).animate({width:bar_four_percent}, 900);
  $(bar_five).animate({width:bar_five_percent}, 900);
  $(bar_six).animate({width:bar_six_percent}, 900);
  $(bar_seven).animate({width:bar_seven_percent}, 900);


  }, 800);

});







// TESTIMONIALS


$(document).ready(function() {
"use strict";
var alltabs = $('.col_wrapper');

$(".testimonial").hide();
$(".testimonial:first").show();
  $(".testi_column a").click(function() {

    $(alltabs).removeClass("active");
    $(this).parent('.col_wrapper').addClass("active");
    $(".testimonial").hide();

    var activeTab = $(this).attr("href");

    $(activeTab).fadeIn(600);

    return false;

  });

});







//RUN REVOLUTION SLIDER


  $(window).load(function() {
"use strict";
    $('.fullwidthbanner-container').css("visibility","");

    var api;
      jQuery(document).ready(function() {
         api =  jQuery('.fullwidthbanner').revolution(
                {
                  delay:9000,
                  startheight:900,
                  startwidth:1170,

                  hideThumbs:10,

                  thumbWidth:100,             // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
                  thumbHeight:50,
                  thumbAmount:5,

                  navigationType:"both",          //bullet, thumb, none, both   (No Thumbs In FullWidth Version !)
                  navigationArrows:"verticalcentered",    //nexttobullets, verticalcentered, none
                  navigationStyle:"round",        //round,square,navbar

                  touchenabled:"on",            // Enable Swipe Function : on/off
                  onHoverStop:"on",           // Stop Banner Timet at Hover on Slide on/off

                  navOffsetHorizontal:0,
                  navOffsetVertical:20,

                  stopAtSlide:-1,
                  stopAfterLoops:-1,

                  shadow:0,               //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
                  fullWidth:"on"              // Turns On or Off the Fullwidth Image Centering in FullWidth Modus
                });
      });


  });






// MOVING ARROWS IN PARALLAX FOR CAROUSEL

$(window).load(function() {

var parallax = $('.parallax');

$(parallax).each(function() {

  var current_slide = $(this).find('.slidecontrols');

   $(this).append(current_slide)
   });


});
