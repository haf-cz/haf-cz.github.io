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
	player.style.top = playerPos.Y + "px";
	player.style.left = playerPos.X + "px";
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
}