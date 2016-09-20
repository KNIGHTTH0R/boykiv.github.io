(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 264,
	height: 160,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Marks = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#71BF43").s().p("AgngBIALgLIAVAUIAkgkIALALIgvAug");
	this.shape.setTransform(128.3,7.7,2.453,2.464);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65034").s().p("AhMAxIB9h9IAcAcIh9B9g");
	this.shape_1.setTransform(68.7,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65034").s().p("AhMgwIAcgcIB9B9IgcAcg");
	this.shape_2.setTransform(68.7,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#71BF43").s().p("AgngBIALgLIAVAUIAkgkIALALIgvAug");
	this.shape_3.setTransform(10,7.2,2.453,2.464);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,138.3,15.6);


(lib.Headset = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#467296").s().p("Ag6ArIBnhkIAOAOIhoBlg");
	this.shape.setTransform(33,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#467296").s().p("ACfB1IABgKIABgIIACgbQgBgXgHgXQgLgjgYgdQgYgcgggQQgfgQghAAQgeAAggAQQgfAQgXAcQgYAegMAiQgKAjAEAmIAAABIAAAHIACAKIgTABIgSAAQgKAAAAgLIAAhQQAAgLAKAAIAZAAQAMgjAagfQAZgfAjgSQAjgSAjAAQAlAAAkASQAjASAaAfQAZAfAMAjIAYAAQAJAAAAALIAABQQAAAIgGACIgDABg");
	this.shape_1.setTransform(20.4,11.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.9,33.4);


(lib.Head1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("An5KpQi+kHg6miQgai/A3i3QAzirByiJQBuiFCShLQCVhNCaAAQCaAACVBNQCUBLBuCFQBzCKAzCqQA2C3gcC/QhAGri7EDQjMEakqAAQkqAAjPkfg");
	this.shape.setTransform(15.4,19.6,0.202,0.202);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.9,39.2);


(lib.Cross = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bottom left mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjmAAIDyjzID0DzIj0D0g");
	var mask_graphics_4 = new cjs.Graphics().p("AjmAAIDyjzID0DzIj0D0g");
	var mask_graphics_5 = new cjs.Graphics().p("AjzAAIDzjzID0DzIj0D0g");
	var mask_graphics_6 = new cjs.Graphics().p("AjzAAIDzjzID0DzIj0Dzg");
	var mask_graphics_7 = new cjs.Graphics().p("AjyAAIDyjzID0DzIj0Dzg");
	var mask_graphics_8 = new cjs.Graphics().p("AjyAAIDyjzID0DzIj0Dzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:25.6,y:-12.1}).wait(4).to({graphics:mask_graphics_4,x:25.6,y:-12.1}).wait(1).to({graphics:mask_graphics_5,x:23.4,y:-8.6}).wait(1).to({graphics:mask_graphics_6,x:19.9,y:-5.1}).wait(1).to({graphics:mask_graphics_7,x:16.4,y:-1.6}).wait(1).to({graphics:mask_graphics_8,x:12.9,y:1.9}).wait(201));

	// Bottom left
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65034").s().p("AhMAxIB9h9IAcAcIh9B9g");
	this.shape.setTransform(7.8,7.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(209));

	// Top left mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AjzAAIDzjzIDzDzIjzD0g");
	var mask_1_graphics_1 = new cjs.Graphics().p("AjzAAIDzjzIDzDzIjzD0g");
	var mask_1_graphics_2 = new cjs.Graphics().p("AjyAAIDyjzIDzDzIjzDzg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AjyAAIDyjzID0DzIj0Dzg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AjyAAIDyjzID0DzIj0Dzg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-11,y:-12.1}).wait(1).to({graphics:mask_1_graphics_1,x:-7.5,y:-8.6}).wait(1).to({graphics:mask_1_graphics_2,x:-4,y:-5.1}).wait(1).to({graphics:mask_1_graphics_3,x:-0.5,y:-1.6}).wait(1).to({graphics:mask_1_graphics_4,x:3,y:1.9}).wait(205));

	// Top left
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65034").s().p("AhMgwIAcgcIB9B9IgcAcg");
	this.shape_1.setTransform(7.8,7.8);

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(209));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.6,12.3);


(lib.Circlemotioninside = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65034").s().p("AhoBpQgsgsgBg9QABg9AsgrQArgsA9gBQA9ABAsAsQAtArgBA9QABA9gtAsQgsAtg9gBQg9ABgrgtg");
	this.shape.setTransform(15,15);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.Check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ai0BcIAAi6IFpAAIAAC6g");
	var mask_graphics_1 = new cjs.Graphics().p("Ai0BdIDQkmICZBtIjQEmg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah4ijIC3geIA6FlIi3Aeg");
	var mask_graphics_3 = new cjs.Graphics().p("AjAhAICHiCID6EDIiHCCg");
	var mask_graphics_4 = new cjs.Graphics().p("AjKAWIBEitIFRCCIhECtg");
	var mask_graphics_5 = new cjs.Graphics().p("Ai9BJIAUi4IFnAnIgUC4g");
	var mask_graphics_6 = new cjs.Graphics().p("Ai2BZIAEi5IFpAIIgEC5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:3.5,y:-9.6}).wait(1).to({graphics:mask_graphics_1,x:-4.1,y:-5.8}).wait(1).to({graphics:mask_graphics_2,x:-5.8,y:1.2}).wait(1).to({graphics:mask_graphics_3,x:-3.3,y:6.2}).wait(1).to({graphics:mask_graphics_4,x:0.1,y:8.4}).wait(1).to({graphics:mask_graphics_5,x:2.5,y:9}).wait(1).to({graphics:mask_graphics_6,x:3.3,y:9}).wait(276));

	// Check
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#71BF43").s().p("AgngBIALgLIAVAUIAkgkIALALIgvAug");
	this.shape.setTransform(6.4,7.2,2.453,2.464);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(282));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Headset
	this.instance = new lib.Headset("synched",0);
	this.instance.setTransform(-56.5,-46.9,1.198,1.198,0,0,0,20.4,16.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:16.7,scaleX:1.19,scaleY:1.19,x:-56.4,y:-46.5,alpha:0.027},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-56.5,y:-46,alpha:0.08},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:-45,alpha:0.185},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:-43.3,alpha:0.37},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:-41,alpha:0.63},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:-39.3,alpha:0.815},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-38.3,alpha:0.92},0).wait(1).to({scaleX:1,scaleY:1,y:-37.8,alpha:0.973},0).wait(1).to({scaleX:1,scaleY:1,y:-37.6,alpha:1},0).wait(1).to({regY:16.6,y:-37.7},0).wait(1).to({regY:16.7,y:-37.1},0).wait(1).to({y:-36.2},0).wait(1).to({y:-35.6},0).wait(1).to({y:-35.7},0).wait(1).to({y:-36.6},0).wait(1).to({y:-37.4},0).wait(1).to({y:-37.5},0).wait(1).to({y:-36.9},0).wait(1).to({y:-36},0).wait(1).to({y:-35.6},0).wait(1).to({y:-36},0).wait(1).to({y:-36.9},0).wait(1).to({y:-37.5},0).wait(1).to({y:-37.4},0).wait(1).to({y:-36.6},0).wait(1).to({y:-35.7},0).wait(1).to({y:-35.6},0).wait(1).to({y:-36.2},0).wait(1).to({y:-37.1},0).wait(1).to({y:-37.6},0).wait(1).to({regY:16.6,y:-37.7},0).wait(9).to({startPosition:0},0).wait(1).to({regY:16.7,y:-37.6,alpha:0.969},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.756},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.031},0).wait(1).to({alpha:0},0).wait(1).to({regY:16.6,scaleX:1.2,scaleY:1.2,x:1.5,y:-46.9},0).wait(151));

	// Head
	this.instance_1 = new lib.Head1("synched",0);
	this.instance_1.setTransform(-56.4,-32.4,1,1,0,0,0,15.4,19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:-31.9},0).wait(1).to({y:-31},0).wait(1).to({y:-30.4},0).wait(1).to({y:-30.5},0).wait(1).to({y:-31.4},0).wait(1).to({y:-32.2},0).wait(1).to({y:-32.3},0).wait(1).to({y:-31.7},0).wait(1).to({y:-30.8},0).wait(1).to({y:-30.4},0).wait(1).to({y:-30.8},0).wait(1).to({y:-31.7},0).wait(1).to({y:-32.3},0).wait(1).to({y:-32.2},0).wait(1).to({y:-31.4},0).wait(1).to({y:-30.5},0).wait(1).to({y:-30.4},0).wait(1).to({y:-31},0).wait(1).to({y:-31.9},0).wait(1).to({y:-32.4},0).wait(1).to({startPosition:0},0).wait(169));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.9,-66.8,49,54);


