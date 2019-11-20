var pos = {
	x : 15,
    y : 10
};

var ball = {
	r : 10,
	arcS : 0,
	arcE : 2 * Math.PI,
	fillStyle : "#FF0000",
	strokeStyle : "#0000FF"
};


// timer 100ms
var myVar = setInterval(update, 100);

function resetBall() {
	pos.x = ball.r + ball.r/2;
	pos.y = ball.r;
}

function update() {
  pos.y += 1;
  redrawCanvas();
}

function redrawCanvas() {
var canvas = document.getElementById("myCanvas");
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