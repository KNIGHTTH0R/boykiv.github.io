var Slider = function (jObject) {
	this.jObject = jObject;
	this.slidesNumber = this.jObject.find('.main-ul>li').size() - 1;
	this.width = this.jObject.width();
	this.work = true;
	this.i = 0;
	this.interval = null;

	var self = this;

	//console.log(this.jObject.find('li').size());

	$(this.jObject).find('.main-ul').css('width', ''+(this.width*(this.slidesNumber+1))+'px');
	$(this.jObject).find('.main-ul>li').css('width', ''+this.width+'px');

	$bullets = $('<ul class="bullets"></ul>');
	for (var i = 0; i < this.slidesNumber+1; i++) {
		$bullets.append('<li class="item'+(i+1)+'"></li>');
	}
	$(this.jObject).parent().append($bullets);

	function bulletsGone() {
		$bullets.find('li').removeClass('active');
		$bullets.find('.item'+(self.i+1)).addClass('active');
	}
	bulletsGone();

	for (var i = 0; i < this.slidesNumber+1; i++) {
		$(this.jObject).parent().find('.bullets .item'+(i+1)).click(function () {
			clearInterval(self.interval);
			self.goInterval();
			self.i = parseInt($(this).attr('class')[4]) - 1;
			bulletsGone();
			$(self.jObject).find('.main-ul').animate({'margin-left': -self.width*self.i});
		});
	}

	this.slideRight = function () {
		if (this.i < this.slidesNumber) {
			this.i++;
		} else {
			this.i = 0;
		}
		bulletsGone();
		$(this.jObject).find('.main-ul').animate({'margin-left': -this.width*this.i});
	};
	this.slideLeft = function () {
		if (this.i > 0) {
			this.i--;
		}
		bulletsGone();
		$(this.jObject).find('.main-ul').animate({'margin-left': -this.width*this.i});
	};

	this.goInterval = function () {
		this.interval = setInterval(function () {
			self.slideRight();
		}, 7000);
	};
	this.goInterval();

	$(this.jObject).mouseenter(function () {
		console.log('enter');
		clearInterval(self.interval);
	}).mouseleave(function () {
		console.log('leave');
		self.goInterval();
	});

	$(this.jObject).parent().find('.right-arrow').click(function () {
		clearInterval(self.interval);
		self.goInterval();
		self.slideRight();
	});
	$(this.jObject).parent().find('.left-arrow').click(function () {
		clearInterval(self.interval);
		self.goInterval();
		self.slideLeft();
	});
};

var MainSlider = new Slider($('.slider'));