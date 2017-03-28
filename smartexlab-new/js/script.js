$('.menu-btn, .main-nav .overlay').on('click', function() {

	$('.main-nav').toggleClass('opened');
	$('.main-nav .overlay').fadeToggle(400);
});

var $mainNav = $('.main-nav');
var $menuLinks = $('.main-nav ul');
var $logo = $('.logo');

var topOffset = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;

function scrollFunction() {
	var menuMinHeight = 38;
	var menuColor = '59, 137, 201';
	var menuColor = '12, 27, 39';
	var menuColor = '59, 137, 201';

	topOffset = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
	var menuHeight = 58 - topOffset;
	var menuLinksTop = 15 - topOffset/2;
	var logoTop = 4 - topOffset/2/15*11;
	var menuBackOpacity = 0 + topOffset/menuMinHeight;
	var menuBtnTop = 15 - topOffset/38*3;

	if (menuHeight >= menuMinHeight) {
		$mainNav.css('height', menuHeight+'px')
			.removeClass('small-menu')
			.css('background', 'rgba('+menuColor+','+menuBackOpacity+')');
		$menuLinks.css('top', menuLinksTop+'px');
		$logo.css('margin', logoTop+'px 0');
		$('.st0').fadeIn(400);
		$('.menu-btn svg').css('margin-top', menuBtnTop+'px');
	} else {
		$mainNav.css('height', menuMinHeight+'px')
		.addClass('small-menu')
		.css('background', 'rgba('+menuColor+', 1)');
		$menuLinks.css('top', (menuMinHeight-28)/2+'px');
		$logo.css('margin', '-3px 0');
		$('.st0').fadeOut(400);
		$('.menu-btn svg').css('margin-top', '12px');
	}
}

window.onscroll = scrollFunction;


// function scrollFunction() {
// 	topOffset = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
// 	var menuHeight = 58 - topOffset;
// 	if (menuHeight >= 30) {
// 		mainNav.style.height = menuHeight + 'px';
// 		mainNav.style.lineHeight = menuHeight + 'px';
// 		logo.style.marginTop = -10 + topOffset * 0.02 + 'px';
// 		mainNav.className = "main-nav";
// 		menuBtn.style.height = menuHeight + 'px';
// 		logoBlock.style.height = menuHeight + 'px';
// 	} else {
// 		mainNav.style.height = '40px';
// 		mainNav.style.lineHeight = '30px';
// 		mainNav.className = "main-nav small";
// 		logo.style.marginTop = -10 + 50 * 0.02 + 'px';
// 		menuBtn.style.height = '30px';
// 		logoBlock.style.height = '30px';
// 	}
// }