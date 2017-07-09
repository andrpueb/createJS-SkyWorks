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
	var button;
	var elipse;
	var findMore;
  var voucherText;
  var blueCopyThird;
  var limitedOfferThird;
  var lineRental;
  var sheen;

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
    }, {
      id: "elipse",
      src: "images/elipse.png"
    }, {
      id: "findMore",
      src: "images/findMore.png"
    }, {
      id: "voucherText",
      src: "images/voucher.png"
    }, {
      id: "blueCopyThird",
      src: "images/blueCopyThird.png"
    }, {
      id: "limitedOfferThird",
      src: "images/limitedOfferThird.png"
    }
  ]);

  function handleAllImagesLoaded() {
    console.log("All the images have loaded.");
    setTimeout(timeGone, 15000);
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
    }, 500);
	}

	function drawDeezer(){
		deezer = new createjs.Bitmap(loader.getResult("deezer"));
		shadowDzr = new createjs.Bitmap(loader.getResult("shadow"));
		shadowDzr.y = 194;
		shadowDzr.x = 50;
		deezer.y = 118;
		deezer.x = 50;
    deezer.alpha = 0;
		stage.addChild(shadowDzr, deezer);
    createjs.Tween.get(deezer).to({
      alpha: 1
    }, 500);
	};
	function drawMS(){
		ms = new createjs.Bitmap(loader.getResult("ms"));
		shadowMs = new createjs.Bitmap(loader.getResult("shadow"));
		shadowMs.y = 194;
		shadowMs.x = 169;
		ms.y = 120;
		ms.x = 169;
    ms.alpha = 0;
		stage.addChild(shadowMs, ms);
    createjs.Tween.get(ms).to({
      alpha: 1
    }, 500);
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
		createjs.Tween.get(blueCopy).to({alpha: 0}, 200);
		createjs.Tween.get(chooseReward).to({alpha: 0}, 200);
		createjs.Tween.get(ms).to({alpha: 0}, 200);
		createjs.Tween.get(deezer).to({alpha: 0}, 200);
		createjs.Tween.get(shadowDzr).to({alpha: 0}, 200);
		createjs.Tween.get(shadowMs).to({alpha: 0}, 200);
	}

  function frame1() {
    console.log("draw and animate frame one.");
		drawDeezer();
		drawMS();
		drawLogo();
		setTimeout(drawChooseReward, 500);
		setTimeout(drawBluecopy, 1000);
		setTimeout(fadeFrameOne, 3000);
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
		stampShadow = new createjs.Bitmap(loader.getResult("stampShadow"))
		stampShadow.y = 300
		stampShadow.x = 65;
		stage.addChild(stampShadow, stamp );
		createjs.Tween.get(stamp).to({y: 65}, 800, createjs.Ease.bounceOut);
		createjs.Tween.get(stampShadow).to({y: 200}, 800, createjs.Ease.bounceOut);
	}


	function fadeFramdeTwo(){
		createjs.Tween.get(joinSky).to({alpha: 0}, 200);
		createjs.Tween.get(greyCopy).to({alpha: 0}, 200);
		createjs.Tween.get(stamp).to({alpha: 0}, 200);
		createjs.Tween.get(stampShadow).to({alpha: 0}, 200);
	}

  function frame2() {
    console.log("draw and animate frame two.");
    // refer to the creative brief, frame 2 for guidance.
		setTimeout(drawJoinSky, 500);
		setTimeout(drawGreyCopy, 1000);
		setTimeout(drawStamp, 1000);
		setTimeout(fadeFramdeTwo, 3000);
    // after a timeout and the animations have completed, draw frame 3.
    setTimeout(frame3, 3000);
  }

	function drawButton(){
		button = new createjs.Shape();
    button.setBounds(135, 195, 50, 20);
		button.x = 135;
		button.y = 195;
    button.alpha = 0;
		button.graphics.beginLinearGradientFill(["#9a2c7c", "#174395"], [0, 1], 0, 0, 80, 80).drawRoundRect(0, 0, 130, 35, 8, 8);
    elipse = new createjs.Bitmap(loader.getResult("elipse"));
		elipse.x = 130;
		elipse.y = 195;
		findMore = new createjs.Bitmap(loader.getResult("findMore"));
		findMore.x = 152;
		findMore.y = 205;
		stage.addChild(button, elipse, findMore);
    createjs.Tween.get(button).to({alpha: 1}, 500);
	}

  function drawSheen(){

    sheen = new createjs.Shape();
    sheen.x = 130;
    sheen.y = 170;
    sheen.alpha = 0.3;
    sheen.rotation = 20;
    sheen.graphics.beginFill("white").drawRect(20, 0, 8, 60);
    var myMask = new createjs.Shape();
    myMask.graphics.mt(135,195).lt(265,195).lt(265,230).lt(135,230).lt(135,195).cp();
    myMask.alpha = 5;
    sheen.mask = myMask;
    var blurFilter = new createjs.BlurFilter(5,5,1);
    sheen.filters = [blurFilter];
    var bounds = blurFilter.getBounds();
    sheen.cache(-50+bounds.x, -50+bounds.y, 100+bounds.width, 100+bounds.height);
    stage.addChild(myMask,sheen);
    createjs.Tween.get(sheen).to({x:270}, 800);

  }


  function drawVoucherText(){
		voucherText = new createjs.Bitmap(loader.getResult("voucherText"));
		voucherText.x = 12;
		voucherText.y = 30;
    voucherText.alpha = 0;
		stage.addChild(voucherText);
    createjs.Tween.get(voucherText).to({alpha: 1}, 1000);
	}

  function drawBluecopyThird(){
    blueCopyThird = new createjs.Bitmap(loader.getResult("blueCopyThird"));
		blueCopyThird.x = 35;
		blueCopyThird.y = 90;
    blueCopyThird.alpha = 0;
		stage.addChild(blueCopyThird);
    createjs.Tween.get(blueCopyThird).to({alpha: 1}, 1000);
  }

  function drawLimitedOffer(){
    limitedOfferThird = new createjs.Bitmap(loader.getResult("limitedOfferThird"));
		limitedOfferThird.x = 70;
		limitedOfferThird.y = 130;
    limitedOfferThird.alpha = 0;
		stage.addChild(limitedOfferThird);
    createjs.Tween.get(limitedOfferThird).to({alpha: 1}, 1000);
  }

  function drawLineRental(){
    lineRental = new createjs.Text("Sky Line Rental at £16.40pm applies","10px skyFont", "#afafaf");
    lineRental.x = 70;
    lineRental.y = 165;
    lineRental.alpha = 0;
    stage.addChild(lineRental);
    createjs.Tween.get(lineRental).to({alpha: 1}, 1000);
  }


  function frame3() {
    console.log("draw and animate frame three.");
    // refer to the creative brief, frame 3 for guidance.
		drawButton();
    setTimeout(drawVoucherText, 1000);
    setTimeout(drawBluecopyThird, 2200)
    setTimeout(drawLimitedOffer, 3400)
    setTimeout(drawLineRental, 4600);
    setTimeout(drawSheen, 7000)
  }

  function timeGone(){
    console.log("15 seconds here");
  }

};
