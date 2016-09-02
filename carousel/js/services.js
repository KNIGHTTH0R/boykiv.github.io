var w = 1176;

$(window).on('resize', function() {
	redrawTreemap()
});

function redrawTreemap() {
	if ($('.development-section').width() != w) {
		w = $('.development-section').width();
		drawTreemap(w);
	}
}

drawTreemap(w);
redrawTreemap();

function drawTreemap(w) {
	var h = 410 - 80,
	x = d3.scale.linear().range([0, w]),
	y = d3.scale.linear().range([0, h]),
	color = d3.scale.category20c(),
	root,
	node;

	var treemap = d3.layout.treemap()
		.round(false)
		.size([w, h])
		.sticky(true)
		.value(function(d) { return d.size; });

	var svg = d3.select("#skills").html("<div></div>")
		.attr("class", "chart")
		.style("width", w + "px")
		.style("height", h + "px")
		.append("svg:svg")
		.attr("width", w)
		.attr("height", h)
		.append("svg:g")
		.attr("transform", "translate(.5,.5)");

	d3.json("flare.json", function(data) {
		node = root = data;

		var nodes = treemap.nodes(root)
			.filter(function(d) { return !d.children; });

		var cell = svg.selectAll("g")
			.data(nodes)
			.enter().append("svg:g")
			.attr("class", "cell")
			.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
			.on("click", function(d) { return zoom(node == d.parent ? root : d.parent); });

		cell.append("svg:rect")
			.attr("width", function(d) { return d.dx - 1; })
			.attr("height", function(d) { return d.dy - 1; })
			.style("fill", function(d) { return color(d.parent.name); });

		cell.append("svg:text")
			.attr("x", function(d) { return d.dx / 2; })
			.attr("y", function(d) { return d.dy / 2; })
			.attr("dy", ".35em")
			.attr("text-anchor", "middle")
			.text(function(d) { return d.name; })
			.style("opacity", function(d) { d.w = this.getComputedTextLength(); return d.dx > d.w ? 1 : 0; });

		d3.select(window).on("click", function() { zoom(root); });

		d3.select("select").on("change", function() {
			treemap.value(this.value == "size" ? size : count).nodes(root);
			zoom(node);
		});
	});

	function size(d) {
		return d.size;
	}

	function count(d) {
		return 1;
	}

	function zoom(d) {
		var kx = w / d.dx, ky = h / d.dy;
		x.domain([d.x, d.x + d.dx]);
		y.domain([d.y, d.y + d.dy]);

		var t = svg.selectAll("g.cell").transition()
			.duration(d3.event.altKey ? 7500 : 750)
			.attr("transform", function(d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });

		t.select("rect")
			.attr("width", function(d) { return kx * d.dx - 1; })
			.attr("height", function(d) { return ky * d.dy - 1; })

		t.select("text")
			.attr("x", function(d) { return kx * d.dx / 2; })
			.attr("y", function(d) { return ky * d.dy / 2; })
			.style("opacity", function(d) { return kx * d.dx > d.w ? 1 : 0; });

		node = d;
		d3.event.stopPropagation();
	}
}





// Onload section

function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

function goToByScroll(id){
      // Remove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top-50},
        'slow');
}

function activeSwitcher(n) {
	var menuItems = $('.services-menu > li');
	var outputItems = $('.output-block > li');
	menuItems.removeClass("active");
	outputItems.removeClass("active");
	for (var i = 0; i < menuItems.length; i++) {
		if (i == n) {
			$('.services-menu > li:nth-child(' + (i + 1) + ')').addClass("active");
			$('.output-block > li:nth-child(' + (i + 1) + ')').addClass("active");
		}
	}
}

function activeSwitcherContact(n) {
	var menuItems = document.querySelectorAll('.customers > li');
	var outputItems = document.querySelectorAll('.testimonials > li');
	for (var i = 0; i < menuItems.length; i++) {
		menuItems[i].className = "";
		outputItems[i].className = "";
		if (i == n) {
			menuItems[i].className = "active";
			outputItems[i].className = "active";
		}
	}
}

switch (getUrlParameter('section')) {
	case 'design':
		activeSwitcher(0);
		goToByScroll('design-title');
		break;

	case 'development':
		activeSwitcher(1);
		goToByScroll('development-title');
		break;

	case 'testing':
		activeSwitcher(2);
		goToByScroll('testing-title');
		break;
	default:
		activeSwitcher(1);
}

// Animations
var ODCIsPlaying = 0;
$(document).on('scroll', function() {
	if ($(document).scrollTop() + window.innerHeight === $(document).height() && ODCIsPlaying === 0) {
		odc1.play();
		ODCIsPlaying = 1;
	}
});

var odc1, odc2, odc3, odc4;

var canvas, stage, exportRoot;

function init() {

	// UX
	canvas = document.getElementById("canvas-UX");
	exportRoot = new UXLib.UX();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(UXLib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// UI
	canvas = document.getElementById("canvas-UI");
	exportRoot = new UILib.UI();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(UILib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// GD
	createjs.MotionGuidePlugin.install();
	canvas = document.getElementById("canvas-GD");
	exportRoot = new GDLib.GD();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(GDLib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// Security
	canvas = document.getElementById("canvas-security");
	exportRoot = new SecurityLib.Security();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(SecurityLib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// Usability
	canvas = document.getElementById("canvas-usability");
	exportRoot = new UsabilityLib.Usability();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(UsabilityLib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// Performance
	canvas = document.getElementById("canvas-performance");
	exportRoot = new PerformanceLib.Performance();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(PerformanceLib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// ODC1
	canvas = document.getElementById("canvas-ODC1");
	exportRoot = new ODC1Lib.ODC1();

	odc1 = exportRoot;

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(ODC1Lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// ODC2
	canvas = document.getElementById("canvas-ODC2");
	exportRoot = new ODC2Lib.ODC2();

	odc2 = exportRoot;

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(ODC2Lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// ODC3
	canvas = document.getElementById("canvas-ODC3");
	exportRoot = new ODC3Lib.ODC3();

	odc3 = exportRoot;

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(ODC3Lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// ODC4
	canvas = document.getElementById("canvas-ODC4");
	exportRoot = new ODC4Lib.ODC4();

	odc4 = exportRoot;

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(ODC4Lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// Full cycle
	canvas = document.getElementById("canvas-full-cycle");
	exportRoot = new CycleLib.Fullcycle();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(CycleLib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}