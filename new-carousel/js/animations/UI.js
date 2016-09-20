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



(lib.Text = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CECECD").s().p("AiUAPIAAgcIEqAAIAAAcg");
	this.shape.setTransform(15,46.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CECECD").s().p("AiUAPIAAgcIEqAAIAAAcg");
	this.shape_1.setTransform(15,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CECECD").s().p("AiUAPIAAgcIEqAAIAAAcg");
	this.shape_2.setTransform(15,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CECECD").s().p("AiUAOIAAgbIEqAAIAAAbg");
	this.shape_3.setTransform(15,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#325980").s().p("Ah3APIAAgcIDvAAIAAAcg");
	this.shape_4.setTransform(12.1,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CECECD").s().p("AiUAPIAAgcIEqAAIAAAcg");
	this.shape_5.setTransform(15,10.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30,48);


(lib.Menu = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D65A46").s().p("AhKAOIAAgcICVAAIAAAcg");
	this.shape.setTransform(58.5,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D65A46").s().p("AhYAOIAAgcICyAAIAAAcg");
	this.shape_1.setTransform(36,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65A46").s().p("AhKAOIAAgcICVAAIAAAcg");
	this.shape_2.setTransform(13.5,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7AA9C").s().p("AlmBLIAAiVILOAAIAACVg");
	this.shape_3.setTransform(36,7.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72,15);


(lib.Image = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B8DC8").s().p("AiyDwIAAneIFmAAIAAHeg");
	this.shape.setTransform(18,24);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,48);


// stage content:
(lib.UI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		var self = this;
		$('.ui-icon-block').on('mouseover click', function() {
			self.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48));

	// Menu
	this.instance = new lib.Menu("synched",0);
	this.instance.setTransform(60,37.5,1,1,0,0,0,36,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({startPosition:0},0).wait(1).to({y:38.6},0).wait(1).to({y:40.5},0).wait(1).to({y:44},0).wait(1).to({y:49.7},0).wait(1).to({y:58.6},0).wait(1).to({y:70.4},0).wait(1).to({y:79.3},0).wait(1).to({y:85},0).wait(1).to({y:88.5},0).wait(1).to({y:90.4},0).wait(1).to({y:91.5},0).wait(1).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(1).to({y:89.8},0).wait(1).to({y:86.7},0).wait(1).to({y:82.1},0).wait(1).to({y:76.1},0).wait(1).to({y:68.7},0).wait(1).to({y:60.3},0).wait(1).to({y:52.9},0).wait(1).to({y:46.9},0).wait(1).to({y:42.3},0).wait(1).to({y:39.2},0).wait(1).to({y:37.5},0).wait(1));

	// Text
	this.instance_1 = new lib.Text("synched",0);
	this.instance_1.setTransform(39,75,1,1,0,0,0,15,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:39.9},0).wait(1).to({x:41.3},0).wait(1).to({x:44},0).wait(1).to({x:48.5},0).wait(1).to({x:55.4},0).wait(1).to({x:64.6},0).wait(1).to({x:71.5},0).wait(1).to({x:76},0).wait(1).to({x:78.7},0).wait(1).to({x:80.1},0).wait(1).to({x:81},0).wait(1).to({startPosition:0},0).wait(1).to({y:74.6},0).wait(1).to({y:73.8},0).wait(1).to({y:72.5},0).wait(1).to({y:70.2},0).wait(1).to({y:66.8},0).wait(1).to({y:62.2},0).wait(1).to({y:58.8},0).wait(1).to({y:56.5},0).wait(1).to({y:55.2},0).wait(1).to({y:54.4},0).wait(1).to({y:54},0).wait(1).to({startPosition:0},0).wait(1).to({x:80.1},0).wait(1).to({x:78.7},0).wait(1).to({x:76},0).wait(1).to({x:71.5},0).wait(1).to({x:64.6},0).wait(1).to({x:55.4},0).wait(1).to({x:48.5},0).wait(1).to({x:44},0).wait(1).to({x:41.3},0).wait(1).to({x:39.9},0).wait(1).to({x:39},0).wait(1).to({startPosition:0},0).wait(1).to({y:54.4},0).wait(1).to({y:55.2},0).wait(1).to({y:56.5},0).wait(1).to({y:58.8},0).wait(1).to({y:62.2},0).wait(1).to({y:66.8},0).wait(1).to({y:70.2},0).wait(1).to({y:72.5},0).wait(1).to({y:73.8},0).wait(1).to({y:74.6},0).wait(1).to({y:75},0).wait(1));

	// Image
	this.instance_2 = new lib.Image("synched",0);
	this.instance_2.setTransform(78,75,1,1,0,0,0,18,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:77.3},0).wait(1).to({x:76},0).wait(1).to({x:73.7},0).wait(1).to({x:69.8},0).wait(1).to({x:63.9},0).wait(1).to({x:56.1},0).wait(1).to({x:50.2},0).wait(1).to({x:46.3},0).wait(1).to({x:44},0).wait(1).to({x:42.7},0).wait(1).to({x:42},0).wait(1).to({startPosition:0},0).wait(1).to({y:74.6},0).wait(1).to({y:73.8},0).wait(1).to({y:72.5},0).wait(1).to({y:70.2},0).wait(1).to({y:66.8},0).wait(1).to({y:62.2},0).wait(1).to({y:58.8},0).wait(1).to({y:56.5},0).wait(1).to({y:55.2},0).wait(1).to({y:54.4},0).wait(1).to({y:54},0).wait(1).to({startPosition:0},0).wait(1).to({x:42.7},0).wait(1).to({x:44},0).wait(1).to({x:46.3},0).wait(1).to({x:50.2},0).wait(1).to({x:56.1},0).wait(1).to({x:63.9},0).wait(1).to({x:69.8},0).wait(1).to({x:73.7},0).wait(1).to({x:76},0).wait(1).to({x:77.3},0).wait(1).to({x:78},0).wait(1).to({startPosition:0},0).wait(1).to({y:54.4},0).wait(1).to({y:55.2},0).wait(1).to({y:56.5},0).wait(1).to({y:58.8},0).wait(1).to({y:62.2},0).wait(1).to({y:66.8},0).wait(1).to({y:70.2},0).wait(1).to({y:72.5},0).wait(1).to({y:73.8},0).wait(1).to({y:74.6},0).wait(1).to({y:75},0).wait(1));

	// Static
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#325980").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape.setTransform(45,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#325980").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_1.setTransform(36,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#325980").s().p("AmjBKIAAiTINGAAIAACTg");
	this.shape_2.setTransform(60,112.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#325980").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgJALAAQAMAAAJAJQAJAJgBALQABAMgJAJQgJAJgMAAQgLAAgIgJg");
	this.shape_3.setTransform(27,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B8DC8").s().p("AmjBaIAAiyINGAAIAACyg");
	this.shape_4.setTransform(60,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmjI5IAAxxINGAAIAARxg");
	this.shape_5.setTransform(60,63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78,66,84,114);

})(UILib = UILib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var UILib, images, createjs, ss;