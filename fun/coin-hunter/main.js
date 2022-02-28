// toto budeš potřebovat později
function checkCoin() {
	if (!( player.x + player.width < coin.x || coin.x + coin.width < player.x || player.y + player.height < coin.y || coin.y + coin.height < player.y)) {
		updateScore();
		setCoinToRandomPosition();
	}
}


// sem začni psát svůj program
const playerPos = {
	X : 50,
	Y : 150
}

let player = document.getElementById("panacek");
let coin = document.getElementById("mince");
let score = document.getElementById("score");
let points = 0;

const spaceBar = " ";
const arrowLeft = "ArrowLeft";
const arrowUp = "ArrowUp";
const arrowRight = "ArrowRight";
const arrowDown = "ArrowDown";

startGame();

function startGame() {
	console.log("start");
	points = 0;
	updateScore();
	setPosition(player, playerPos.Y, playerPos.X);
	setCoinToRandomPosition();
}

function keyPressed(event) {
	let top = parseInt(player.style.top);
	let left = parseInt(player.style.left);
	const dx = 5;
	const dy = 5;

	switch (event.key)
	{
		case spaceBar:
			startGame();
			break;
		case arrowDown:
			top += dy;
			break;
		case arrowUp:
			top -= dy;
			break;
		case arrowRight:
			left += dx;
			break;
		case arrowLeft:
			left -= dx;
			break;
	}

	if (left < 0) {
		left = 0;
	}
	if (left + player.width >= window.innerWidth) {
		left = window.innerWidth  - player.width;
	}

	if (top < 0) {
		top = 0;
	}
	if (top + player.height >= window.innerHeight) {
		top = window.innerHeight - player.height;
	}

	setPosition(player, top, left);
	checkCoin();
}

function setPosition(obj, top, left) {
	obj.style.top = top + "px";
	obj.style.left = left + "px";
}

// returns random position in window
function getRandomPosition() {
	return {
	  Y : Math.floor(Math.random() * (window.innerHeight - coin.height)),
	  X : Math.floor(Math.random() * (window.innerWidth - coin.width))
	};
}

function setCoinToRandomPosition() {
	let coinPos = getRandomPosition();
	setPosition(coin, coinPos.Y, coinPos.X);
}

function updateScore() {
	score.innerHTML = points++;
}