(lib.Circlemotion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Circlemotioninside("synched",0);
	this.instance.setTransform(15,15,1,1,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.979},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.944},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:15.1,y:15.1,alpha:0.881},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:15,y:15,alpha:0.773},0).wait(1).to({scaleX:1.79,scaleY:1.79,alpha:0.609},0).wait(1).to({scaleX:2.22,scaleY:2.22,alpha:0.391},0).wait(1).to({scaleX:2.55,scaleY:2.55,alpha:0.227},0).wait(1).to({scaleX:2.77,scaleY:2.77,x:15.1,y:15.1,alpha:0.12},0).wait(1).to({scaleX:2.89,scaleY:2.89,x:15,y:15,alpha:0.056},0).wait(1).to({scaleX:2.96,scaleY:2.96,alpha:0.021},0).wait(1).to({scaleX:3.01,scaleY:3.01,x:15.1,y:15.1,alpha:0},0).wait(1).to({scaleX:1,scaleY:1,x:15,y:15,alpha:1},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.979},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.944},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:15.1,y:15.1,alpha:0.881},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:15,y:15,alpha:0.773},0).wait(1).to({scaleX:1.78,scaleY:1.78,alpha:0.609},0).wait(1).to({scaleX:2.22,scaleY:2.22,x:15.1,y:15.1,alpha:0.391},0).wait(1).to({scaleX:2.55,scaleY:2.55,x:15,y:15,alpha:0.227},0).wait(1).to({scaleX:2.77,scaleY:2.77,alpha:0.12},0).wait(1).to({scaleX:2.89,scaleY:2.89,x:15.1,y:15.1,alpha:0.056},0).wait(1).to({scaleX:2.96,scaleY:2.96,alpha:0.021},0).wait(1).to({scaleX:3,scaleY:3,x:15,y:15,alpha:0},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.979},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.944},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:15.1,y:15.1,alpha:0.881},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:15,y:15,alpha:0.773},0).wait(1).to({scaleX:1.78,scaleY:1.78,alpha:0.609},0).wait(1).to({scaleX:2.22,scaleY:2.22,x:15.1,y:15.1,alpha:0.391},0).wait(1).to({scaleX:2.55,scaleY:2.55,x:15,y:15,alpha:0.227},0).wait(1).to({scaleX:2.77,scaleY:2.77,alpha:0.12},0).wait(1).to({scaleX:2.89,scaleY:2.89,x:15.1,y:15.1,alpha:0.056},0).wait(1).to({scaleX:2.96,scaleY:2.96,alpha:0.021},0).wait(1).to({scaleX:3,scaleY:3,x:15,y:15,alpha:0},0).wait(1).to({scaleX:3.67,scaleY:3.67},0).wait(513));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


