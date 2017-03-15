$('.menu-btn, .main-nav .overlay').on('click', function() {

	$('.main-nav').toggleClass('opened');
	$('.main-nav .overlay').fadeToggle(400);
});

var $mainNav = $('.main-nav');
var $menuLinks = $('.main-nav ul');
var $logo = $('.logo');

var topOffset = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;

function scrollFunction() {
	topOffset = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
	var menuHeight = 58 - topOffset;
	var menuLinksTop = 15 - topOffset/2;
	var logoTop = 4 - topOffset/2/15*11;
	var menuBackOpacity = 0 + topOffset/28;

	console.log(topOffset);

	if (menuHeight >= 28) {
		$mainNav.css('height', menuHeight+'px')
			.removeClass('small-menu')
			.css('background', 'rgba(59, 137, 201,'+menuBackOpacity+')');
		$menuLinks.css('top', menuLinksTop+'px');
		$logo.css('margin', logoTop+'px 0');
		$('.st0').fadeIn(400);
	} else {
		$mainNav.css('height','28px')
		.addClass('small-menu')
		.css('background', 'rgba(59, 137, 201, 1)');
		$menuLinks.css('top', '0px');
		$logo.css('margin', '-7px 0');
		$('.st0').fadeOut(400);
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