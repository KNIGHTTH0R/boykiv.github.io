var os = new OnScreen();

/*
	Behaviors
	min : min value (default=0)
	max : max value (default=100)
	step : step size (default=1)
	angleOffset : starting angle in degrees (default=0)
	angleArc : arc size in degrees (default=360)
	stopper : stop at min & max on keydown/mousewheel (default=true)
	readOnly : disable input and events (default=false)
	rotation : direction of progression (default=clockwise) | anticlockwise

	UI
	cursor : display mode “cursor”, cursor size could be changed passing a numeric value to the option, default width is used when passing boolean value “true” (default=gauge)
	thickness : gauge thickness
	lineCap : gauge stroke endings (default=butt, round=rounded line endings)
	width : dial width
	height : dial height
	displayInput : display input (default=true)
	displayPrevious : displays the previous value with transparency (default=false)
	fgColor : foreground color
	inputColor : input value (number) color
	font : font family
	fontWeight : font weight
	bgColor : background color
	
	animation
	duration
	easing
	startValue
	endValue
*/

$(function(){

	var khobSelector = ".khob";
	// activate knob
	$(khobSelector).each(function(){						
		$(this).knob({
			"thickness" : $(this).data("thickness") || 0.17,
			"fgColor" : $(this).data("fgcolor") || "#0577BD",
			"readOnly" : true,
			"format" : (value) => {
				return value + '%';
			}
		});	
	});					
	// animation khob
	os.on('enter', khobSelector, (element) => {					
			
			var jqElement = $(element);
			
			if(jqElement.data('isNotFirstCall'))
				return;
			jqElement.data('isNotFirstCall',true);	
			
			var duration = jqElement.data("duration") || 1000,
			easing = jqElement.data("easing") || "swing",
			startValue = jqElement.data("startvalue") || 0,
			endValue = jqElement.data("endvalue") || jqElement.val();

			$({animatedVal: startValue}).animate({animatedVal: endValue}, {
				duration: duration,
				easing: easing,
				step: function() {
					jqElement.val(Math.ceil(this.animatedVal)).trigger("change");
				}
			});

	});
	
	var progressBarSelector = ".progress-bar";
	// activate progress bar
	$(progressBarSelector).each(function(){		
	
		$(this).css({
			"height" : $(this).data("height"),
			"width" : $(this).data("width")					
		});	
		// css idicator
		$(this).find('.idicator').css({
				"background-color" : $(this).data("fgcolor")				
		});	
		
	});					
	// animation progressBar
	os.on('enter', progressBarSelector, (element) => {					
			
		var curProgressBar = $(element);
		
		if(curProgressBar.data('isNotFirstCall'))
			return;
		curProgressBar.data('isNotFirstCall',true);	
							
		var duration = curProgressBar.data("duration") || 1000,
		easing = curProgressBar.data("easing") || "swing",
		upperLimit = curProgressBar.data("upperlimit") || 100,
		startValue = curProgressBar.data("startvalue") || 0,
		endValue = curProgressBar.data("endvalue") || 100,				 
		idicator = curProgressBar.find('.idicator'),
		label = idicator.find('.label');
		
		$({animatedVal:startValue}).animate({animatedVal:endValue}, 
		{
			duration: duration,
			easing: easing,					
			step: function() {					
				label.html(Math.round(this.animatedVal) + '%');						
				var curVal = this.animatedVal * 100 / upperLimit;						
				// if progress bar is vertical
				if(curProgressBar.hasClass('vertical-pb')) 
					idicator.css({'height' : curVal + '%'});
				else // default if progress bar is horizontal	
					idicator.css({'width' : curVal + '%'});
			}
		});

	});
		

});