// stage content:



(lib.ODC3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_198 = function() {
		odc4.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(198).call(this.frame_198).wait(1));

	// Heads
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("An5KpQi+kHg6miQgai/A3i3QAzirByiJQBuiFCShLQCVhNCaAAQCaAACVBNQCUBLBuCFQBzCKAzCqQA2C3gcC/QhAGri7EDQjMEakqAAQkqAAjPkfg");
	this.shape.setTransform(192,47.6,0.202,0.202);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("An5KpQi+kHg6miQgai/A3i3QAzirByiJQBuiFCShLQCVhNCaAAQCaAACVBNQCUBLBuCFQBzCKAzCqQA2C3gcC/QhAGri7EDQjMEakqAAQkqAAjPkfg");
	this.shape_1.setTransform(133.8,47.6,0.202,0.202);

	this.instance = new lib.Head1("synched",0);
	this.instance.setTransform(75.7,47.6,1,1,0,0,0,15.4,19.6);

	this.instance_1 = new lib.Head("synched",0);
	this.instance_1.setTransform(104.7,41.1,1,1,0,0,0,-27.5,-38.9);

	this.instance_2 = new lib.Head("synched",48);
	this.instance_2.setTransform(104.7,41.1,1,1,0,0,0,-27.5,-38.9);

	this.instance_3 = new lib.Head("synched",96);
	this.instance_3.setTransform(104.7,41.1,1,1,0,0,0,-27.5,-38.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1,p:{x:104.7}},{t:this.shape_1},{t:this.shape}]},40).to({state:[{t:this.instance_2,p:{x:104.7}},{t:this.shape},{t:this.instance_1,p:{x:162.5}}]},48).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:162.5}},{t:this.instance_1,p:{x:221}}]},48).wait(63));

	// Marks
	this.instance_4 = new lib.Check("synched",0);
	this.instance_4.setTransform(68.6,134.8,1,1,0,0,0,-0.5,-0.3);

	this.instance_5 = new lib.Cross("synched",0);
	this.instance_5.setTransform(134.4,130,1,1,0,0,0,7.9,-5.1);

	this.instance_6 = new lib.Check("synched",95);
	this.instance_6.setTransform(68.6,134.8,1,1,0,0,0,-0.5,-0.3);

	this.instance_7 = new lib.Marks("synched",0);
	this.instance_7.setTransform(134.7,142.9,1,1,0,0,0,69.2,7.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4,p:{startPosition:0,x:68.6,y:134.8}}]},71).to({state:[{t:this.instance_4,p:{startPosition:47,x:68.6,y:134.8}},{t:this.instance_5,p:{startPosition:0}}]},47).to({state:[{t:this.instance_6},{t:this.instance_5,p:{startPosition:48}},{t:this.instance_4,p:{startPosition:0,x:187,y:135.3}}]},48).to({state:[{t:this.instance_7}]},18).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(184).to({_off:false},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(8));

	// Static
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AktigIB7imIHhGLIjXEDg");
	this.shape_2.setTransform(68.2,73.4,0.202,0.202);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AktBFIHfmLIB8CmImEHog");
	this.shape_3.setTransform(82.8,73.4,0.202,0.202);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5A7296").s().p("AswRvQh+hThuhjIhUhUIoH+HIPhlVIKWTRIKWzRIPiFVIoHeHQh2CFjKCFQmTEJmeAAQmdAAmTkJg");
	this.shape_4.setTransform(75.5,98.4,0.202,0.202);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A3B9CB").s().p("AgbBvIARjMIgRgaIARgVIAKAGIAKgGIASAVIgSAaIASDMIgcAeg");
	this.shape_5.setTransform(75.7,89);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DFDEDE").s().p("AoyAzIBJmMIPTAAIBJGMIozEmg");
	this.shape_6.setTransform(75.5,68.8,0.202,0.202);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFEEEE").s().p("AjlCzIhomEIDdhMIDhAAIDdBMIhpGEIjlBrg");
	this.shape_7.setTransform(75.5,98.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AktigIB7imIHhGLIjXEDg");
	this.shape_8.setTransform(126.1,73.4,0.202,0.202);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AktBFIHfmLIB8CmImEHog");
	this.shape_9.setTransform(140.7,73.4,0.202,0.202);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#467296").s().p("AiMDFQgWgPgUgRIgOgOIhalOICsg6IByBdIByhdICtA6IhbFOQgUAWgjAYQhGAthHABQhHgBhFgtg");
	this.shape_10.setTransform(133.7,98.8,1.164,1.164);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DFDEDE").s().p("AoyAzIBJmMIPTAAIBJGMIozEmg");
	this.shape_11.setTransform(133.7,68.8,0.202,0.202);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEEEE").s().p("AxwN2IoH+HIRFl3IRlAAIRFF3IoHeHIxxITg");
	this.shape_12.setTransform(133.7,98.5,0.202,0.202);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AktigIB7imIHhGLIjXEDg");
	this.shape_13.setTransform(184.9,73.4,0.202,0.202);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AktBFIHfmLIB8CmImEHog");
	this.shape_14.setTransform(199.4,73.4,0.202,0.202);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4B8DC8").s().p("AswRvQh+hThuhjIhUhUIoH+HIPhlVIKWTRIKWzRIPiFVIoHeHQh2CFjKCFQmTEJmeAAQmdAAmTkJg");
	this.shape_15.setTransform(192.2,98.4,0.202,0.202);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A0CDED").s().p("AgcBvIASjMIgSgaIASgVIAKAGIALgGIASAVIgSAaIASDMIgdAeg");
	this.shape_16.setTransform(192,89);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DFDEDE").s().p("AoyAzIBJmMIPTAAIBJGMIozEmg");
	this.shape_17.setTransform(192,68.8,0.202,0.202);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFEEEE").s().p("AxwN2IoH+HIRFl3IRlAAIRFF3IoHeHIxxITg");
	this.shape_18.setTransform(192,98.5,0.202,0.202);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(199));

	// Number
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag6BOIAAgeQAKAFAMADQAMADAMAAQAQAAAIgGQAJgGAAgOQAAgMgKgFQgKgFgTAAIgNAAIAAgaIANAAQASAAAJgFQAJgFAAgNQAAgTgWAAQgIAAgJADQgJACgLAHIgQgZQAXgRAhAAQAYAAAQALQAPALAAATQAAAQgKAMQgKALgRAEIAAABQAVACAKAIQALAKAAARQAAAZgSAOQgSAOgfAAQgcAAgWgKg");
	this.shape_19.setTransform(30.8,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(199));

	// Number circle
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4075A5").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A+AABUQAABWg9A9Qg9A9hWAAQhVAAg9g9gAg6BLQAVAKAcAAQAgAAASgOQARgOAAgZQAAgRgKgKQgLgIgVgCIAAgBQASgEAKgLQAJgMAAgQQAAgTgPgLQgPgLgZAAQggAAgYARIARAZQALgHAIgCQAJgDAIAAQAXAAAAATQAAANgJAFQgJAFgSAAIgOAAIAAAaIANAAQAUAAAKAFQAKAFAAAMQAAAOgJAGQgJAGgQAAQgLAAgMgDQgMgDgKgFg");
	this.shape_20.setTransform(30.8,30.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#596F92").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A+AABUQAABWg9A9Qg9A9hWAAQhVAAg9g9gAg6BLQAVAKAcAAQAgAAASgOQARgOAAgZQAAgRgKgKQgLgIgVgDQASgEAKgLQAJgMAAgQQAAgTgPgLQgPgLgZAAQggAAgYARIARAZQALgHAIgCQAJgDAIAAQAXAAAAATQAAANgJAFQgJAFgSAAIgOAAIAAAaIANAAQAUAAAKAFQAKAFAAAMQAAAOgJAGQgJAGgngDQgMgDgKgFg");
	this.shape_21.setTransform(30.8,30.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#72697F").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A+AABUQAABWg9A9Qg9A9hWAAQhVAAg9g9gAg6BLQAVAKAcAAQAgAAASgOQARgOAAgZQAAgRgKgKQgLgIgVgDQASgEAKgLQAJgMAAgQQAAgTgPgLQgPgLgZAAQggAAgYARIARAZQALgHAIgCQAJgDAIAAQAXAAAAATQAAANgJAFQgJAFgSAAIgOAAIAAAaIANAAQAUAAAKAFQAKAFAAAMQAAAOgJAGQgJAGgngDQgMgDgKgFg");
	this.shape_22.setTransform(30.8,30.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8B636D").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A+AABUQAABWg9A9Qg9A9hWAAQhVAAg9g9gAg6BLQAVAKAcAAQAgAAASgOQARgOAAgZQAAgRgKgKQgLgIgVgDQASgEAKgLQAJgMAAgQQAAgTgPgLQgPgLgZAAQggAAgYARIARAZQALgHAIgCQAJgDAIAAQAXAAAAATQAAANgJAFQgJAFgSAAIgOAAIAAAaIANAAQAUAAAKAFQAKAFAAAMQAAAOgJAGQgJAGgngDQgMgDgKgFg");
	this.shape_23.setTransform(30.8,30.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A45C5A").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A+AABUQAABWg9A9Qg9A9hWAAQhVAAg9g9gAg6BLQAVAKAcAAQAgAAASgOQARgOAAgZQAAgRgKgKQgLgIgVgDQASgEAKgLQAJgMAAgQQAAgTgPgLQgPgLgZAAQggAAgYARIARAZQALgHAIgCQAJgDAIAAQAXAAAAATQAAANgJAFQgJAFgSAAIgOAAIAAAaIANAAQAUAAAKAFQAKAFAAAMQAAAOgJAGQgJAGgngDQgMgDgKgFg");
	this.shape_24.setTransform(30.8,30.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BD5647").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A+AABUQAABWg9A9Qg9A9hWAAQhVAAg9g9gAg6BLQAVAKAcAAQAgAAASgOQARgOAAgZQAAgRgKgKQgLgIgVgDQASgEAKgLQAJgMAAgQQAAgTgPgLQgPgLgZAAQggAAgYARIARAZQALgHAIgCQAJgDAIAAQAXAAAAATQAAANgJAFQgJAFgSAAIgOAAIAAAaIANAAQAUAAAKAFQAKAFAAAMQAAAOgJAGQgJAGgngDQgMgDgKgFg");
	this.shape_25.setTransform(30.8,30.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D65034").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A+AABUQAABWg9A9Qg9A9hWAAQhVAAg9g9gAg6BLQAVAKAcAAQAgAAASgOQARgOAAgZQAAgRgKgKQgLgIgVgCIAAgBQASgEAKgLQAJgMAAgQQAAgTgPgLQgPgLgZAAQggAAgYARIARAZQALgHAIgCQAJgDAIAAQAXAAAAATQAAANgJAFQgJAFgSAAIgOAAIAAAaIANAAQAUAAAKAFQAKAFAAAMQAAAOgJAGQgJAGgQAAQgLAAgMgDQgMgDgKgFg");
	this.shape_26.setTransform(30.8,30.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C15544").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A+AABUQAABWg9A9Qg9A9hWAAQhVAAg9g9gAg6BLQAVAKAcAAQAgAAASgOQARgOAAgZQAAgRgKgKQgLgIgVgDQASgEAKgLQAJgMAAgQQAAgTgPgLQgPgLgZAAQggAAgYARIARAZQALgHAIgCQAJgDAIAAQAXAAAAATQAAANgJAFQgJAFgSAAIgOAAIAAAaIANAAQAUAAAKAFQAKAFAAAMQAAAOgJAGQgJAGgngDQgMgDgKgFg");
	this.shape_27.setTransform(30.8,30.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AB5B54").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A+AABUQAABWg9A9Qg9A9hWAAQhVAAg9g9gAg6BLQAVAKAcAAQAgAAASgOQARgOAAgZQAAgRgKgKQgLgIgVgDQASgEAKgLQAJgMAAgQQAAgTgPgLQgPgLgZAAQggAAgYARIARAZQALgHAIgCQAJgDAIAAQAXAAAAATQAAANgJAFQgJAFgSAAIgOAAIAAAaIANAAQAUAAAKAFQAKAFAAAMQAAAOgJAGQgJAGgngDQgMgDgKgFg");
	this.shape_28.setTransform(30.8,30.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#966064").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A+AABUQAABWg9A9Qg9A9hWAAQhVAAg9g9gAg6BLQAVAKAcAAQAgAAASgOQARgOAAgZQAAgRgKgKQgLgIgVgDQASgEAKgLQAJgMAAgQQAAgTgPgLQgPgLgZAAQggAAgYARIARAZQALgHAIgCQAJgDAIAAQAXAAAAATQAAANgJAFQgJAFgSAAIgOAAIAAAaIANAAQAUAAAKAFQAKAFAAAMQAAAOgJAGQgJAGgngDQgMgDgKgFg");
	this.shape_29.setTransform(30.8,30.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#806575").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A+AABUQAABWg9A9Qg9A9hWAAQhVAAg9g9gAg6BLQAVAKAcAAQAgAAASgOQARgOAAgZQAAgRgKgKQgLgIgVgDQASgEAKgLQAJgMAAgQQAAgTgPgLQgPgLgZAAQggAAgYARIARAZQALgHAIgCQAJgDAIAAQAXAAAAATQAAANgJAFQgJAFgSAAIgOAAIAAAaIANAAQAUAAAKAFQAKAFAAAMQAAAOgJAGQgJAGgngDQgMgDgKgFg");
	this.shape_30.setTransform(30.8,30.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6B6A85").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A+AABUQAABWg9A9Qg9A9hWAAQhVAAg9g9gAg6BLQAVAKAcAAQAgAAASgOQARgOAAgZQAAgRgKgKQgLgIgVgDQASgEAKgLQAJgMAAgQQAAgTgPgLQgPgLgZAAQggAAgYARIARAZQALgHAIgCQAJgDAIAAQAXAAAAATQAAANgJAFQgJAFgSAAIgOAAIAAAaIANAAQAUAAAKAFQAKAFAAAMQAAAOgJAGQgJAGgngDQgMgDgKgFg");
	this.shape_31.setTransform(30.8,30.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#557095").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A+AABUQAABWg9A9Qg9A9hWAAQhVAAg9g9gAg6BLQAVAKAcAAQAgAAASgOQARgOAAgZQAAgRgKgKQgLgIgVgDQASgEAKgLQAJgMAAgQQAAgTgPgLQgPgLgZAAQggAAgYARIARAZQALgHAIgCQAJgDAIAAQAXAAAAATQAAANgJAFQgJAFgSAAIgOAAIAAAaIANAAQAUAAAKAFQAKAFAAAMQAAAOgJAGQgJAGgngDQgMgDgKgFg");
	this.shape_32.setTransform(30.8,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},185).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	// Circle motion
	this.instance_8 = new lib.Circlemotion("synched",0);
	this.instance_8.setTransform(30.9,31.1,1,1,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(199));

	// Background
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D7EAF8").s().p("A0nMgIAA4/MApOAAAIAAY/g");
	this.shape_33.setTransform(132,80);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#325980").s().p("AgngBIALgLIAVATIAkgjIALALIgvAug");
	this.shape_34.setTransform(123.4,115.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A0CDED").s().p("AghAhIAAhBIBDAAIAABBg");
	this.shape_35.setTransform(122.8,116.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#325980").s().p("AgngBIALgLIAVATIAkgjIALALIgvAug");
	this.shape_36.setTransform(123.4,99.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A0CDED").s().p("AghAhIAAhBIBDAAIAABBg");
	this.shape_37.setTransform(122.8,99.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CECECD").s().p("AjoAKIAAgTIHRAAIAAATg");
	this.shape_38.setTransform(155.2,118.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CECECD").s().p("AknAKIAAgTIJOAAIAAATg");
	this.shape_39.setTransform(161.4,113.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CECECD").s().p("AjoALIAAgVIHRAAIAAAVg");
	this.shape_40.setTransform(155.5,101.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CECECD").s().p("AknAKIAAgTIJOAAIAAATg");
	this.shape_41.setTransform(161.8,97.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#325980").s().p("AgngBIALgLIAVATIAkgjIALALIgvAug");
	this.shape_42.setTransform(123.4,82.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A0CDED").s().p("AghAhIAAhBIBDAAIAABBg");
	this.shape_43.setTransform(122.8,82.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CECECD").s().p("AjoALIAAgVIHRAAIAAAVg");
	this.shape_44.setTransform(155.5,85.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CECECD").s().p("AknAKIAAgTIJOAAIAAATg");
	this.shape_45.setTransform(161.8,80.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#325980").s().p("AgngBIALgLIAVAUIAkgkIALALIgvAug");
	this.shape_46.setTransform(123.4,65.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A0CDED").s().p("AghAhIAAhBIBDAAIAABBg");
	this.shape_47.setTransform(122.8,66.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CECECD").s().p("AjoALIAAgVIHRAAIAAAVg");
	this.shape_48.setTransform(155.5,68.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CECECD").s().p("AknAKIAAgTIJOAAIAAATg");
	this.shape_49.setTransform(161.8,63.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#325980").s().p("AgngBIALgLIAVAUIAkgkIALALIgvAug");
	this.shape_50.setTransform(123.4,49.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A0CDED").s().p("AghAhIAAhBIBDAAIAABBg");
	this.shape_51.setTransform(122.8,49.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CECECD").s().p("AjoAKIAAgTIHRAAIAAATg");
	this.shape_52.setTransform(155.5,51.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CECECD").s().p("AknAKIAAgTIJOAAIAAATg");
	this.shape_53.setTransform(161.8,47.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AnPIFIAAwIIOfAAIAAQIg");
	this.shape_54.setTransform(154.7,83.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A0CDED").s().p("AhbgrIAjgvICUB1IhMA/g");
	this.shape_55.setTransform(99.6,74.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A0CDED").s().p("AhaAbICTh1IAiAvIhqCFg");
	this.shape_56.setTransform(118,74.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4B8DC8").s().p("AjhE6QgjgXgfgbIgXgXIiQoVIEThfIC3BIIC3hIIEUBfIiQIVQghAlg4AkQhwBKhyAAQhyAAhvhKg");
	this.shape_57.setTransform(108.8,109.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EFEEEE").s().p("AiLC9Qg1hKgQhzQgPhqBFhSQBBhPBZAAQBZAABCBPQBFBTgQBpQgSB2gzBIQg5BOhSAAQhSAAg5hPg");
	this.shape_58.setTransform(108.8,38.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DFDEDE").s().p("AibAOIAVhtIEOAAIAUBtIicBSg");
	this.shape_59.setTransform(108.8,68);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EFEEEE").s().p("Ak6D1IiQoUIEvhpIE2AAIEwBpIiQIUIk7CTg");
	this.shape_60.setTransform(108.8,108.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).wait(199));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(132,80,264,160);

})(ODC3Lib = ODC3Lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var ODC3Lib, images, createjs, ss;