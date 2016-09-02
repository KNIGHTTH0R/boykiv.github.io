(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 166,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Button = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B8DC8").s().p("Ag6ATIAAglIB2AAIAAAlg");
	this.shape.setTransform(6,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#325980").s().p("AgdAsIAAhXIA7AAIAABXg");
	this.shape_1.setTransform(6.1,8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#325980").s().p("AgpANQgRgGAAgHQAAgGARgGQARgFAYAAQAYAAASAFQASAGAAAGQAAAHgSAGQgSAFgYAAQgYAAgRgFg");
	this.shape_2.setTransform(6,1.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,12.6);


(lib.Arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65A46").s().p("AhZA8ICviVIADAEIiVCvg");
	this.shape.setTransform(9,9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18,18.1);


(lib.Clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#325980").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQgBQARABAMAMQANAMAAAQQAAARgNAMQgMANgRAAQgQAAgMgNg");
	this.shape.setTransform(37.8,38.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(96));

	// Arrow
	this.instance = new lib.Arrow("synched",0);
	this.instance.setTransform(37.8,38.3,1,1,0,0,0,1.4,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({startPosition:0},0).wait(1).to({regX:9,regY:9,rotation:4.7,x:46,y:31.3},0).wait(1).to({rotation:9.5,x:46.6,y:32},0).wait(1).to({rotation:14.2,x:47,y:32.7},0).wait(1).to({rotation:18.9,x:47.5,y:33.5},0).wait(1).to({rotation:23.7,x:47.9,y:34.3},0).wait(1).to({rotation:28.4,x:48.1,y:35.2},0).wait(1).to({rotation:33.2,x:48.4,y:36},0).wait(1).to({rotation:37.9,x:48.5,y:37},0).wait(1).to({rotation:42.6,y:37.8},0).wait(1).to({rotation:47.4,x:48.6,y:38.7},0).wait(1).to({rotation:52.1,x:48.5,y:39.6},0).wait(1).to({rotation:56.8,x:48.3,y:40.5},0).wait(1).to({rotation:61.6,x:48.2,y:41.3},0).wait(1).to({rotation:66.3,x:47.8,y:42.2},0).wait(1).to({rotation:71.1,x:47.5,y:43},0).wait(1).to({rotation:75.8,x:47.1,y:43.8},0).wait(1).to({rotation:80.5,x:46.6,y:44.6},0).wait(1).to({rotation:85.3,x:46.1,y:45.2},0).wait(1).to({rotation:90,x:45.5,y:45.9},0).wait(1).to({rotation:94.7,x:44.8,y:46.5},0).wait(1).to({rotation:99.5,x:44.1,y:47.1},0).wait(1).to({rotation:104.2,x:43.4,y:47.5},0).wait(1).to({rotation:108.9,x:42.6,y:48},0).wait(1).to({rotation:113.7,x:41.8,y:48.4},0).wait(1).to({rotation:118.4,x:40.9,y:48.6},0).wait(1).to({rotation:123.2,x:40.1,y:48.9},0).wait(1).to({rotation:127.9,x:39.1,y:49},0).wait(1).to({rotation:132.6,x:38.3},0).wait(1).to({rotation:137.4,x:37.4,y:49.1},0).wait(1).to({rotation:142.1,x:36.5,y:49},0).wait(1).to({rotation:146.8,x:35.6,y:48.8},0).wait(1).to({rotation:151.6,x:34.8,y:48.7},0).wait(1).to({rotation:156.3,x:33.9,y:48.3},0).wait(1).to({rotation:161.1,x:33.1,y:48},0).wait(1).to({rotation:165.8,x:32.3,y:47.6},0).wait(1).to({rotation:170.5,x:31.5,y:47.1},0).wait(1).to({rotation:175.3,x:30.9,y:46.6},0).wait(1).to({rotation:180,x:30.2,y:46},0).wait(1).to({rotation:184.7,x:29.6,y:45.3},0).wait(1).to({rotation:189.5,x:29,y:44.6},0).wait(1).to({rotation:194.2,x:28.6,y:43.9},0).wait(1).to({rotation:198.9,x:28.1,y:43.1},0).wait(1).to({rotation:203.7,x:27.7,y:42.3},0).wait(1).to({rotation:208.4,x:27.5,y:41.4},0).wait(1).to({rotation:213.2,x:27.2,y:40.6},0).wait(1).to({rotation:217.9,x:27.1,y:39.6},0).wait(1).to({rotation:222.6,y:38.8},0).wait(1).to({rotation:227.4,x:27,y:37.9},0).wait(1).to({rotation:232.1,x:27.1,y:37},0).wait(1).to({rotation:236.8,x:27.3,y:36.1},0).wait(1).to({rotation:241.6,x:27.4,y:35.3},0).wait(1).to({rotation:246.3,x:27.8,y:34.4},0).wait(1).to({rotation:251.1,x:28.1,y:33.6},0).wait(1).to({rotation:255.8,x:28.5,y:32.8},0).wait(1).to({rotation:260.5,x:29,y:32},0).wait(1).to({rotation:265.3,x:29.5,y:31.4},0).wait(1).to({rotation:270,x:30.2,y:30.7},0).wait(1).to({rotation:274.7,x:30.8,y:30.1},0).wait(1).to({rotation:279.5,x:31.5,y:29.5},0).wait(1).to({rotation:284.2,x:32.2,y:29.1},0).wait(1).to({rotation:288.9,x:33,y:28.6},0).wait(1).to({rotation:293.7,x:33.8,y:28.2},0).wait(1).to({rotation:298.4,x:34.7,y:28},0).wait(1).to({rotation:303.2,x:35.5,y:27.7},0).wait(1).to({rotation:307.9,x:36.5,y:27.6},0).wait(1).to({rotation:312.6,x:37.3},0).wait(1).to({rotation:317.4,x:38.2,y:27.5},0).wait(1).to({rotation:322.1,x:39.1,y:27.6},0).wait(1).to({rotation:326.8,x:40,y:27.8},0).wait(1).to({rotation:331.6,x:40.8,y:27.9},0).wait(1).to({rotation:336.3,x:41.7,y:28.3},0).wait(1).to({rotation:341.1,x:42.5,y:28.6},0).wait(1).to({rotation:345.8,x:43.3,y:29},0).wait(1).to({rotation:350.5,x:44.1,y:29.5},0).wait(1).to({rotation:355.3,x:44.7,y:30},0).wait(1).to({rotation:360,x:45.4,y:30.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Static
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#813C33").s().p("AgQAFIAAgJIAgAAIAAAKg");
	this.shape_1.setTransform(8.9,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#813C33").s().p("AgPgGIAJgJIAWAWIgJAJg");
	this.shape_2.setTransform(17.4,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#813C33").s().p("AgEARIAAggIAJAAIAAAgg");
	this.shape_3.setTransform(37.9,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#813C33").s().p("AgPAHIAWgWIAJAIIgWAXg");
	this.shape_4.setTransform(58.2,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#813C33").s().p("AgQAGIAAgLIAgABIAAAKg");
	this.shape_5.setTransform(66.7,38.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#813C33").s().p("AgPgGIAJgJIAWAWIgJAJg");
	this.shape_6.setTransform(58.2,58.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#813C33").s().p("AgPAHIAWgWIAJAJIgWAWg");
	this.shape_7.setTransform(17.2,58.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#813C33").s().p("AgEARIAAghIAJAAIAAAhg");
	this.shape_8.setTransform(37.8,67);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjvDwQhjhkgBiMQABiMBjhjQBjhkCMAAQCMAABkBkQBkBjAACMQAACMhkBkQhkBjiMABQiMgBhjhjg");
	this.shape_9.setTransform(37.8,38.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4B8DC8").s().p("AkJELQhvhvAAicQAAibBvhvQBuhuCbAAQCcAABvBuQBuBvAACbQAACchuBvQhvBuicAAQibAAhuhug");
	this.shape_10.setTransform(37.8,38.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#325980").s().p("AglgbIAhgTIAqBKIghATg");
	this.shape_11.setTransform(18.7,4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#325980").s().p("AglAcIAqhKIAhATIgqBKg");
	this.shape_12.setTransform(57,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(96));

	// Button
	this.instance_1 = new lib.Button("synched",0);
	this.instance_1.setTransform(37.8,-5.3,1,1,0,0,0,6,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-4.9},0).wait(1).to({y:-3.9},0).wait(1).to({y:-1.9},0).wait(1).to({y:-0.8},0).wait(1).to({y:-0.5},0).wait(1).to({startPosition:0},0).wait(84).to({startPosition:0},0).wait(1).to({y:-0.8},0).wait(1).to({y:-1.9},0).wait(1).to({y:-3.9},0).wait(1).to({y:-4.9},0).wait(1).to({y:-5.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11.6,75.5,87.4);


// stage content:



(lib.Performance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		var self = this;
		$('.performance-icon-block').on('mouseover click', function() {
			self.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(96));

	// Clock
	this.instance = new lib.Clock("synched",0);
	this.instance.setTransform(83.1,55.1,1,1,0,0,0,37.8,37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:32.1,y:49.4,startPosition:1},0).wait(1).to({y:49.9,startPosition:2},0).wait(1).to({y:50.5,startPosition:3},0).wait(1).to({y:51.1,startPosition:4},0).wait(1).to({y:51.5,startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({y:51.1,startPosition:7},0).wait(1).to({y:50.5,startPosition:8},0).wait(1).to({y:49.9,startPosition:9},0).wait(1).to({y:49.4,startPosition:10},0).wait(1).to({y:49.3,startPosition:11},0).wait(1).to({regY:37.9,y:55.1,startPosition:12},0).wait(84));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4E1F5").s().p("As9HzIAAvmIZ6AAIAAPmg");
	this.shape.setTransform(83,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(83,50,166,100);

})(PerformanceLib = PerformanceLib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var PerformanceLib, images, createjs, ss;