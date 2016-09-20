(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 100,
	height: 105,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.topright = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#305A81").s().p("AjSDTQhYhYAAh7QAAh6BYhYQBYhXB6gBQB7ABBYBXQBXBYABB6QgBB7hXBYQhYBYh7AAQh6AAhYhYg");
	this.shape.setTransform(17.7,40.4,0.21,0.21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#305A81").s().p("AtINJIAAmmQAwALAwAAQCyAAB+h+QB+h+AAiyQAAiwh+h/Qh+h+iyAAQgwAAgwALIAAmmIaRAAIAAaRg");
	this.shape_1.setTransform(17.7,17.7,0.21,0.21);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.4,46.7);


(lib.topleft = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A8DC8").s().p("AGjNJQALgwgBgwQAAiyh+h+Qh9h+iyAAQixAAh9B+Qh/B+ABCyQgBAyALAuImmAAIAA6RIaRAAIAAaRg");
	this.shape.setTransform(17.7,17.7,0.21,0.21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A8DC8").s().p("AjSDTQhYhXAAh8QAAh6BYhYQBXhYB7AAQB7AABYBYQBYBYAAB6QAAB8hYBXQhYBYh7AAQh6AAhYhYg");
	this.shape_1.setTransform(40.4,17.7,0.21,0.21);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46.7,35.4);


(lib.rightbottom = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A8DC8").s().p("AjSDTQhYhYAAh7QAAh7BYhXQBYhYB6AAQB8AABXBYQBYBYAAB6QAAB7hYBYQhXBYh8AAQh6AAhYhYg");
	this.shape.setTransform(6.3,17.7,0.21,0.21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A8DC8").s().p("AtINJIAA6RIGmAAQgLAwABAwQAACyB+B+QB9B+CxAAQCyAAB9h+QB/h+gBiyQABgygLguIGmAAIAAaRg");
	this.shape_1.setTransform(29,17.7,0.21,0.21);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46.8,35.4);


(lib.leftbottom = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A8DC8").s().p("AjSDTQhXhYgBh7QABh7BXhXQBYhYB6AAQB8AABXBYQBYBYAAB6QAAB7hYBYQhXBXh8ABQh6gBhYhXg");
	this.shape.setTransform(17.7,6.3,0.21,0.21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A8DC8").s().p("AtINJIAA6RIaRAAIAAGmQgwgLgwAAQiyAAh+B+Qh+B+AACxQAACxB+B/QB+B+CyAAQAwAAAwgLIAAGmg");
	this.shape_1.setTransform(17.7,29,0.21,0.21);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.4,46.7);


// stage content:
(lib.About4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		var self = this;
		$('.we-are li:nth-child(4)').on('mouseover click', function() {
			self.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(96));

	// top-left
	this.instance = new lib.topleft("synched",0);
	this.instance.setTransform(18,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:23.3,regY:17.7,x:41.3,y:33.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:18,y:16},0).wait(1).to({regX:23.3,regY:17.7,x:41.3,y:33.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:18,y:16},0).wait(1).to({regX:23.3,regY:17.7,x:41.3,y:33.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:18,y:16},0).wait(1).to({regX:23.3,regY:17.7,x:41.3,y:33.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// top-right
	this.instance_1 = new lib.topright("synched",0);
	this.instance_1.setTransform(56.6,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:17.7,regY:23.3,x:74.3,y:39.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:56.6,y:16},0).wait(1).to({regX:17.7,regY:23.3,x:74.3,y:39.6},0).wait(1).to({y:40},0).wait(1).to({y:40.6},0).wait(1).to({y:41.3},0).wait(1).to({y:42.2},0).wait(1).to({y:43.5},0).wait(1).to({y:45.1},0).wait(1).to({y:47.1},0).wait(1).to({y:49.6},0).wait(1).to({y:52.7},0).wait(1).to({y:56.3},0).wait(1).to({y:60.5},0).wait(1).to({y:64.1},0).wait(1).to({y:67.2},0).wait(1).to({y:69.7},0).wait(1).to({y:71.7},0).wait(1).to({y:73.3},0).wait(1).to({y:74.6},0).wait(1).to({y:75.5},0).wait(1).to({y:76.2},0).wait(1).to({y:76.8},0).wait(1).to({y:77.2},0).wait(1).to({y:77.5},0).wait(1).to({regX:0,regY:0,x:56.6,y:54.2},0).wait(1).to({regX:17.7,regY:23.3,x:74.3,y:77.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:56.6,y:54.2},0).wait(1).to({regX:17.7,regY:23.3,x:74.3,y:77.2},0).wait(1).to({y:76.8},0).wait(1).to({y:76.2},0).wait(1).to({y:75.5},0).wait(1).to({y:74.6},0).wait(1).to({y:73.3},0).wait(1).to({y:71.7},0).wait(1).to({y:69.7},0).wait(1).to({y:67.2},0).wait(1).to({y:64.1},0).wait(1).to({y:60.5},0).wait(1).to({y:56.3},0).wait(1).to({y:52.7},0).wait(1).to({y:49.6},0).wait(1).to({y:47.1},0).wait(1).to({y:45.1},0).wait(1).to({y:43.5},0).wait(1).to({y:42.2},0).wait(1).to({y:41.3},0).wait(1).to({y:40.6},0).wait(1).to({y:40},0).wait(1).to({y:39.6},0).wait(1).to({y:39.3},0).wait(1));

	// left-bottom
	this.instance_2 = new lib.leftbottom("synched",0);
	this.instance_2.setTransform(18,42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:17.7,regY:23.3,x:36,y:66.2},0).wait(1).to({x:36.5},0).wait(1).to({x:37},0).wait(1).to({x:37.7},0).wait(1).to({x:38.6},0).wait(1).to({x:39.9},0).wait(1).to({x:41.5},0).wait(1).to({x:43.6},0).wait(1).to({x:46.1},0).wait(1).to({x:49.2},0).wait(1).to({x:52.9},0).wait(1).to({x:57.1},0).wait(1).to({x:60.8},0).wait(1).to({x:63.9},0).wait(1).to({x:66.4},0).wait(1).to({x:68.5},0).wait(1).to({x:70.1},0).wait(1).to({x:71.4},0).wait(1).to({x:72.3},0).wait(1).to({x:73},0).wait(1).to({x:73.5},0).wait(1).to({x:74},0).wait(1).to({x:74.3},0).wait(1).to({regX:0,regY:0,x:56.6,y:42.9},0).wait(1).to({regX:17.7,regY:23.3,x:74.3,y:65.9},0).wait(1).to({y:65.5},0).wait(1).to({y:64.9},0).wait(1).to({y:64.2},0).wait(1).to({y:63.3},0).wait(1).to({y:62},0).wait(1).to({y:60.4},0).wait(1).to({y:58.4},0).wait(1).to({y:55.9},0).wait(1).to({y:52.8},0).wait(1).to({y:49.2},0).wait(1).to({y:45},0).wait(1).to({y:41.3},0).wait(1).to({y:38.3},0).wait(1).to({y:35.8},0).wait(1).to({y:33.7},0).wait(1).to({y:32.1},0).wait(1).to({y:30.9},0).wait(1).to({y:29.9},0).wait(1).to({y:29.2},0).wait(1).to({y:28.7},0).wait(1).to({y:28.3},0).wait(1).to({y:28},0).wait(1).to({regX:0,regY:0,x:56.6,y:4.7},0).wait(1).to({regX:17.7,regY:23.3,x:74,y:28.3},0).wait(1).to({x:73.5,y:28.7},0).wait(1).to({x:73,y:29.2},0).wait(1).to({x:72.3,y:29.9},0).wait(1).to({x:71.4,y:30.9},0).wait(1).to({x:70.1,y:32.1},0).wait(1).to({x:68.5,y:33.7},0).wait(1).to({x:66.4,y:35.8},0).wait(1).to({x:63.9,y:38.3},0).wait(1).to({x:60.8,y:41.3},0).wait(1).to({x:57.1,y:45},0).wait(1).to({x:52.9,y:49.2},0).wait(1).to({x:49.2,y:52.8},0).wait(1).to({x:46.1,y:55.9},0).wait(1).to({x:43.6,y:58.4},0).wait(1).to({x:41.5,y:60.4},0).wait(1).to({x:39.9,y:62},0).wait(1).to({x:38.6,y:63.3},0).wait(1).to({x:37.7,y:64.2},0).wait(1).to({x:37,y:64.9},0).wait(1).to({x:36.5,y:65.5},0).wait(1).to({x:36,y:65.9},0).wait(1).to({x:35.7,y:66.2},0).wait(1).to({regX:0,regY:0,x:18,y:42.9},0).wait(1).to({regX:17.7,regY:23.3,x:35.7,y:66.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// right-bottom
	this.instance_3 = new lib.rightbottom("synched",0);
	this.instance_3.setTransform(45.3,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:23.4,regY:17.7,x:68.3,y:71.9},0).wait(1).to({x:67.9},0).wait(1).to({x:67.4},0).wait(1).to({x:66.7},0).wait(1).to({x:65.7},0).wait(1).to({x:64.4},0).wait(1).to({x:62.8},0).wait(1).to({x:60.8},0).wait(1).to({x:58.2},0).wait(1).to({x:55.1},0).wait(1).to({x:51.4},0).wait(1).to({x:47.3},0).wait(1).to({x:43.6},0).wait(1).to({x:40.5},0).wait(1).to({x:37.9},0).wait(1).to({x:35.9},0).wait(1).to({x:34.3},0).wait(1).to({x:33},0).wait(1).to({x:32},0).wait(1).to({x:31.3},0).wait(1).to({x:30.8},0).wait(1).to({x:30.4},0).wait(1).to({x:30.1},0).wait(1).to({regX:0,regY:0,x:6.7,y:54.2},0).wait(1).to({regX:23.4,regY:17.7,x:30.1,y:71.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:6.7,y:54.2},0).wait(1).to({regX:23.4,regY:17.7,x:30.4,y:71.6},0).wait(1).to({x:30.8,y:71.2},0).wait(1).to({x:31.3,y:70.6},0).wait(1).to({x:32,y:69.9},0).wait(1).to({x:33,y:69},0).wait(1).to({x:34.3,y:67.7},0).wait(1).to({x:35.9,y:66.1},0).wait(1).to({x:37.9,y:64.1},0).wait(1).to({x:40.5,y:61.6},0).wait(1).to({x:43.6,y:58.5},0).wait(1).to({x:47.3,y:54.9},0).wait(1).to({x:51.4,y:50.7},0).wait(1).to({x:55.1,y:47.1},0).wait(1).to({x:58.2,y:44},0).wait(1).to({x:60.8,y:41.5},0).wait(1).to({x:62.8,y:39.5},0).wait(1).to({x:64.4,y:37.9},0).wait(1).to({x:65.7,y:36.6},0).wait(1).to({x:66.7,y:35.7},0).wait(1).to({x:67.4,y:35},0).wait(1).to({x:67.9,y:34.4},0).wait(1).to({x:68.3,y:34},0).wait(1).to({x:68.7,y:33.7},0).wait(1).to({regX:0,regY:0,x:45.3,y:16},0).wait(1).to({regX:23.4,regY:17.7,x:68.7,y:34},0).wait(1).to({y:34.4},0).wait(1).to({y:35},0).wait(1).to({y:35.7},0).wait(1).to({y:36.6},0).wait(1).to({y:37.9},0).wait(1).to({y:39.5},0).wait(1).to({y:41.5},0).wait(1).to({y:44},0).wait(1).to({y:47.1},0).wait(1).to({y:50.7},0).wait(1).to({y:54.9},0).wait(1).to({y:58.5},0).wait(1).to({y:61.6},0).wait(1).to({y:64.1},0).wait(1).to({y:66.1},0).wait(1).to({y:67.7},0).wait(1).to({y:69},0).wait(1).to({y:69.9},0).wait(1).to({y:70.6},0).wait(1).to({y:71.2},0).wait(1).to({y:71.6},0).wait(1).to({y:71.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68,68.5,74,73.6);

})(about4Lib = about4Lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var about4Lib, images, createjs, ss;