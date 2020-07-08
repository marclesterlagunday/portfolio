$(document).ready(function(){
	setTimeout(function(){
		$(".primary-greeting")
		.removeClass('visibility-hidden')
		.addClass('animate__animated animate__fadeInDown');
	}, 600);
	setTimeout(function(){
		$(".primary-intro")
		.removeClass('visibility-hidden')
		.addClass('animate__animated animate__fadeInUp');
	}, 1200);
	setTimeout(function(){
		$(".primary-image")
		.removeClass('visibility-hidden')
		.addClass('animate__animated animate__flipInY');
	}, 1800);
	responsive_css();
});

function responsive_css(){
	let primary_header_margin_top = $(".primary-header").css('margin-top').replace(/[^0-9]/g,'');
	let navbar_height = $("nav").height();

	$(".primary-header").css('margin-top',  (parseInt(primary_header_margin_top) + parseInt(navbar_height)) + "px");
}