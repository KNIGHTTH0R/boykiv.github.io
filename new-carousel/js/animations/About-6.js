(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 90,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Yellowbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AhyEeQgIgsgdg8IgZgzIgZgwIAAgBQgIgMgHgOQgNgcgFgcQgGgeACgeQADgvAUgqQAUgpAigfQAhgfArgRQAsgRAuABQAwABArAUQArASAgAiQAhAhARArQAUAwgCA1QgBAggKAcQgJAfgRAaIAAABIgZAwIgaAzQgcA8gIAsg");
	this.shape.setTransform(24,28.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(7));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,204,0.298)").s().p("AhyEeQgIgsgdg8IgZgzIgZgwIAAgBQgIgMgHgOQgNgcgFgcQgGgeACgeQADgvAUgqQAUgpAigfQAhgfArgRQAsgRAuABQAwABArAUQArASAgAiQAhAhARArQAUAwgCA1QgBAggKAcQgJAfgRAaIAAABIgZAwIgaAzQgcA8gIAsg");
	this.shape_1.setTransform(24,28.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,204,0.298)").s().p("AhxEjIgwhXIgBgBQgNgUgSggIgVgoIgGgLIgLgUIgEgJQgNgbgGgdIgBgGQgGgeACggIAAAAQADgyAWgtQAYguAfgfIARgPQAcgXAhgOQAPgGAQgFQAggJAigBQAUAAAWADQAbAEAaAKQAZAJAXAOQATAMAQAPQAYAVARAaQAJAOAIAOQARAhAHAlQADARABASQACAhgHAfQgLApgLAVIAAAAIgKAXIgOAeIgSAjIgJASIgiBHIgQAiQgcAFgeAIIi1AAIgGgIg");
	this.shape_2.setTransform(23.9,27.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,204,0.298)").s().p("AhvEwQgigpgcgpIgBgCQgQgWgSgfQgOgWgJgTIAAgBIgGgLIgMgVIgEgKQgNgcgGgfIgBgGQgHggADghIAAgBQADg0AWgvQAYgxAgggIARgPQAdgZAjgQQAPgHARgFQAhgLAjgCQAVgBAXACQAdADAbAJQAbAIAZAOQAUAMASAOQAaAVAUAaIATAcQATAiAKAlQAFASACASQAFAjgFAhQgIArgJAXIAAABIgJAYIgOAfQgKAVgKAQIgJATQgVAqgTAeQgJAQgNASQgaAKggANIi+ABIgIgGg");
	this.shape_3.setTransform(23.9,26.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,204,0.298)").s().p("AhuE8QgrgqgdglIgBgCQgTgXgTgfQgOgWgKgVIgGgLIgNgXIgEgJQgNgegHghIgBgHQgGggACgjIAAgBQADg2AXgxQAZgyAgghIASgRQAdgaAkgRQAQgIARgGQAigMAkgDQAYgCAWACQAeACAdAJQAbAHAbANQAWAMATAOQAbAVAWAZQALAOAKAOQAWAjAMAmQAGASAEATQAGAkgCAlQgGAqgIAZIAAABQgDAMgGANIgNAhQgKAVgLASIgJASQgWAsgXAeQgKAPgRASIg5AgIjGACIgLgEg");
	this.shape_4.setTransform(23.9,25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,204,0.298)").s().p("AhtFGQgzgqgegjIgBgBQgVgZgUgeQgOgWgLgWIAAgBIgGgLIgNgYIgEgJQgOgggGghIgBgHQgHgiACgkQAEg4AXgzQAZgzAhgjIARgRQAfgbAjgSQARgIASgHQAigNAlgEQAYgCAXABQAgACAdAHQAdAIAcANQAXALAVAOQAcAUAXAaQAMAOALAOQAYAjAOAnQAHASAEATQAIAlAAAmQgFAtgHAaIAAABQgDAMgFAOIgNAiQgKAVgMATIgJATQgYAsgZAeQgKAOgUATIg6AnIjMACIgMgCg");
	this.shape_5.setTransform(23.9,24.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,204,0.298)").s().p("AhtFMQg4gqgfghIgBgBQgXgZgUgeQgOgWgLgYIgHgLIgNgZIgFgJQgNgggHgjIgBgHQgHgkADgjQADg6AYg0QAZg0AhgjIASgSQAfgcAkgTQARgIASgHQAjgOAlgEQAZgDAYABQAgABAeAHQAeAHAcANQAYALAWAOQAdAUAYAaQANANALAPQAZAiAQAoQAIATAFATQAJAlAAAoQgCAugHAbIAAABQgDANgFANIgNAjQgKAVgMAUIgKATQgYAugbAdQgLANgWAUIg6AsIjQACIgOgBg");
	this.shape_6.setTransform(24,24.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,204,0.298)").s().p("AjIEHQgrgsgcg6IAAgBQgLgQgJgUQgSglgHgoQgIgpACgnQAEg/Acg5QAbg3AtgqQAtgqA6gWQA7gXA/ABQBAACA7AaQA6AZArAtQAsAtAYA6QAbBBgDBGQgCAqgNApQgNApgWAkIAAABQgdA7giAjQgWAYhHA4IjiACQg7gqggggg");
	this.shape_7.setTransform(24,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,57.3);


