class Bomb {
	constructor(game) {
		this.context = game.context;
		this.timer = 2000;
		this.bombImg = new Image();
		this.bombImg.src = "/images/Ship6.png";
		this.alive = true;
	}
	drawBomb() {
		this.context.save();
		this.context.drawImage(this.bombImg);
		this.context.restore();
	}
	// explodeBomb () {
	// 	if(!this.alive) {
	// 		bomb
	// 	}
	// }
}
