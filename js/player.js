class Player {
  constructor(game) {
    this.context = game.context;
    this.game = game;

    this.map = this.game.map;

    this.row = 1;
    this.col = 1;

    this.width = this.game.map.tilewidth;
    this.height = this.game.map.tileheight;

    this.x = this.width; // setting the starting position in the top left corner
    this.y = this.height; // setting the starting position in the top left corner
    this.numBomb = 2;

    this.playerImg = new Image();
    this.playerImg.src = "/images/Ship4.png";
  }
  drawPlayer() {
    this.context.drawImage(
      this.playerImg,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  setControls() {
    window.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 38: // upkey
          this.row -= 1;
          this.y -= this.height;
          break;
        case 40: // downkey
          this.row += 1;
          this.y += this.height;
          break;
        case 39: // right key
          this.col += 1;
          this.x += this.width;
          break;
        case 37: // left key
          this.col -= 1;
          this.x -= this.width;
          break;
        // case 17: //space key
        // 	this.bomb.drawBomb ()
        // 	break
      }
      this.setOuterBoundries();
      console.log("Row: ", this.row, "Col: ", this.col);
    });
  }

  setOuterBoundries() {
    // left:
    if (this.x <= 0) {
      this.x += this.width;
      this.col += 1;
    }
    // right:
    if (this.x >= this.game.width - this.width) {
      this.x -= this.width;
      this.col -= 1;
    }
    // top:
    if (this.y <= 0) {
      this.y += this.height;
      this.row += 1;
    }
    // bottom:
    if (this.y >= this.game.height - this.height) {
      this.y -= this.height;
      this.row -= 1;
    }
  }

  checkCollision() {
    const currentCell = this.map.cells[this.row][this.col];
    const types = this.map.types;
    if (!currentCell) {
      // ..your code here
      console.log("empty cell");
    } else if (currentCell === types.wall) {
      // ..your code here
      console.log("Wall");
    } else if (currentCell === types.softWall) {
      // ..your code here
      console.log("Soft Wall");
    }
    if (currentCell === "x") {
      // ..your code here
      console.log("bomb");
    }
  }
}
