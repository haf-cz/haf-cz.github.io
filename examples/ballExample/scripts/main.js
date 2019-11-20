// actual position of ball's center
var pos = {
	x : 15.0,
    y : 15.0
};

// speed vector
var speed = {
	x : 0.0,
	y : 1.0
};

// external constant/forces etc.
var ext = {
	speedIncY : 2.0 // speed increment
}

var ball = {
	r : 10.0,
	arcS : 0,
	arcE : 2 * Math.PI,
	fillStyle : "#FF0000",
	strokeStyle : "#0000FF"
};


// timer 100ms
var myTimer100ms;
var canvas;
var debug;
var buttons = {
	start,
	pause,
	step
};
var simualtion = false;

function onLoad() {
	canvas = document.getElementById("myCanvas");
	debug = document.getElementById("debug");
	
	buttons.start = document.getElementById("start");
	buttons.pause = document.getElementById("pause");
	buttons.step = document.getElementById("step");
	
	start();
}

function resetBall() {
	// reset position
	pos.x = ball.r + ball.r/2;
	pos.y = ball.r + ball.r/2;
	
	// reset speed
	speed.x = 0.0;
	speed.y = 15.0;
	
	update();
}

function step() {
	update();
}

function start() {
	simulation(true);
	// start timer
	myTimer100ms = setInterval(update, 100);
}

function pause() {
	simulation(false);
	// pause timer
	clearInterval(myTimer100ms)
}

function simulation(isRunning) {
	simualtion = isRunning;
	
	buttons.start.disabled = isRunning;
	buttons.pause.disabled = !isRunning;
	buttons.step.disabled =  isRunning;
}

function update() {
  updatePosition();
  redrawCanvas();
  updateDebug();
}

function redrawCanvas() {
	var ctx = canvas.getContext("2d");

	// clear drawing area
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.arc(pos.x, pos.y, ball.r, ball.arcS, ball.arcE);
	ctx.fillStyle = ball.fillStyle;
	ctx.fill();
	ctx.strokeStyle = ball.strokeStyle;
	ctx.stroke();
}

function updatePosition() {	
	// local helper
	var b = {
		bottom : pos.y + ball.r + speed.y,
		top : pos.y - ball.r + speed.y // + speed as speed can be negative
	};
	
	var revertSpeed = false;
	
	// check bouncing
	if(b.bottom >= canvas.height) {
		// when bottom part of ball hits ground then revert speed
		revertSpeed = true;
	}
	
	if(b.top <= 0) {
		// when top of ball hits roof then revert speed
		revertSpeed = true;
	}
	
	if(revertSpeed)
	{
		speed.y = -speed.y;
	}
	else
	{
		// update speed -> linear change
		speed.y += ext.speedIncY;
	}
	
	// update position
	pos.y += speed.y;
}

function updateDebug() {
	debug.innerHTML = "[" + pos.x + "," + pos.y + "] (" +	speed.x + "," + speed.y + ")";
}