class Player {
  constructor(root) {
    this.x = 2 * PLAYER_WIDTH;
    this.y = GAME_HEIGHT - PLAYER_HEIGHT - 65;
    this.domElement = document.createElement("img");
    this.domElement.src = "images/chocobo1.gif";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = this.x + "px";
    this.domElement.style.top = this.y + "px";
    this.domElement.style.zIndex = 10;
    this.domElement.style.height = "125px";
    root.append(this.domElement);
  }
  moveLeft = () => {
    if (this.x > 0) {
      this.x = this.x - PLAYER_WIDTH;
    }
    this.domElement.style.left = this.x + "px";
    this.domElement.style.transform = "scaleX(1)";
  };
  moveRight = () => {
    if (this.x + PLAYER_WIDTH < GAME_WIDTH) {
      this.x = this.x + PLAYER_WIDTH;
    }
    this.domElement.style.transform = "scaleX(-1)";
    this.domElement.style.left = this.x + "px";
  };
  moveUp = () => {
    if (this.y > 0) {
      this.y = this.y - PLAYER_HEIGHT;
    }
    this.domElement.style.top = this.y + "px";
  };
  moveDown = () => {
    if (this.y + PLAYER_HEIGHT < GAME_HEIGHT) {
      this.y = this.y + PLAYER_HEIGHT;
    }
    this.domElement.style.top = this.y + "px";
  };
}
