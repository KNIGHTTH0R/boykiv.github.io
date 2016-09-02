(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 120,
	height: 120,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.TextList = function() {
	this.initialize();

	// Line 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CECECD").s().p("AiyAOIAAgcIFlAAIAAAcg");
	this.shape.setTransform(32,16.5,1.113,1);

	// Line 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CECECD").s().p("AkrAPIAAgdIJXAAIAAAdg");
	this.shape_1.setTransform(42.1,28.5);

	// Line 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CECECD").s().p("AkrAPIAAgcIJXAAIAAAcg");
	this.shape_2.setTransform(42.1,40.5);

	// Line 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CECECD").s().p("AkrAPIAAgdIJXAAIAAAdg");
	this.shape_3.setTransform(41.9,52.4);

	// Line 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CECECD").s().p("AkrAPIAAgdIJXAAIAAAdg");
	this.shape_4.setTransform(42.1,64.5);

	// Line 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CECECD").s().p("AkrAPIAAgcIJXAAIAAAcg");
	this.shape_5.setTransform(42.1,76.5);

	// Line 7
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CECECD").s().p("AkrAOIAAgcIJXAAIAAAcg");
	this.shape_6.setTransform(42.1,88.5);

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AmjIRIAAwhINHAAIAAQhg");
	this.shape_7.setTransform(42,52.9);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84,105.8);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CECECD").s().p("AiyAOIAAgcIFlAAIAAAcg");
	this.shape.setTransform(0,0,0.278,1,0,0,0,-17.8,-1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10,3);


// stage content:
(lib.UX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		var self = this;
		$('.ux-icon-block').on('mouseover click', function() {
			self.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48));

	// Static
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CECECD").s().p("AmjAOIAAgcINHAAIAAAcg");
	this.shape.setTransform(60,118.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65A46").s().p("AlmBLIAAg8QgBgNAJgGQAJgJAMAAIEQAAQAAgZARgSQATgSAWAAQAZAAASASQARASAAAZIEMAAQANAAAJAJQAIAGABANIAAA8gAgUgjQgIAJgBANQABAMAIAHQAKAJALAAQANAAAJgJQAJgHAAgMQAAgNgJgJQgJgIgNAAQgLAAgKAIg");
	this.shape_1.setTransform(60.1,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(48));

	// Old list
	this.movieClip_2 = new lib.TextList();
	this.movieClip_2.setTransform(60,64.9,1,1,0,0,0,42,52.9);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).to({rotation:90,x:-53.7,y:42},8,cjs.Ease.get(-0.4)).wait(40));

	// Line 1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(35,28.5,1,1,0,0,0,5,1.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(1).to({scaleX:2,x:40},0).wait(1).to({scaleX:3,x:45},0).wait(1).to({scaleX:4,x:50},0).wait(37));

	// Line 2
	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(30,39);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(1).to({regX:5,regY:1.5,scaleX:2,x:40,y:40.5},0).wait(1).to({scaleX:3,x:45},0).wait(1).to({scaleX:4,x:50},0).wait(1).to({scaleX:5,x:55},0).wait(1).to({scaleX:6,x:60},0).wait(1).to({regX:0,regY:0,x:30,y:39},0).wait(30));

	// Line 3
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(30,51);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).wait(1).to({regX:5,regY:1.5,scaleX:2,x:40,y:52.5},0).wait(1).to({scaleX:3,x:45},0).wait(1).to({scaleX:4,x:50},0).wait(1).to({scaleX:5,x:55},0).wait(1).to({scaleX:6,x:60},0).wait(1).to({regX:0,regY:0,x:30,y:51},0).wait(24));

	// Line 4
	this.instance_3 = new lib.Symbol6();
	this.instance_3.setTransform(30,62.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(1).to({regX:5,regY:1.5,scaleX:2,x:40,y:64.4},0).wait(1).to({scaleX:3,x:45},0).wait(1).to({scaleX:4,x:50},0).wait(1).to({scaleX:5,x:55},0).wait(1).to({scaleX:6,x:60},0).wait(1).to({regX:0,regY:0,x:30,y:62.9},0).wait(18));

	// Line 5
	this.instance_4 = new lib.Symbol6();
	this.instance_4.setTransform(30,75);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).wait(1).to({regX:5,regY:1.5,scaleX:2,x:40,y:76.5},0).wait(1).to({scaleX:3,x:45},0).wait(1).to({scaleX:4,x:50},0).wait(1).to({scaleX:5,x:55},0).wait(1).to({scaleX:6,x:60},0).wait(1).to({regX:0,regY:0,x:30,y:75},0).wait(12));

	// Line 6
	this.instance_5 = new lib.Symbol6();
	this.instance_5.setTransform(30,87);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36).to({_off:false},0).wait(1).to({regX:5,regY:1.5,scaleX:2,x:40,y:88.5},0).wait(1).to({scaleX:3,x:45},0).wait(1).to({scaleX:4,x:50},0).wait(1).to({scaleX:5,x:55},0).wait(1).to({scaleX:6,x:60},0).wait(1).to({regX:0,regY:0,x:30,y:87},0).wait(6));

	// Line 7
	this.instance_6 = new lib.Symbol6();
	this.instance_6.setTransform(30,99);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(42).to({_off:false},0).wait(1).to({regX:5,regY:1.5,scaleX:2,x:40,y:100.5},0).wait(1).to({scaleX:3,x:45},0).wait(1).to({scaleX:4,x:50},0).wait(1).to({scaleX:5,x:55},0).wait(1).to({scaleX:6,x:60},0).wait(1));

	// New list
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmjIRIAAwhINHAAIAAQhg");
	this.shape_2.setTransform(60,64.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78,60,84,120);

})(UXLib = UXLib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var UXLib, images, createjs, ss;