jQuery.validator.addMethod(
	'regexp',
	function(value, element, regexp) {
		var re = new RegExp(regexp);
		return this.optional(element) || re.test(value);
	}
);

$(".inputs").validate({
	rules: {
		name: {
			required: true
		},
		email: {
			required: true,
			regexp: '^[-0-9a-zA-Z.]+@+[-0-9a-zA-Z.]'
		}
	},
	messages: {
		name: '',
		email: ''
	}
});

$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
 
});


// Паралакс
$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.main').css('background-position','50% '+(0-(scrolled*.25))+'px');
    $('.better-to-see').css('background-position','50% '+(0-(scrolled*.25))+'px');
    $('.how-add').css('background-position','50% '+(0-(scrolled*.25))+'px');
    $('#for-whom').css('background-position','50% '+(0-(scrolled*.25))+'px');
    $('#for-whom > .fon_2').css('background-position','50% '+(0-(scrolled*.55))+'px');
}