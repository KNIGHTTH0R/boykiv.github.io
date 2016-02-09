$(document).ready(function() {
	// PIE
	if (window.PIE) {
    $('.css3-ie').each(function(){
      PIE.attach(this);
    });
  }
	// end
	
	// popover login
	$('header a.btn-login[data-toggle=popover]').popover({
		html : true, 
    content: function(){
      return $('#popover-login').html();
    }
	}).on('click', function(e) {
		 e.preventDefault();
	});
	// end
	
	// left-nav toggle
	$('.left-nav li > a').on('click', function() {
		if($(this).next('ul')) {
			$(this).next('ul').slideToggle();
		}
	});
	// end
	
	// map tooltip
	$('.content-map a').tooltip();
	// end
	
});

	// selectpicker
$(window).on('load', function () {
	$('.selectpicker').selectpicker();
});
	//end