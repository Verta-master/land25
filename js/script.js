jQuery(function($) {
	"use strict";

//Mobile menu
$('.menu__btn').click(function() {
  $('.menu__wrap').addClass('menu__wrap--opened');
});
  
$('.menu__close').click(function() {
  $('.menu__wrap').removeClass('menu__wrap--opened');
});
  
$('.menu__link--more').click(function(evt) {
  evt.preventDefault();
  $(this).next().slideToggle();
});

});
