class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.map = new Map(this);
    this.player = new Player(this);
    this.player.setControls();
    this.animationId;
    this.frame = 0;
    this.gameON = true;
  }
  draw() {
    this.map.draw();
    this.player.drawPlayer();
  }
  update() {
    this.frame++;
    this.player.checkCollision();
  }
  animation(timestamp) {
    this.draw();
    this.update();
    this.animationId = window.requestAnimationFrame(timestamp => {
      this.animation(timestamp);
    });
  }
  start() {
    this.map.setUpLevel();
    this.animation();
  }
}
