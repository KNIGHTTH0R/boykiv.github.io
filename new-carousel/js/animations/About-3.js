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



(lib.Minutes = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65A46").s().p("AgSB7IAAj1IAlAAIAAD1g");
	this.shape.setTransform(2,12.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3.9,24.8);


(lib.Hours = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65A46").s().p("AhPATIAAglICfAAIAAAlg");
	this.shape.setTransform(8.1,2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.1,3.9);


// stage content:
(lib.About3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		var self = this;
		$('.we-are li:nth-child(3)').on('mouseover click', function() {
			self.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(96));

	// Minutes
	this.instance = new lib.Minutes();
	this.instance.setTransform(45.1,37.1,0.999,0.999,14.8,0,0,2,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.9,regY:12.4,scaleX:1,scaleY:1,rotation:21.1,x:49.4,y:25.5},0).wait(1).to({rotation:27.2,x:50.6,y:26},0).wait(1).to({rotation:33.5,x:51.8,y:26.7},0).wait(1).to({rotation:39.9,x:52.9,y:27.5},0).wait(1).to({rotation:46.6,x:54,y:28.5},0).wait(1).to({rotation:53.7,x:54.9,y:29.7},0).wait(1).to({rotation:61.1,x:55.8,y:31},0).wait(1).to({rotation:69,x:56.5,y:32.6},0).wait(1).to({rotation:77.4,x:57,y:34.3},0).wait(1).to({rotation:86.4,x:57.3,y:36.2},0).wait(1).to({rotation:96,y:38.3},0).wait(1).to({rotation:106.3,x:56.9,y:40.4},0).wait(1).to({rotation:117.4,x:56,y:42.7},0).wait(1).to({rotation:129.4,x:54.6,y:44.8},0).wait(1).to({rotation:142.2,x:52.6,y:46.8},0).wait(1).to({rotation:156,x:50,y:48.3},0).wait(1).to({rotation:170.9,x:47,y:49.2},0).wait(1).to({rotation:186.8,x:43.6,y:49.4},0).wait(1).to({rotation:203.9,x:40.1,y:48.4},0).wait(1).to({rotation:222.2,x:36.8,y:46.2},0).wait(1).to({rotation:241.9,x:34.2,y:42.9},0).wait(1).to({rotation:262.8,x:32.7,y:38.6},0).wait(1).to({rotation:285.2,x:33.1,y:33.8},0).wait(1).to({rotation:309.1,x:35.4,y:29.3},0).wait(1).to({rotation:334.5,x:39.7,y:26},0).wait(1).to({rotation:361.5,x:45.3,y:24.7},0).wait(1).to({rotation:390.3,x:51.2,y:26.3},0).wait(1).to({rotation:420.7,x:55.8,y:30.9},0).wait(1).to({rotation:453,x:57.3,y:37.6},0).wait(1).to({rotation:487.1,x:54.9,y:44.4},0).wait(1).to({rotation:523.2,x:48.6,y:48.9},0).wait(1).to({rotation:561.2,x:40.6,y:48.6},0).wait(1).to({rotation:601.4,x:34.2,y:43},0).wait(1).to({rotation:643.6,x:33,y:34.2},0).wait(1).to({rotation:688.1,x:38.4,y:26.6},0).wait(1).to({rotation:734.8,x:48.1,y:25.1},0).wait(1).to({rotation:783.8,x:56.1,y:31.5},0).wait(1).to({rotation:835.2,x:56.2,y:42.2},0).wait(1).to({rotation:889.1,x:47.4,y:49.2},0).wait(1).to({rotation:945.5,x:36.2,y:45.8},0).wait(1).to({rotation:1004.4,x:33,y:34},0).wait(1).to({rotation:1066,x:42,y:25.1},0).wait(1).to({rotation:1130.3,x:54.5,y:29.1},0).wait(1).to({rotation:1197.4,x:56,y:42.7},0).wait(1).to({rotation:1267.3,x:43.5,y:49.3},0).wait(1).to({rotation:1340.2,x:32.9,y:39.3},0).wait(1).to({rotation:1416,x:39.9,y:25.8},0).wait(1).to({rotation:1494,x:54.9,y:29.8},0).wait(1).to({rotation:1569.8,x:54.5,y:44.9},0).wait(1).to({rotation:1642.6,x:40.3,y:48.5},0).wait(1).to({rotation:1712.6,x:32.7,y:36.5},0).wait(1).to({rotation:1779.7,x:40.7,y:25.5},0).wait(1).to({rotation:1844,x:53.5,y:28.1},0).wait(1).to({rotation:1905.6,x:56.9,y:40.4},0).wait(1).to({rotation:1964.5,x:48.3,y:48.9},0).wait(1).to({rotation:2020.9,x:36.9,y:46.4},0).wait(1).to({rotation:2074.8,x:32.7,y:36.1},0).wait(1).to({rotation:2126.2,x:38.1,y:26.8},0).wait(1).to({rotation:2175.2,x:48.2,y:25.1},0).wait(1).to({rotation:2221.9,x:55.9,y:31.2},0).wait(1).to({rotation:2266.3,x:56.9,y:40.4},0).wait(1).to({rotation:2308.6,x:51.5,y:47.6},0).wait(1).to({rotation:2348.7,x:43.2,y:49.3},0).wait(1).to({rotation:2386.8,x:36.1,y:45.5},0).wait(1).to({rotation:2422.9,x:32.7,y:38.6},0).wait(1).to({rotation:2457,x:34,y:31.5},0).wait(1).to({rotation:2489.3,x:38.7,y:26.5},0).wait(1).to({rotation:2519.7,x:44.9,y:24.7},0).wait(1).to({rotation:2548.4,x:50.8,y:26.2},0).wait(1).to({rotation:2575.4,x:55.2,y:30},0).wait(1).to({rotation:2600.9,x:57.2,y:35.1},0).wait(1).to({rotation:2624.7,x:56.9,y:40.2},0).wait(1).to({rotation:2647.1,x:54.9,y:44.4},0).wait(1).to({rotation:2668.1,x:51.6,y:47.5},0).wait(1).to({rotation:2687.7,x:47.7,y:49.1},0).wait(1).to({rotation:2706.1,x:43.7,y:49.3},0).wait(1).to({rotation:2723.2,x:40.2,y:48.4},0).wait(1).to({rotation:2739.1,x:37.3,y:46.7},0).wait(1).to({rotation:2753.9,x:35,y:44.4},0).wait(1).to({rotation:2767.8,x:33.6,y:41.8},0).wait(1).to({rotation:2780.6,x:32.9,y:39.2},0).wait(1).to({rotation:2792.6,x:32.7,y:36.5},0).wait(1).to({rotation:2803.7,x:33,y:34.2},0).wait(1).to({rotation:2814,x:33.7,y:32.1},0).wait(1).to({rotation:2823.6,x:34.7,y:30.2},0).wait(1).to({rotation:2832.6,x:35.9,y:28.7},0).wait(1).to({rotation:2841,x:37.2,y:27.5},0).wait(1).to({rotation:2848.9,x:38.6,y:26.5},0).wait(1).to({rotation:2856.3,x:40,y:25.8},0).wait(1).to({rotation:2863.3,x:41.4,y:25.3},0).wait(1).to({rotation:2870.1,x:42.8,y:24.9},0).wait(1).to({rotation:2876.5,x:44.2,y:24.8},0).wait(1).to({rotation:2882.8,x:45.6,y:24.7},0).wait(1).to({rotation:2888.9,x:46.9,y:24.9},0).wait(1).to({rotation:2895,x:48.2,y:25.1},0).wait(1));

	// Hours
	this.instance_1 = new lib.Hours();
	this.instance_1.setTransform(45,37.2,0.999,0.999,14.8,0,0,0.2,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:8.1,regY:2,scaleX:1,scaleY:1,rotation:15.8,x:52.7,y:39},0).wait(1).to({rotation:16.5,y:39.1},0).wait(1).to({rotation:17.3,x:52.6,y:39.2},0).wait(1).to({rotation:18.1,y:39.3},0).wait(1).to({rotation:19,y:39.5},0).wait(1).to({rotation:19.8,x:52.5,y:39.6},0).wait(1).to({rotation:20.8},0).wait(1).to({rotation:21.7,x:52.4,y:39.8},0).wait(1).to({rotation:22.8,y:40},0).wait(1).to({rotation:23.9,x:52.3,y:40.1},0).wait(1).to({rotation:25.1,y:40.3},0).wait(1).to({rotation:26.4,x:52.2,y:40.4},0).wait(1).to({rotation:27.8,x:52.1,y:40.6},0).wait(1).to({rotation:29.3,x:52,y:40.8},0).wait(1).to({rotation:30.9,x:51.9,y:40.9},0).wait(1).to({rotation:32.6,x:51.8,y:41.2},0).wait(1).to({rotation:34.5,x:51.7,y:41.4},0).wait(1).to({rotation:36.5,x:51.5,y:41.6},0).wait(1).to({rotation:38.6,x:51.4,y:41.8},0).wait(1).to({rotation:40.9,x:51.1,y:42.1},0).wait(1).to({rotation:43.4,x:51,y:42.4},0).wait(1).to({rotation:46,x:50.7,y:42.6},0).wait(1).to({rotation:48.8,x:50.4,y:42.9},0).wait(1).to({rotation:51.8,x:50.1,y:43.2},0).wait(1).to({rotation:54.9,x:49.7,y:43.5},0).wait(1).to({rotation:58.3,x:49.4,y:43.7},0).wait(1).to({rotation:61.9,x:49,y:44},0).wait(1).to({rotation:65.7,x:48.5,y:44.2},0).wait(1).to({rotation:69.7,x:48,y:44.5},0).wait(1).to({rotation:74,x:47.5,y:44.7},0).wait(1).to({rotation:78.5,x:46.8,y:44.8},0).wait(1).to({rotation:83.3,x:46.2,y:45},0).wait(1).to({rotation:88.3,x:45.5},0).wait(1).to({rotation:93.6,x:44.8,y:45.1},0).wait(1).to({rotation:99.1,x:44,y:45},0).wait(1).to({rotation:105,x:43.2,y:44.9},0).wait(1).to({rotation:111.1,x:42.4,y:44.6},0).wait(1).to({rotation:117.5,x:41.6,y:44.3},0).wait(1).to({rotation:124.3,x:40.8,y:43.8},0).wait(1).to({rotation:131.3,x:40,y:43.3},0).wait(1).to({rotation:138.7,x:39.3,y:42.5},0).wait(1).to({rotation:146.4,x:38.6,y:41.7},0).wait(1).to({rotation:154.4,x:38,y:40.8},0).wait(1).to({rotation:162.8,x:37.5,y:39.7},0).wait(1).to({rotation:171.5,x:37.2,y:38.5},0).wait(1).to({rotation:180.6,x:37.1,y:37.3},0).wait(1).to({rotation:190.1,x:37.2,y:36},0).wait(1).to({rotation:199.9,x:37.5,y:34.7},0).wait(1).to({rotation:209.3,x:38,y:33.5},0).wait(1).to({rotation:218.5,x:38.7,y:32.4},0).wait(1).to({rotation:227.2,x:39.5,y:31.5},0).wait(1).to({rotation:235.6,x:40.3,y:30.7},0).wait(1).to({rotation:243.6,x:41.3,y:30.2},0).wait(1).to({rotation:251.3,x:42.3,y:29.7},0).wait(1).to({rotation:258.7,x:43.2,y:29.4},0).wait(1).to({rotation:265.7,x:44.2,y:29.2},0).wait(1).to({rotation:272.5,x:45.1},0).wait(1).to({rotation:278.9,x:46,y:29.3},0).wait(1).to({rotation:285,x:46.8,y:29.4},0).wait(1).to({rotation:290.9,x:47.6,y:29.7},0).wait(1).to({rotation:296.4,x:48.3,y:30},0).wait(1).to({rotation:301.7,x:48.9,y:30.3},0).wait(1).to({rotation:306.7,x:49.5,y:30.6},0).wait(1).to({rotation:311.5,x:50,y:31},0).wait(1).to({rotation:316,x:50.5,y:31.4},0).wait(1).to({rotation:320.2,x:51,y:31.9},0).wait(1).to({rotation:324.3,x:51.3,y:32.3},0).wait(1).to({rotation:328.1,x:51.6,y:32.7},0).wait(1).to({rotation:331.7,x:51.9,y:33.1},0).wait(1).to({rotation:335.1,x:52.1,y:33.6},0).wait(1).to({rotation:338.2,x:52.2,y:34},0).wait(1).to({rotation:341.2,x:52.4,y:34.4},0).wait(1).to({rotation:344,x:52.6,y:34.7},0).wait(1).to({rotation:346.6,x:52.7,y:35.1},0).wait(1).to({rotation:349.1,y:35.4},0).wait(1).to({rotation:351.4,x:52.8,y:35.7},0).wait(1).to({rotation:353.5,x:52.9,y:36},0).wait(1).to({rotation:355.5,y:36.2},0).wait(1).to({rotation:357.4,y:36.5},0).wait(1).to({rotation:359.1,y:36.7},0).wait(1).to({rotation:360.7,y:37},0).wait(1).to({rotation:362.2,y:37.2},0).wait(1).to({rotation:363.6,x:53,y:37.4},0).wait(1).to({rotation:364.9,x:52.9,y:37.6},0).wait(1).to({rotation:366.1,y:37.7},0).wait(1).to({rotation:367.2,y:37.9},0).wait(1).to({rotation:368.2,x:52.8,y:38},0).wait(1).to({rotation:369.2,x:52.9,y:38.1},0).wait(1).to({rotation:370.2,x:52.8,y:38.3},0).wait(1).to({rotation:371,y:38.4},0).wait(1).to({rotation:371.9,y:38.5},0).wait(1).to({rotation:372.7,y:38.6},0).wait(1).to({rotation:373.5,y:38.7},0).wait(1).to({rotation:374.2,x:52.7,y:38.8},0).wait(1).to({rotation:375,y:38.9},0).wait(1));

	// Dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65A46").s().p("AgTBmQgqgJgZgjQgYgkAJgpQAJgrAjgXQAkgYApAIQArAIAXAlQAYAjgIApQgIAqglAZQgaARgeAAQgJAAgLgCg");
	this.shape.setTransform(45,37.1,0.186,0.186);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(96));

	// Static
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CECECD").s().p("AjIBoIAAjPIGRAAIAADPg");
	this.shape_1.setTransform(70.4,37.1,0.186,0.186);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CECECD").s().p("AjIBoIAAjPIGRAAIAADPg");
	this.shape_2.setTransform(19.6,37.1,0.186,0.186);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CECECD").s().p("AhnDJIAAmRIDPAAIAAGRg");
	this.shape_3.setTransform(45,62.6,0.186,0.186);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CECECD").s().p("AhnDJIAAmRIDPAAIAAGRg");
	this.shape_4.setTransform(45,11.7,0.186,0.186);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B8DC8").s().p("AsFcoQlliXkTkTQkTkTiXllQidlyAAmUQAAmTCdlyQCXllETkTQETkTFliXQFyidGTAAQGUAAFyCdQFlCXETETQETETCXFlQCdFyAAGTQAAGUidFyQiXFlkTETQkTETllCXQlyCdmUAAQmTAAlyidgAq05pQlACHj3D3Qj3D3iHFAQiMFLAAFpQAAFqCMFMQCHFAD3D2QD3D3FACHQFLCMFpAAQFqAAFMiMQFAiHD2j3QD3j2CHlAQCMlMAAlqQAAlpiMlLQiHlAj3j3Qj3j3k/iHQlMiMlqAAQlpAAlLCMg");
	this.shape_5.setTransform(45,37.1,0.186,0.186);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AsFcoQlliXkTkTQkTkTiXllQidlyAAmUQAAmTCdlyQCXllETkTQETkTFliXQFyidGTAAQGUAAFyCdQFlCXETETQETETCXFlQCdFyAAGTQAAGUidFyQiXFlkTETQkTETllCXQlyCdmUAAQmTAAlyidg");
	this.shape_6.setTransform(45,37,0.186,0.186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53,45,74,74.2);

})(about3Lib = about3Lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var about3Lib, images, createjs, ss;