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
});