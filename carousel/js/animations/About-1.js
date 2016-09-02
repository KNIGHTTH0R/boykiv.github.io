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



(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#325980").s().p("AnPRLQjWhcililQilikhbjXQhdjdAAjyQAAjxBdjdQBbjXClikQClimDWhbQDehdDxAAQDyAADeBdQDWBbClCmQClCkBbDXQBdDdAADxQAADyhdDdQhbDXilCkQilCmjWBbQjeBdjyAAQjxAAjehdgAmBmAQigCfAADhQAADiCgCgQCgCgDhAAQDiAACgigQCgigAAjiQAAjhigifQigigjiAAQjhAAigCgg");
	this.shape.setTransform(37.9,37.9,0.197,0.197);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B8DC8").s().p("AjJeFIhInXIAAgBQkxg3kCiuIl9EYIkekeIEUl4Qi5kGg+k2InChEIAAmTIG5hDQA0lFC6kSIkCleIEekfIFZD/QETjFFMg7IBAmjIGTAAIBAGjQFMA7ETDFIFZj/IEeEfIkCFeQC6ESA0FFIG5BDIAAGTInCBEQg+E2i5EGIEUF4IkeEeIl9kYQkCCukxA3IAAABIhIHXgAmPuyQi4BOiPCOQiOCPhOC4QhRC/AADQQAADQBRDAQBOC4COCPQCPCOC4BOQC/BRDQAAQDRAAC/hRQC4hOCPiOQCOiPBOi4QBRi/AAjRQAAjQhRi/QhOi4iOiPQiPiOi4hOQi/hRjRAAQjQAAi/BRg");
	this.shape_1.setTransform(37.9,37.9,0.197,0.197);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75.9,75.9);


// stage content:
(lib.About1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		var self = this;
		$('.we-are li:nth-child(1)').on('mouseover click', function() {
			self.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(96));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(45,37.9,1,1,0,0,0,37.9,37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:2.3,x:44.9},0).wait(1).to({rotation:4.6,x:45,y:38},0).wait(1).to({rotation:6.9,x:44.9,y:37.9},0).wait(1).to({rotation:9.3,x:45},0).wait(1).to({rotation:11.9,y:38},0).wait(1).to({rotation:14.5},0).wait(1).to({rotation:17.3,y:37.9},0).wait(1).to({rotation:20.2},0).wait(1).to({rotation:23.4,y:38},0).wait(1).to({rotation:26.8,y:37.9},0).wait(1).to({rotation:30.4},0).wait(1).to({rotation:34.2,x:44.9,y:38},0).wait(1).to({rotation:38.4},0).wait(1).to({rotation:42.9,y:37.9},0).wait(1).to({rotation:47.7,y:38},0).wait(1).to({rotation:52.9,x:45,y:37.9},0).wait(1).to({rotation:58.5,y:38},0).wait(1).to({rotation:64.4,x:44.9},0).wait(1).to({rotation:70.8,x:45},0).wait(1).to({rotation:77.7,x:44.9},0).wait(1).to({rotation:85.1,x:45,y:37.9},0).wait(1).to({rotation:92.9,x:44.9},0).wait(1).to({rotation:101.3,x:45},0).wait(1).to({rotation:110.3,x:44.9},0).wait(1).to({rotation:119.8},0).wait(1).to({rotation:130},0).wait(1).to({rotation:140.7},0).wait(1).to({rotation:152.1,x:45},0).wait(1).to({rotation:164.2,x:44.9},0).wait(1).to({rotation:177,x:45},0).wait(1).to({rotation:190.6},0).wait(1).to({rotation:204.8,x:44.9},0).wait(1).to({rotation:219.9},0).wait(1).to({rotation:235.7},0).wait(1).to({rotation:252.4,x:45},0).wait(1).to({rotation:269.9},0).wait(1).to({rotation:288.3},0).wait(1).to({rotation:307.6},0).wait(1).to({rotation:327.8},0).wait(1).to({rotation:348.9},0).wait(1).to({rotation:371},0).wait(1).to({rotation:394.1,x:44.9},0).wait(1).to({rotation:418.2,y:38},0).wait(1).to({rotation:443.4,y:37.9},0).wait(1).to({rotation:469.6},0).wait(1).to({rotation:496.9},0).wait(1).to({rotation:525.4},0).wait(1).to({rotation:554.6},0).wait(1).to({rotation:583.1},0).wait(1).to({rotation:610.4},0).wait(1).to({rotation:636.6,x:45},0).wait(1).to({rotation:661.7},0).wait(1).to({rotation:685.9},0).wait(1).to({rotation:709,x:44.9},0).wait(1).to({rotation:731.1,y:38},0).wait(1).to({rotation:752.2,y:37.9},0).wait(1).to({rotation:772.4},0).wait(1).to({rotation:791.7,y:38},0).wait(1).to({rotation:810.1,x:45,y:37.9},0).wait(1).to({rotation:827.6,x:44.9},0).wait(1).to({rotation:844.3},0).wait(1).to({rotation:860.1},0).wait(1).to({rotation:875.2},0).wait(1).to({rotation:889.4,x:45},0).wait(1).to({rotation:902.9},0).wait(1).to({rotation:915.7,x:44.9},0).wait(1).to({rotation:927.8,x:45},0).wait(1).to({rotation:939.3},0).wait(1).to({rotation:950,x:44.9},0).wait(1).to({rotation:960.2,x:45},0).wait(1).to({rotation:969.7,x:44.9},0).wait(1).to({rotation:978.7},0).wait(1).to({rotation:987.1},0).wait(1).to({rotation:994.9},0).wait(1).to({rotation:1002.3,x:45},0).wait(1).to({rotation:1009.2},0).wait(1).to({rotation:1015.6},0).wait(1).to({rotation:1021.5},0).wait(1).to({rotation:1027.1},0).wait(1).to({rotation:1032.3},0).wait(1).to({rotation:1037.1},0).wait(1).to({rotation:1041.6},0).wait(1).to({rotation:1045.7},0).wait(1).to({rotation:1049.6},0).wait(1).to({rotation:1053.2},0).wait(1).to({rotation:1056.6},0).wait(1).to({rotation:1059.7},0).wait(1).to({rotation:1062.7},0).wait(1).to({rotation:1065.5},0).wait(1).to({rotation:1068.1},0).wait(1).to({rotation:1070.6,x:44.9},0).wait(1).to({rotation:1073.1,x:45},0).wait(1).to({rotation:1075.4},0).wait(1).to({rotation:1077.7,x:44.9},0).wait(1).to({rotation:1080,x:45},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.1,45,75.9,75.9);

})(about1Lib = about1Lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var about1Lib, images, createjs, ss;