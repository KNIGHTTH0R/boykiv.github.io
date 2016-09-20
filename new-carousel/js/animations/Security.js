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



(lib.Topstick = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("ApGALIAAgVISNABIAAAUg");
	this.shape.setTransform(58.4,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,116.7,2.3);


(lib.Failed = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D65034").ss(2.8,2,0,3).p("AnXhmIOuAAIAADNIuuAAg");
	this.shape.setTransform(47.2,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65034").s().p("ADNArIAAhUIAeAAQAVAAALALQALAKAAAUQAAATgMAMQgMAMgVAAgADlAYIAEAAQALAAAFgHQAFgFAAgMQAAgLgFgGQgEgGgKAAIgGAAgABtArIAAhUIAyAAIAAASIgcAAIAAAOIAaAAIAAAQIgaAAIAAARIAcAAIAAATgAAHArIAAhUIAYAAIAABBIAhAAIAAATgAhAArIAAhUIAYAAIAABUgAiBArIgFgRIgbAAIgEARIgaAAIAchVIAfAAIAcBVgAiVgSIgHAZIASAAIgEgMIgDgMIgCgKIgCAJgAkVArIAAhUIAyAAIAAASIgcAAIAAARIAaAAIAAAQIgaAAIAAAhg");
	this.shape_1.setTransform(47.4,10.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,97.2,23.5);


(lib.Bottomstick = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("ApHAJIAAgVISPAEIAAAVg");
	this.shape.setTransform(58.4,1.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,116.8,2.7);


(lib.Lock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Failed
	this.instance = new lib.Failed("synched",0);
	this.instance.setTransform(25,20.3,2.362,2.362,0,0,0,47.2,10.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).wait(1).to({regY:10.3,scaleX:2.3,scaleY:2.3,x:25.1,y:20.1,alpha:0.048},0).wait(1).to({scaleX:2.11,scaleY:2.11,x:25,y:20.2,alpha:0.185},0).wait(1).to({scaleX:1.68,scaleY:1.68,x:25.1,y:20.1,alpha:0.5},0).wait(1).to({scaleX:1.25,scaleY:1.25,y:20.2,alpha:0.815},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.952},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1).to({regY:10.4,x:25,y:20.4},0).wait(1).to({regY:10.3,scaleX:1,scaleY:1,y:20.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:25.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:25},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:25.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:25,y:20.2},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:20.3},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:20.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:25.1,y:20.3},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:25},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:25.1},0).wait(1).to({scaleX:1,scaleY:1,x:25},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regY:10.4,y:20.4},0).wait(1).to({regY:10.3,y:20.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:10.4,y:20.4},0).wait(1).to({regY:10.3,y:20.3,alpha:0.833},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0},0).wait(1));

	// Top static
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B8DC8").s().p("ABKDJQhBgLgvgyQg9g/gBhYIAAi/IDJAAIAAB0QgIACgGAGQgJAKAAAMQAAANAJAJIACADIAAAfQAAAHAGAGIAGAEIAAC6QgOAAgNgCg");
	this.shape.setTransform(15.2,60.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#325980").s().p("ABjD8QhVgLg+hBQgtgugSg4QgOgpgBgsIAAjyIA6AAIAvAAICTAAIAAAzIjJAAIAAC/QABBYA+A/QAvAyBAALQANACAOAAIAAAzIgbgCg");
	this.shape_1.setTransform(12.7,60.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECF5FC").s().p("AhhCvIAAiYQAAhQA7g7QA4g5BPgBIAAAkQg8ADgpAsQguAuAAA/IAACdg");
	this.shape_2.setTransform(15.6,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(96));

	// Top stick
	this.instance_1 = new lib.Topstick("synched",0);
	this.instance_1.setTransform(187.6,15.6,1,1,0,0,0,58.4,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:1.1,rotation:-3.1,x:174.1,y:12.7},0).wait(1).to({rotation:-6.7,x:161,y:11},0).wait(1).to({rotation:-10.6,x:148.4,y:10.3},0).wait(1).to({rotation:-14.8,x:136.5,y:10.4},0).wait(1).to({rotation:-18.9,x:125.3,y:11.2},0).wait(1).to({rotation:-22.6,x:114.8,y:12.5},0).wait(1).to({rotation:-25.8,x:105.2,y:14.3},0).wait(1).to({rotation:-28.3,x:96.2,y:16.2},0).wait(1).to({rotation:-30.4,x:88,y:18.4},0).wait(1).to({rotation:-32.1,x:80.5,y:20.7},0).wait(1).to({rotation:-33.5,x:73.7,y:23},0).wait(1).to({rotation:-34.6,x:67.8,y:25.2},0).wait(1).to({regX:-1.2,regY:1.6,scaleX:1,scaleY:1,x:19.2,y:59.3},0).wait(1).to({regX:58.4,regY:1.1,scaleX:1,scaleY:1,rotation:-34.5,x:67.9,y:25.1},0).wait(1).to({rotation:-34.4,x:68,y:25.3},0).wait(1).to({rotation:-34.1,x:68.2,y:25.5},0).wait(1).to({rotation:-33.6,x:68.4,y:25.9},0).wait(1).to({rotation:-32.9,x:68.9,y:26.5},0).wait(1).to({rotation:-32,x:69.4,y:27.4},0).wait(1).to({rotation:-31.3,x:69.7,y:28},0).wait(1).to({rotation:-30.9,x:70,y:28.4},0).wait(1).to({rotation:-30.6,x:70.1,y:28.6},0).wait(1).to({rotation:-30.4,x:70.2,y:28.7},0).wait(1).to({rotation:-30.3,y:28.8},0).wait(1).to({regX:-1.3,regY:1.7,scaleX:1,scaleY:1,x:19.2,y:59.3},0).wait(1).to({regX:58.4,regY:1.1,scaleX:1,scaleY:1,rotation:-29.6,x:70.7,y:29.4},0).wait(1).to({rotation:-27.9,x:71.6,y:30.9},0).wait(1).to({rotation:-26.7,x:72.2,y:32},0).wait(1).to({rotation:-27,x:72,y:31.8},0).wait(1).to({rotation:-28.5,x:71.3,y:30.4},0).wait(1).to({rotation:-30,x:70.5,y:29},0).wait(1).to({rotation:-30.3,x:70.4,y:28.7},0).wait(1).to({rotation:-29.1,x:71,y:29.9},0).wait(1).to({rotation:-27.4,x:71.9,y:31.4},0).wait(1).to({rotation:-26.6,x:72.2,y:32.1},0).wait(1).to({regX:-1.3,regY:1.7,scaleX:1,scaleY:1,x:19.2,y:59.3},0).wait(1).to({regX:58.4,regY:1.1,scaleX:1,scaleY:1,rotation:-28.8,x:71.2,y:30.1},0).wait(1).to({rotation:-30.9,x:70,y:28.2},0).wait(1).to({rotation:-33,x:68.9,y:26.3},0).wait(1).to({rotation:-35.2,x:67.6,y:24.5},0).wait(1).to({rotation:-37.3,x:66.3,y:22.7},0).wait(1).to({rotation:-39.4,x:64.9,y:21},0).wait(1).to({rotation:-41.6,x:63.5,y:19.3},0).wait(1).to({regX:-1.3,regY:1.8,scaleX:1,scaleY:1,x:19.3,y:59.3},0).wait(1).to({regX:58.4,regY:1.1,scaleX:1,scaleY:1,rotation:-41.5,x:63.5,y:19.3},0).wait(1).to({rotation:-41.3,y:19.5},0).wait(1).to({rotation:-41,x:63.8,y:19.7},0).wait(1).to({rotation:-40.5,x:64.1,y:20.1},0).wait(1).to({rotation:-39.7,x:64.6,y:20.7},0).wait(1).to({rotation:-38.6,x:65.4,y:21.6},0).wait(1).to({rotation:-37.5,x:66.1,y:22.4},0).wait(1).to({rotation:-36.7,x:66.6,y:23.1},0).wait(1).to({rotation:-36.2,x:66.9,y:23.5},0).wait(1).to({rotation:-35.9,x:67.1,y:23.8},0).wait(1).to({rotation:-35.7,x:67.2,y:23.9},0).wait(1).to({rotation:-35.6,x:67.3,y:24},0).wait(1).to({regX:-1.3,regY:1.8,scaleX:1,scaleY:1,x:19.2,y:59.3},0).wait(1).to({regX:58.4,regY:1.1,scaleX:1,scaleY:1,x:67.2,y:24},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-1.3,regY:1.8,scaleX:1,scaleY:1,x:19.2,y:59.3},0).wait(1).to({regX:58.4,regY:1.1,scaleX:1,scaleY:1,x:67.2,y:24,alpha:0.833},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0},0).wait(1));

	// Bottom stick
	this.instance_2 = new lib.Bottomstick("synched",0);
	this.instance_2.setTransform(185.2,35.4,1,1,0,0,0,58.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:-1.1,x:177,y:34.9},0).wait(1).to({rotation:-2.2,x:169,y:34.5},0).wait(1).to({rotation:-3.3,x:161.4,y:34.3},0).wait(1).to({rotation:-4.4,x:154,y:34.2},0).wait(1).to({rotation:-5.5,x:146.8},0).wait(1).to({rotation:-6.6,x:140,y:34.4},0).wait(1).to({rotation:-7.7,x:133.3,y:34.7},0).wait(1).to({rotation:-8.8,x:127,y:35.1},0).wait(1).to({rotation:-9.9,x:121,y:35.6},0).wait(1).to({rotation:-10.9,x:115.2,y:36.1},0).wait(1).to({rotation:-11.9,x:109.6,y:36.8},0).wait(1).to({rotation:-12.9,x:104.4,y:37.5},0).wait(1).to({rotation:-13.9,x:99.4,y:38.3},0).wait(1).to({rotation:-14.8,x:94.8,y:39},0).wait(1).to({rotation:-15.7,x:90.3,y:39.9},0).wait(1).to({rotation:-16.6,x:86.2,y:40.7},0).wait(1).to({rotation:-17.4,x:82.3,y:41.6},0).wait(1).to({rotation:-18.2,x:78.8,y:42.5},0).wait(1).to({regX:-0.8,regY:2.5,scaleX:1,scaleY:1,rotation:-18,x:22.9,y:61.8},0).wait(1).to({regX:58.4,regY:1.3,scaleX:1,scaleY:1,rotation:-19.2,x:78.4,y:41.2},0).wait(1).to({rotation:-21.8,x:77.4,y:38.8},0).wait(1).to({rotation:-23.6,x:76.6,y:37},0).wait(1).to({rotation:-23.2,x:76.8,y:37.4},0).wait(1).to({rotation:-20.9,x:77.7,y:39.6},0).wait(1).to({rotation:-18.6,x:78.6,y:41.8},0).wait(1).to({rotation:-18.2,x:78.7,y:42.2},0).wait(1).to({rotation:-20,x:78.1,y:40.4},0).wait(1).to({rotation:-22.6,x:77,y:38},0).wait(1).to({rotation:-23.8,x:76.5,y:36.9},0).wait(1).to({regX:-0.9,regY:2.3,scaleX:1,scaleY:1,x:23,y:61.9},0).wait(1).to({regX:58.4,regY:1.3,scaleX:1,scaleY:1,rotation:-21.3,x:77.7,y:39.4},0).wait(1).to({rotation:-18.8,x:78.7,y:41.8},0).wait(1).to({rotation:-16.3,x:79.5,y:44.3},0).wait(1).to({rotation:-13.8,x:80.2,y:46.8},0).wait(1).to({rotation:-11.3,x:80.8,y:49.3},0).wait(1).to({rotation:-8.8,x:81.3,y:51.9},0).wait(1).to({rotation:-6.3,x:81.7,y:54.4},0).wait(1).to({rotation:-3.8,x:81.9,y:57},0).wait(1).to({rotation:-1.3,x:82.1,y:59.5},0).wait(1).to({regX:-0.9,regY:2.3,rotation:-1.3,x:22.9,y:61.9},0).wait(1).to({regX:58.4,regY:1.3,rotation:-2.2,x:82.1,y:58.6},0).wait(1).to({rotation:-3.8,x:81.9,y:57},0).wait(1).to({rotation:-4.1,y:56.6},0).wait(1).to({rotation:-2.8,x:82,y:58},0).wait(1).to({rotation:-1.4,x:82.1,y:59.4},0).wait(1).to({rotation:-1.7,y:59.1},0).wait(1).to({rotation:-3.3,x:82,y:57.4},0).wait(1).to({rotation:-4.2,x:81.9,y:56.5},0).wait(1).to({rotation:-3.3,x:82,y:57.4},0).wait(1).to({rotation:-1.7,x:82.1,y:59.1},0).wait(1).to({rotation:-1.4,y:59.4},0).wait(1).to({rotation:-2.8,x:82,y:58},0).wait(1).to({rotation:-4.1,x:81.9,y:56.6},0).wait(1).to({rotation:-3.8,y:57},0).wait(1).to({rotation:-2.2,x:82.1,y:58.6},0).wait(1).to({rotation:-1.3,y:59.5},0).wait(1).to({regX:-0.9,regY:2.3,x:22.9,y:61.9},0).wait(1).to({regX:58.4,regY:1.3,x:82.1,y:59.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-0.9,regY:2.3,x:22.9,y:61.9},0).wait(1).to({regX:58.4,regY:1.3,x:82.1,y:59.5,alpha:0.833},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0},0).wait(1));

	// Static
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B8DC8").s().p("AgGDLQgOAAgOgCQhAgLgxgyQg+g/gBhYIAAi/IGlAAIAAC/QgBBYg+A/Qg+A/hWAAIgGAAgAgGhWQgIACgHAGQgJAKAAAMQAAANAJAJIADADIAAAfQAAAHAGAGIAGAEQADACADAAQAIAAAFgGQAGgGAAgHIAAgfIADgDQAJgJAAgNQAAgNgJgJQgKgJgMAAIgGABgAgGgqIgEgDQgEgEAAgHQAAgGAEgFIAEgCQADgCADAAQAGAAAFAEQAEAFAAAGQAAAHgEAEQgFAFgGAAQgDAAgDgCg");
	this.shape_3.setTransform(26.2,60.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ECF5FC").s().p("AgGE3IgGgFQgGgGAAgIIAAggIgDgCQgJgKAAgNQAAgMAJgKQAHgGAIgCIAGAAQAMgBAKAJQAJAJAAANQAAANgJAKIgDACIAAAgQAAAIgGAGQgFAGgIAAQgDAAgDgBgAgGDeIgEACQgEAFAAAGQAAAHAEAFIAEACQADACADAAQAGAAAFgEQAEgFAAgHQAAgGgEgFQgFgEgGAAQgDAAgDACgACdAnIAAicQAAhBguguQgvguhAAAIgGAAQg8ACgsAsQguAuAABBIAACcIguAAIAAiWQAAhTA6g7QA6g5BQgBIADAAIAHAAQBSAAA7A6QA6A7AABTIAACWg");
	this.shape_4.setTransform(26.2,31.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#325980").s().p("AgGD+IgcgCQhVgLhAhBQgsgugTg4QgOgpAAgsIAAjyIA6AAIAuAAIE5AAIAuAAIA6AAIAADyQAABthNBOQhNBOhrAAIgGAAgAjSgLQABBYA+A/QAxAyBAALQAOACAOAAIAGAAQBWAAA+g/QA+g/ABhYIAAi/ImlAAg");
	this.shape_5.setTransform(26.2,60.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245.9,86);


// stage content:



(lib.Security = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		var self = this;
		$('.security-icon-block').on('mouseover click', function() {
			self.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(96));

	// Lock
	this.instance = new lib.Lock("synched",0);
	this.instance.setTransform(83.1,50,1,1,0,0,0,26.2,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4E1F5").s().p("As9HzIAAvmIZ6AAIAAPmg");
	this.shape.setTransform(83,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(83,50,302.7,100);

})(SecurityLib = SecurityLib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var SecurityLib, images, createjs, ss;