const canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
window.onload = () => {
	const game = new Game(canvas);
	document.getElementById("start-button").onclick = () => {
		game.start();
		console.log("START");
	};
};