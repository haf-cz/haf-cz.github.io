// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program
const playerPos = {
	X : 50,
	Y : 150
}

let player = document.getElementById("panacek");

const spaceBar = " ";
const arrowLeft = "ArrowLeft";
const arrowUp = "ArrowUp";
const arrowRight = "ArrowRight";
const arrowDown = "ArrowDown";

startGame();

function startGame() {
	console.log("start");
	setPosition(player, playerPos.Y, playerPos.X);
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

	setPosition(player, top, left);
}

function setPosition(obj, top, left) {
	obj.style.top = top + "px";
	obj.style.left = left + "px";
}