(lib.Wier = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7C2A18").ss(1,2,0,3).p("AhJASQAdgJAGgYQAlAVAogVQAGAYAdAJ");
	this.shape.setTransform(7.4,1.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.4,17.4,6.1);


// stage content:
(lib.About6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		var self = this;
		$('.we-are li:nth-child(6)').on('mouseover click', function() {
			self.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(96));

	// Light
	this.instance = new lib.Wier("synched",0);
	this.instance.setTransform(45,34.8,1.024,1,0,0,0,7.4,1.6);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96));

	// Lamp
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B8DC8").s().p("ApvEXIAAosITfAAIAAIsg");
	this.shape.setTransform(45,72.5,0.185,0.185);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7AA9C").s().p("Ai+OqID99eICAALIj9dfg");
	this.shape_1.setTransform(49.6,53.6,0.185,0.185);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7AA9C").s().p("Ai+upICAgLID9deIiAAMg");
	this.shape_2.setTransform(40.4,53.6,0.185,0.185);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B8DC8").s().p("AnBCuQhIAAgygzQg0g0AAhHQAAhGA0g0QAygzBIAAIODAAQBIAAAzAzQAzA0AABGQAABHgzA0QgzAzhIAAg");
	this.shape_3.setTransform(45,78,0.185,0.185);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6D6E").s().p("AlJGNQiKiKAAjBIAAiDQAAjBCKiKQCJiKDAAAQDAAACKCKQCKCKAADBIAACDQAADBiKCKQiKCKjAAAQjAAAiJiKg");
	this.shape_4.setTransform(45,78.5,0.185,0.185);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(96));

	// Yello bubble
	this.instance_1 = new lib.Yellowbubble();
	this.instance_1.setTransform(45,38.7,1,1,0,0,0,24,28.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:23.7,y:33.7,alpha:0.373},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.027},0).wait(1).to({alpha:0.4},0).wait(1).to({regY:28.7,y:38.7,alpha:0.398},0).wait(1).to({regY:23.7,y:33.7,alpha:0.432},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.689},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.847},0).wait(1).to({alpha:0.925},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:1},0).wait(1).to({regY:28.7,y:38.7},0).wait(61).to({regY:23.7,y:33.7,alpha:0.988},0).wait(1).to({alpha:0.951},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.691},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.395},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.276},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.276},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.12},0).wait(2).to({alpha:0},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0},0).wait(1));

	// White bubble
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhyEeQgIgsgdg8IgZgzIgZgwIAAgBQgIgMgHgOQgNgcgFgcQgGgeACgeQADgvAUgqQAUgpAigfQAhgfArgRQAsgRAuABQAwABArAUQArASAgAiQAhAhARArQAUAwgCA1QgBAggKAcQgJAfgRAaIAAABIgZAwIgaAzQgcA8gIAsg");
	this.shape_5.setTransform(45,38.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(66,60,48,78.5);

})(about6Lib = about6Lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var about6Lib, images, createjs, ss;