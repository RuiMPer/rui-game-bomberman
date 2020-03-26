class Map {
  constructor(game) {
    this.context = game.context;
    this.cells = [];
    this.grid = 65;
    this.numRows = 13;
    this.numCols = 15;
    this.tilewidth = 65;
    this.tileheight = 65;
    this.softWallImg = new Image();
    this.softWallImg.src = "/images/wall3.png";
    this.wallImg = new Image();
    this.wallImg.src = "/images/wall1.png";
    this.bgImg = new Image();
    this.bgImg.src = "/images/wall2.jpg";
    this.entities = [];
    this.template = [
      [
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉"
      ],
      ["▉", "x", "x", , , , , , , , , , "x", "x", "▉"],
      ["▉", "x", "▉", , "▉", , , "▉", , , "▉", , "▉", "x", "▉"],
      ["▉", "x", , , , "▉", , , "▉", , , , , "x", "▉"],
      ["▉", , "▉", , , , "▉", , , , "▉", , "▉", , "▉"],
      ["▉", , "▉", , "▉", , , , , , "▉", , "▉", , "▉"],
      ["▉", , , , , , "▉", , "▉", , , , , , "▉"],
      ["▉", , , , "▉", , , "▉", , , "▉", , , , "▉"],
      ["▉", , "▉", , "▉", , , , , , "▉", , "▉", "x", "▉"],
      ["▉", "x", , , , , , , , "▉", , , , "x", "▉"],
      ["▉", "x", "▉", , "▉", "▉", , , "▉", , "▉", , "▉", "x", "▉"],
      ["▉", "x", "x", , , , , , , , , "x", "x", "x", "▉"],
      [
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉",
        "▉"
      ]
    ];
    this.types = {
      wall: "▉",
      softWall: 1,
      bomb: 2,
      bg: 3
    };
  }
  setUpLevel() {
    // populate the level with walls and soft walls
    for (let row = 0; row < this.numRows; row++) {
      this.cells[row] = [];
      for (let col = 0; col < this.numCols; col++) {
        // 80% chance cells will contain a soft wall
        if (!this.template[row][col] && Math.random() < 0.7) {
          this.cells[row][col] = this.types.softWall;
        } else if (this.template[row][col] === this.types.wall) {
          this.cells[row][col] = this.types.wall;
        } else if (this.template[row][col] === this.types.bg) {
          this.cells[row][col] = this.types.bg;
        }
      }
    }
  }
  draw() {
    // update and render everything in the grid
    for (let row = 0; row < this.numRows; row++) {
      for (let col = 0; col < this.numCols; col++) {
        switch (this.cells[row][col]) {
          case this.types.wall:
            context.drawImage(
              this.wallImg,
              col * this.grid,
              row * this.grid,
              this.tilewidth,
              this.tileheight
            );
            break;
          case this.types.softWall:
            context.drawImage(
              this.softWallImg,
              col * this.grid,
              row * this.grid,
              this.tilewidth,
              this.tileheight
            );
            break;
          case this.types.bgImg:
            context.drawImage(
              this.bgImg,
              col * this.grid,
              row * this.grid,
              this.tilewidth,
              this.tileheight
            );
            break;
        }
      }
    }
  }
}
