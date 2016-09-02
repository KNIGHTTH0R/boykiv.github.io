(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Text = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFCDCD").s().p("AkrAPIAAgdIJXAAIAAAdg");
	this.shape.setTransform(30,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFCDCD").s().p("AkrAOIAAgcIJXAAIAAAcg");
	this.shape_1.setTransform(30,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFCDCD").s().p("AkrAOIAAgcIJXAAIAAAcg");
	this.shape_2.setTransform(30,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#325A81").s().p("AjOAOIAAgbIGcAAIAAAbg");
	this.shape_3.setTransform(20.9,1.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,33);


(lib.Menu = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65B45").s().p("AhiAOIAAgcIDFAAIAAAcg");
	this.shape.setTransform(115,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65B45").s().p("AhiAOIAAgcIDGAAIAAAcg");
	this.shape_1.setTransform(85,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65B45").s().p("AhiAOIAAgcIDFAAIAAAcg");
	this.shape_2.setTransform(55,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D65B45").s().p("AhjAOIAAgcIDHAAIAAAcg");
	this.shape_3.setTransform(25,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7AB9C").s().p("Aq6BkIAAjGIV1AAIAADGg");
	this.shape_4.setTransform(70,10);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,20);


(lib.Image = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A1CDEC").s().p("AlcDHIAAmNIK6AAIAAGNg");
	this.shape.setTransform(35,20);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,40);


(lib.Gallery = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7AB9C").s().p("Ah7B8IAAj3ID4AAIAAD3g");
	this.shape.setTransform(97.7,22.5,1.001,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFCDCD").s().p("Ah8AOIAAgcID4AAIAAAcg");
	this.shape_1.setTransform(132.5,43.5,1.001,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFCDCD").s().p("Ah8AOIAAgcID6AAIAAAcg");
	this.shape_2.setTransform(97.6,43.5,1.001,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CFCDCD").s().p("Ah8AOIAAgcID4AAIAAAcg");
	this.shape_3.setTransform(62.5,43.5,1.001,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFCDCD").s().p("Ah8AOIAAgcID4AAIAAAcg");
	this.shape_4.setTransform(27.5,43.5,1.001,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7AB9C").s().p("Ah8B8IAAj3ID4AAIAAD3g");
	this.shape_5.setTransform(132.5,22.5,1.001,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7AB9C").s().p("Ah8B8IAAj3ID4AAIAAD3g");
	this.shape_6.setTransform(27.5,22.5,1.001,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7AB9C").s().p("Ah8B8IAAj3ID4AAIAAD3g");
	this.shape_7.setTransform(62.5,22.5,1.001,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEEEE").s().p("AseETIAAolIY9AAIAAIlg");
	this.shape_8.setTransform(80,27.5,1.001,1);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,55);


// stage content:
(lib.Homedesign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var frequency = 3;
		stage.enableMouseOver(frequency);

		var self = this;
		$('.home-design-block').on('mouseover click', function() {
			self.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(96));

	// Menu
	this.instance = new lib.Menu("synched",0);
	this.instance.setTransform(120,60,1,1,0,0,0,70,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:60.1},0).wait(1).to({y:60.5},0).wait(1).to({y:61.6},0).wait(1).to({y:63.8},0).wait(1).to({y:67.4},0).wait(1).to({y:72.8},0).wait(1).to({y:80.3},0).wait(1).to({y:89.7},0).wait(1).to({y:97.2},0).wait(1).to({y:102.6},0).wait(1).to({y:106.2},0).wait(1).to({y:108.4},0).wait(1).to({y:109.5},0).wait(1).to({y:109.9},0).wait(1).to({y:110},0).wait(1).to({startPosition:0},0).wait(1).to({y:110.1},0).wait(1).to({y:110.6},0).wait(1).to({y:112.1},0).wait(1).to({y:114.9},0).wait(1).to({y:119.6},0).wait(1).to({y:126.6},0).wait(1).to({y:136.4},0).wait(1).to({y:148.6},0).wait(1).to({y:158.4},0).wait(1).to({y:165.4},0).wait(1).to({y:170.1},0).wait(1).to({y:172.9},0).wait(1).to({y:174.4},0).wait(1).to({y:174.9},0).wait(1).to({y:175},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:174.9},0).wait(1).to({y:174.4},0).wait(1).to({y:172.9},0).wait(1).to({y:170.1},0).wait(1).to({y:165.4},0).wait(1).to({y:158.4},0).wait(1).to({y:148.6},0).wait(1).to({y:136.4},0).wait(1).to({y:126.6},0).wait(1).to({y:119.6},0).wait(1).to({y:114.9},0).wait(1).to({y:112},0).wait(1).to({y:110.6},0).wait(1).to({y:110},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:109.9},0).wait(1).to({y:109.5},0).wait(1).to({y:108.4},0).wait(1).to({y:106.2},0).wait(1).to({y:102.6},0).wait(1).to({y:97.2},0).wait(1).to({y:89.7},0).wait(1).to({y:80.3},0).wait(1).to({y:72.8},0).wait(1).to({y:67.4},0).wait(1).to({y:63.8},0).wait(1).to({y:61.6},0).wait(1).to({y:60.5},0).wait(1).to({y:60},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Image
	this.instance_1 = new lib.Image("synched",0);
	this.instance_1.setTransform(85,100,1,1,0,0,0,35,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({y:99.7},0).wait(1).to({y:99},0).wait(1).to({y:97.7},0).wait(1).to({y:95.6},0).wait(1).to({y:92.3},0).wait(1).to({y:87.8},0).wait(1).to({y:82.2},0).wait(1).to({y:77.7},0).wait(1).to({y:74.4},0).wait(1).to({y:72.3},0).wait(1).to({y:71},0).wait(1).to({y:70.3},0).wait(1).to({y:70},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:85.1},0).wait(1).to({x:85.7},0).wait(1).to({x:87.2},0).wait(1).to({x:90.3},0).wait(1).to({x:95.4},0).wait(1).to({x:102.9},0).wait(1).to({x:113.5},0).wait(1).to({x:126.6},0).wait(1).to({x:137.1},0).wait(1).to({x:144.6},0).wait(1).to({x:149.7},0).wait(1).to({x:152.8},0).wait(1).to({x:154.4},0).wait(1).to({x:154.9},0).wait(1).to({x:155},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:70.3},0).wait(1).to({y:71},0).wait(1).to({y:72.3},0).wait(1).to({y:74.4},0).wait(1).to({y:77.7},0).wait(1).to({y:82.2},0).wait(1).to({y:87.8},0).wait(1).to({y:92.3},0).wait(1).to({y:95.6},0).wait(1).to({y:97.7},0).wait(1).to({y:99.1},0).wait(1).to({y:99.7},0).wait(1).to({y:100},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:154.9},0).wait(1).to({x:154.3},0).wait(1).to({x:152.8},0).wait(1).to({x:149.7},0).wait(1).to({x:144.6},0).wait(1).to({x:137.1},0).wait(1).to({x:126.5},0).wait(1).to({x:113.4},0).wait(1).to({x:102.9},0).wait(1).to({x:95.4},0).wait(1).to({x:90.3},0).wait(1).to({x:87.2},0).wait(1).to({x:85.6},0).wait(1).to({x:85.1},0).wait(1).to({x:85},0).wait(1));

	// Text
	this.instance_2 = new lib.Text("synched",0);
	this.instance_2.setTransform(160,96.5,1,1,0,0,0,30,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({y:96.2},0).wait(1).to({y:95.5},0).wait(1).to({y:94.2},0).wait(1).to({y:92.1},0).wait(1).to({y:88.8},0).wait(1).to({y:84.3},0).wait(1).to({y:78.7},0).wait(1).to({y:74.2},0).wait(1).to({y:70.9},0).wait(1).to({y:68.8},0).wait(1).to({y:67.5},0).wait(1).to({y:66.8},0).wait(1).to({y:66.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:159.9},0).wait(1).to({x:159.2},0).wait(1).to({x:157.4},0).wait(1).to({x:153.9},0).wait(1).to({x:148.2},0).wait(1).to({x:139.5},0).wait(1).to({x:127.5},0).wait(1).to({x:112.6},0).wait(1).to({x:100.5},0).wait(1).to({x:91.9},0).wait(1).to({x:86.1},0).wait(1).to({x:82.6},0).wait(1).to({x:80.8},0).wait(1).to({x:80.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:80},0).wait(1).to({y:66.8},0).wait(1).to({y:67.5},0).wait(1).to({y:68.8},0).wait(1).to({y:70.9},0).wait(1).to({y:74.2},0).wait(1).to({y:78.7},0).wait(1).to({y:84.3},0).wait(1).to({y:88.8},0).wait(1).to({y:92.1},0).wait(1).to({y:94.2},0).wait(1).to({y:95.6},0).wait(1).to({y:96.2},0).wait(1).to({y:96.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:80.1},0).wait(1).to({x:80.8},0).wait(1).to({x:82.6},0).wait(1).to({x:86.1},0).wait(1).to({x:91.9},0).wait(1).to({x:100.5},0).wait(1).to({x:112.5},0).wait(1).to({x:127.5},0).wait(1).to({x:139.5},0).wait(1).to({x:148.1},0).wait(1).to({x:153.9},0).wait(1).to({x:157.4},0).wait(1).to({x:159.2},0).wait(1).to({x:159.9},0).wait(1).to({x:160},0).wait(1));

	// Gallery
	this.instance_3 = new lib.Gallery("synched",0);
	this.instance_3.setTransform(120,157.5,1,1,0,0,0,80,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:157.2},0).wait(1).to({y:156.5},0).wait(1).to({y:155.2},0).wait(1).to({y:153.1},0).wait(1).to({y:149.8},0).wait(1).to({y:145.3},0).wait(1).to({y:139.7},0).wait(1).to({y:135.2},0).wait(1).to({y:131.9},0).wait(1).to({y:129.8},0).wait(1).to({y:128.4},0).wait(1).to({y:127.8},0).wait(1).to({y:127.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:127.8},0).wait(1).to({y:128.5},0).wait(1).to({y:129.8},0).wait(1).to({y:132},0).wait(1).to({y:135.2},0).wait(1).to({y:139.7},0).wait(1).to({y:145.3},0).wait(1).to({y:149.9},0).wait(1).to({y:153.1},0).wait(1).to({y:155.3},0).wait(1).to({y:156.6},0).wait(1).to({y:157.3},0).wait(1).to({y:157.5},0).wait(1).to({y:157.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Static
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#325A81").s().p("AgiAjQgPgPAAgUQAAgUAPgOQAPgPATAAQAUAAAPAPQAPAOAAAUQAAAUgPAPQgPAOgUAAQgTAAgPgOg");
	this.shape.setTransform(70,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#325A81").s().p("AgiAjQgPgPAAgUQAAgUAPgOQAPgPATAAQAUAAAPAPQAOAOAAAUQAAAUgOAPQgPAOgUAAQgTAAgPgOg");
	this.shape_1.setTransform(85,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#325A81").s().p("AgiAjQgOgPAAgUQAAgUAOgOQAPgPATAAQAVAAAOAPQAPAOAAAUQAAAUgPAPQgOAOgVAAQgTAAgPgOg");
	this.shape_2.setTransform(55,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnAAxIAAhiIOCAAIAABig");
	this.shape_3.setTransform(145,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B8DC8").s().p("AsfCVIAAkPQABgLAHgIQAIgHALgBIYJAAQALABAHAHQAJAIAAALIAAEPg");
	this.shape_4.setTransform(120,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AsEMfQgLABgIgKQgIgIAAgMIAA4hIY/AAIAAYhQAAAMgJAIQgHAKgLgBg");
	this.shape_5.setTransform(120,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,110,160,190);

})(homeDesignLib = homeDesignLib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var homeDesignLib, images, createjs, ss;