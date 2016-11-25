$(function () {

 $('.toggle-btn').click(function(){
	$('.wrap').toggleClass('open');

 });

 $('.toggle-overlay, .menu-list a').click(function(){
	$('.wrap').removeClass('open');

 });

 $('.all').click(function(){
	$('.header-All').toggleClass('down');

 });

});
