var canvas, stage, exportRoot;

function init() {

	// About 1
	canvas = document.getElementById("canvas-about1");
	exportRoot = new about1Lib.About1();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(about1Lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// About 2
	canvas = document.getElementById("canvas-about2");
	exportRoot = new about2Lib.About2();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(about2Lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// About 3
	canvas = document.getElementById("canvas-about3");
	exportRoot = new about3Lib.About3();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(about3Lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// About 4
	canvas = document.getElementById("canvas-about4");
	exportRoot = new about4Lib.About4();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(about4Lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// About 5
	canvas = document.getElementById("canvas-about5");
	exportRoot = new about5Lib.About5();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(about5Lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// About 6
	canvas = document.getElementById("canvas-about6");
	exportRoot = new about6Lib.About6();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(about6Lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// Design
	canvas = document.getElementById("canvas-home-design");
	exportRoot = new homeDesignLib.Homedesign();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(homeDesignLib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// Development
	canvas = document.getElementById("canvas-home-dev");
	exportRoot = new homeDevLib.Homedevelopment();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(homeDevLib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	// Testing
	canvas = document.getElementById("canvas-home-testing");
	exportRoot = new homeTestLib.Hometesting();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(homeTestLib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}