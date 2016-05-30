
$('body').addClass('red-theme');
$('.theme-variants li').click(function(){
	$('body').removeClass();
	$('body').addClass($(this).text().toLowerCase()+'-theme');
});

$('a[href^="#"]').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top-16}, 400);
	return false;
});

function navStickToInro() {
	var menutop;
	if ($('#introduction').offset().top-$(window).scrollTop() >= 4) {
		menutop = ($('#introduction').offset().top-$(window).scrollTop())+'px';
	} else {
		menutop = 4;
	}
	$('.main-nav').css('top', menutop);
}

navStickToInro();
$(window).resize(function() {
	navStickToInro();
});
$(window).scroll(function (event) {
	navStickToInro();
});


function elAnimations() {
	var animEl = $('.scroll-animation');

	for (var i = 0; i < animEl.length; i++) {
		if (isElOnScreen($(animEl[i]))) {
			$(animEl[i]).addClass('fadeIn animated');
		}
	}
}

elAnimations();

$(window).scroll(function (event) {
	elAnimations();
});


function isElOnScreen(el) {
	if (el.offset().top-$(window).scrollTop()-$(window).height() < 0 && el.offset().top-$(window).scrollTop()+el.height() > 0) {
		return true;
	} else {
		return false;
	}
}


function isElOnTop(el) {
	if (el.offset().top-$(window).scrollTop()-17 < 0 && el.offset().top-$(window).scrollTop()+el.height() > 0) {
		return true;
	} else {
		return false;
	}
}

var pageIt = $('.page-item a');

$(window).scroll(function (event) {
	for (var i = 0; i < pageIt.length; i++) {

		if (     isElOnTop(  $(  $(pageIt[i]).attr('href')  )  )    ) {

			for (var j = 0; j < pageIt.length; j++) {
				$(pageIt[j]).parent().removeClass('active');
			}
			$(pageIt[i]).parent().addClass('active');
		}
	}
});

var skillsIt = $('#skills li');

$(window).scroll(function (event) {
	for (var i = 0; i < skillsIt.length; i++) {
		if (isElOnScreen($(skillsIt[i]))) {
			$(skillsIt[i]).removeClass('start-position');
		}
	}
});

$('.adaptive-menu').click(function(){
	$('.main-nav').toggleClass('menu-opened');
	$('.main-post-nav').toggleClass('menu-opened');
});