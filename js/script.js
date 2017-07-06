// JavaScript Document
window.onload = function() {
  console.log("Junior developer test.");

  // declare your variables here.
  var background;
  var ms;
  var deezer;
	var logo;
	var chooseReward;
	var blueCopy;
	var shadowOne;
	var shadowTwo;
	var joinSky;
	var greyCopy;
	var stamp;
	var stampShadow;

  // store a reference to the canvas which we will draw on.
  var stage = new createjs.Stage("stage");

  // register the stage to handle mouse events.
  stage.enableMouseOver(10);

  // register the Ticker to listen for the tick event.
  createjs.Ticker.addEventListener("tick", handleTick, false);

  // redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
  function handleTick(event) {
    stage.update();
  }

  // create a preloader to load the images.
  var loader = new createjs.LoadQueue(false);

  // when all images are loaded call the handleAllImageLoaded function.
  loader.on('complete', handleAllImagesLoaded, this);

  // provide a manifest of files and ids to be loaded.
  loader.loadManifest([
    {
      id: "background",
      src: "images/background.png"
    }, {
      id: "ms",
      src: "images/msVoucher.png"
    }, {
      id: "deezer",
      src: "images/deezer.png"
    }, {
      id: "shadow",
      src: "images/shadow.png"
    }, {
      id: "logo",
      src: "images/skyLogo.png"
    }, {
      id: "choose",
      src: "images/chooseReward.png"
    }, {
      id: "blueCopy",
      src: "images/blueCopy.png"
    }, {
      id: "joinSky",
      src: "images/joinSky.png"
    }, {
      id: "greyCopy",
      src: "images/greyCopy.png"
    }, {
      id: "stamp",
      src: "images/stamp.png"
    }, {
      id: "stampShadow",
      src: "images/stampShadow.png"
    }
  ]);

  function handleAllImagesLoaded() {
    console.log("All the images have loaded.");
    drawTheBannerBackground();
		drawLogo();
  }

  function drawTheBannerBackground() {
    console.log("draw and animate the background.");

    // provide the loader result for the item with id == 'background'
    // as a bitmap which will be stored in our background variable.
    background = new createjs.Bitmap(loader.getResult("background"));

    // set the background bitmap alpha to zero.
    background.alpha = 0;

    // add background to the display list.
    stage.addChild(background);

    // animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
    createjs.Tween.get(background).to({
      alpha: 1
    }, 1000);

    // after the background is drawn on the canvas draw and animate the content for frame 1.
    setTimeout(frame1, 100);
  }
	function drawLogo(){
		logo = new createjs.Bitmap(loader.getResult("logo"));
		logo.y = 205;
		logo.x = 12;
		stage.addChild(logo);
		logo.alpha = 0;
		createjs.Tween.get(logo).to({
      alpha: 1
    }, 1000);
	}

	function drawDeezer(){
		deezer = new createjs.Bitmap(loader.getResult("deezer"));
		shadowDzr = new createjs.Bitmap(loader.getResult("shadow"));
		shadowDzr.y = 194;
		shadowDzr.x = 50;
		deezer.y = 118;
		deezer.x = 50;
		stage.addChild(shadowDzr, deezer);
	};
	function drawMS(){
		ms = new createjs.Bitmap(loader.getResult("ms"));
		shadowMs = new createjs.Bitmap(loader.getResult("shadow"));
		shadowMs.y = 194;
		shadowMs.x = 169;
		ms.y = 120;
		ms.x = 169;
		stage.addChild(shadowMs, ms);
	};


	function drawChooseReward(){
		chooseReward = new createjs.Bitmap(loader.getResult("choose"));
		chooseReward.scaleX = 0.5;
		chooseReward.scaleY = 0.5;
		chooseReward.x = 50;
		chooseReward.y = 25;
		chooseReward.alpha = 0;
		stage.addChild(chooseReward);
		createjs.Tween.get(chooseReward).to({alpha: 1}, 500);
	}

	function drawBluecopy(){
		blueCopy = new createjs.Bitmap(loader.getResult("blueCopy"));
		blueCopy.x = 60;
		blueCopy.y = 50;
		blueCopy.alpha = 0;
		stage.addChild(blueCopy);
		createjs.Tween.get(blueCopy).to({alpha: 1}, 500);
	}

	function fadeFrameOne(){
		createjs.Tween.get(blueCopy).to({alpha: 0}, 500);
		createjs.Tween.get(chooseReward).to({alpha: 0}, 500);
		createjs.Tween.get(ms).to({alpha: 0}, 500);
		createjs.Tween.get(deezer).to({alpha: 0}, 500);
		createjs.Tween.get(shadowDzr).to({alpha: 0}, 500);
		createjs.Tween.get(shadowMs).to({alpha: 0}, 500);
	}

  function frame1() {
    console.log("draw and animate frame one.");
		drawDeezer();
		drawMS();
		drawLogo();
		drawChooseReward();
		setTimeout(drawBluecopy, 500);
		setTimeout(fadeFrameOne, 2000);
    // refer to the creative brief, frame 1 for guidance.
    // after a timeout and the animations have completed, draw frame 2.
    setTimeout(frame2, 3000);
  }

	function drawJoinSky(){
		joinSky = new createjs.Bitmap(loader.getResult("joinSky"));
		joinSky.x = 40;
		joinSky.y = 30;
		joinSky.alpha = 0;
		stage.addChild(joinSky);
		createjs.Tween.get(joinSky).to({alpha: 1}, 500);
	}

	function drawGreyCopy(){
		greyCopy = new createjs.Bitmap(loader.getResult("greyCopy"));
		greyCopy.x = 120;
		greyCopy.y = 220;
		greyCopy.alpha = 0;
		stage.addChild(greyCopy);
		createjs.Tween.get(greyCopy).to({alpha: 1}, 500);
	}

	function drawStamp(){
		stamp = new createjs.Bitmap(loader.getResult("stamp"));
		stamp.y = -200;
		stamp.x = 65;
		stampShadow = new createjs.Bitmap(loader.getResult)
		stage.addChild(stamp);
		createjs.Tween.get(stamp).to({y: 65}, 1500, createjs.Ease.bounceOut);
		drawStamp.alpha = 1;
	}


	function fadeFramdeTwo(){
		createjs.Tween.get(joinSky).to({alpha: 0}, 500);
		createjs.Tween.get(greyCopy).to({alpha: 0}, 500);
		createjs.Tween.get(stamp).to({alpha: 0}, 500);
	}

  function frame2() {
    console.log("draw and animate frame two.");
    // refer to the creative brief, frame 2 for guidance.
		drawJoinSky();
		setTimeout(drawGreyCopy,  500);
		drawStamp();
		setTimeout(fadeFramdeTwo, 2000);
    // after a timeout and the animations have completed, draw frame 3.
    setTimeout(frame3, 3000);
  }

  function frame3() {
    console.log("draw and animate frame three.");
    // refer to the creative brief, frame 3 for guidance.
  }

};
