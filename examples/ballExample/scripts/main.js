// actual position of ball's center
var pos = {
	x : 15,
    y : 15
};

// speed vector
var speed = {
	x : 0,
	y : 1
};

var ball = {
	r : 10,
	arcS : 0,
	arcE : 2 * Math.PI,
	fillStyle : "#FF0000",
	strokeStyle : "#0000FF"
};


// timer 100ms
var myTimer100ms = setInterval(update, 100);
var canvas;

function onLoad() {
	canvas = document.getElementById("myCanvas");
}

function resetBall() {
	// reset position
	pos.x = ball.r + ball.r/2;
	pos.y = ball.r + ball.r/2;
	
	// reset speed
	speed.x = 0;
	speed.y = 1;
}

function update() {
  updatePosition();
  redrawCanvas();
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

	// check bouncing +-1 for sroke
	if(pos.y + ball.r + 1 >= canvas.height) {
		// when bottom part of ball hits ground then revert speed
		speed.y = -speed.y;
	}
	
	if(pos.y - ball.r - 1 <= 0) {
		// when top of ball hits roof then revert speed
		speed.y = -speed.y;
	}
	
	// update position
	pos.y += speed.y;
	
	// update speed
	speed.y += 1;
}