(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 90,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ADADAD").s().p("Ag3AlIBJgaIAuAYIhJAagAg/ALIAWgtIBIgaIgVAwIgBAAIhIAYg");
	this.shape.setTransform(29.2,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#505050").s().p("AifBAQgFgCgCgFQgCgGADgEQACgGAGgBIDYhJIgBABIBLgaIAAAAIARgGQAFgBAFACQAFACACAFQACAGgDAFQgCAFgFABIgSAGIhKAaIjYBIIgDABQgEAAgDgCg");
	this.shape_1.setTransform(16.8,10.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.7,17.4);


// stage content:
(lib.About2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		var self = this;
		$('.we-are li:nth-child(2)').on('mouseover click', function() {
			self.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(96));

	// Arrow
	this.instance = new lib.Arrow("synched",0);
	this.instance.setTransform(148.3,0.2,1,1,0,0,0,17.8,8.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(1).to({x:126.6,y:7.7},0).wait(1).to({x:104.9,y:15},0).wait(1).to({x:83.2,y:22.4},0).wait(1).to({x:61.6,y:29.9},0).wait(1).to({regX:1.5,regY:16.1,x:45.3,y:37.3},0).wait(1).to({regX:17.8,regY:8.7,rotation:-2.1,x:61.3,y:29.3},0).wait(1).to({regX:1.5,regY:16.2,rotation:-1.8,x:45.2,y:37.2},0).wait(1).to({regX:17.8,regY:8.7,rotation:2.2,x:61.8,y:30.3},0).wait(1).to({regX:1.5,regY:15.5,rotation:2.3,x:45.1,y:36.8},0).wait(1).to({regX:17.8,regY:8.7,rotation:0.2,x:61.4,y:30},0).wait(1).to({rotation:-2,x:61.1,y:29.4},0).wait(1).to({regX:1.5,regY:15.6,x:45.5,y:37.1},0).wait(1).to({regX:17.8,regY:8.7,rotation:-1.1,x:61.6,y:29.8},0).wait(1).to({rotation:0,x:61.8,y:30.1},0).wait(1).to({regX:2.5,regY:13.8,rotation:0.3,x:46.2,y:35.6},0).wait(26).to({regX:1.5,regY:15.9,scaleX:1,scaleY:1,rotation:13.8,x:45.2,y:37.8},0).wait(1).to({regX:17.8,regY:8.7,scaleX:1,scaleY:1,rotation:53.5,x:60.7,y:46.6},0).wait(1).to({rotation:89.7,x:52.5,y:54.1},0).wait(1).to({rotation:119.3,x:43.4,y:55.6},0).wait(1).to({rotation:139.9,x:37.3,y:53.8},0).wait(1).to({rotation:149.6,x:34.7,y:52.3},0).wait(1).to({rotation:145.5,x:35.8,y:53},0).wait(1).to({rotation:131.2,x:39.8,y:54.8},0).wait(1).to({rotation:113.3,x:45.3,y:55.6},0).wait(1).to({rotation:97.2,x:50.3,y:54.9},0).wait(1).to({rotation:86.9,x:53.2,y:53.7},0).wait(1).to({rotation:84.4,x:53.9,y:53.3},0).wait(1).to({rotation:89,x:52.6,y:54},0).wait(1).to({rotation:98.5,x:49.9,y:55},0).wait(1).to({rotation:109.4,x:46.5,y:55.6},0).wait(1).to({rotation:118.5,x:43.7},0).wait(1).to({rotation:123.8,x:42,y:55.4},0).wait(1).to({rotation:124.3,x:41.9,y:55.3},0).wait(1).to({rotation:120.6,x:43,y:55.5},0).wait(1).to({rotation:114.5,x:44.9,y:55.7},0).wait(1).to({rotation:108,x:47,y:55.6},0).wait(1).to({rotation:102.9,x:48.5,y:55.3},0).wait(1).to({rotation:100.3,x:49.3,y:55.2},0).wait(1).to({rotation:100.7,x:49.2},0).wait(1).to({rotation:103.3,x:48.4,y:55.3},0).wait(1).to({rotation:107.2,x:47.2,y:55.5},0).wait(1).to({rotation:111,x:46,y:55.6},0).wait(1).to({rotation:113.8,x:45.1,y:55.7},0).wait(1).to({rotation:115,x:44.8},0).wait(1).to({rotation:114.4,x:45,y:55.6},0).wait(1).to({rotation:112.6,x:45.5},0).wait(1).to({rotation:110.2,x:46.3},0).wait(1).to({rotation:107.9,x:46.9,y:55.5},0).wait(1).to({rotation:106.4,x:47.4},0).wait(1).to({rotation:106,x:47.6},0).wait(1).to({rotation:106.5,x:47.4},0).wait(1).to({rotation:107.7,x:47.1},0).wait(1).to({rotation:109.2,x:46.6,y:55.6},0).wait(1).to({rotation:110.5,x:46.2},0).wait(1).to({rotation:111.3,x:46},0).wait(1).to({rotation:111.4,x:45.9},0).wait(1).to({regX:1.8,regY:16.1,scaleX:1,scaleY:1,rotation:111.3,x:44.9,y:37.8},0).wait(1).to({regX:17.8,regY:8.7,scaleX:1,scaleY:1,rotation:111.4,x:45.9,y:57.4},0).wait(1).to({y:60.3},0).wait(1).to({y:65.1},0).wait(1).to({y:72.6},0).wait(1).to({y:83.8},0).wait(1).to({y:99.6},0).wait(1).to({y:121},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65A46").s().p("AkTEUQhyhzAAihQAAigByhzQBzhyCgAAQChAABzByQByBzAACgQAAChhyBzQhzByihAAQigAAhzhyg");
	this.shape.setTransform(45,37,0.189,0.189);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECF5FC").s().p("AkvLQQiMg8hshsQhshsg8iMQg9iSAAieQAAieA9iRQA8iMBshsQBshsCMg8QCSg9CdAAQCfAACRA9QCMA8BsBsQBsBsA8CMQA9CRAACeQAACeg9CSQg8CMhsBsQhsBsiMA8QiRA9ifAAQidAAiSg9g");
	this.shape_1.setTransform(45,37,0.189,0.189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65A46").s().p("AnHQ4QjShZijiiQiiijhZjSQhcjaAAjuQAAjtBcjaQBZjTCiiiQCjiiDShZQDahcDtAAQDuAADaBcQDTBZCiCiQCiCiBZDTQBcDaAADtQAADuhcDaQhZDSiiCjQiiCijTBZQjaBcjuAAQjtAAjahcg");
	this.shape_2.setTransform(45,37,0.189,0.189);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ECF5FC").s().p("ApfWgQkZh2jYjZQjZjYh2kZQh7kiAAk+QAAk9B7kiQB2kZDZjYQDYjZEZh2QEjh7E8AAQE+AAEiB7QEZB2DYDZQDZDYB2EZQB7EiAAE9QAAE+h7EiQh2EZjZDYQjYDZkZB2QkiB7k+AAQk9AAkih7g");
	this.shape_3.setTransform(45,37,0.189,0.189);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D65A46").s().p("Ar3cIQlfiUkOkPQkPkOiUlfQialrAAmNQAAmMCalrQCUlfEPkOQEOkPFfiUQFriaGMAAQGNAAFrCaQFfCUEOEPQEPEOCUFfQCaFrAAGMQAAGNiaFrQiUFfkPEOQkOEPlfCUQlrCamNAAQmMAAlriag");
	this.shape_4.setTransform(45,37,0.189,0.189);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53,45,74,74);

})(about2Lib = about2Lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var about2Lib, images, createjs, ss;