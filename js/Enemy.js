class Enemy {
  constructor(theRoot, enemySpot) {
    this.root = theRoot;
    this.spot = enemySpot;
    this.x = GAME_WIDTH;
    this.y = Math.random() * GAME_HEIGHT;
    this.destroyed = false;
    this.domElement = document.createElement("img");
    let enemyNumber = Math.floor(Math.random() * 3 + 1);
    if (enemyNumber === 1) {
      this.domElement.src = "images/crazyboo.gif";
    } else if (enemyNumber === 2) {
      this.domElement.src = "images/ghastlySmall.gif";
    } else if (enemyNumber === 3) {
      this.domElement.src = "images/batSmall.gif";
    }
    this.domElement.style.position = "absolute";
    this.domElement.style.left = this.x + "px";
    this.domElement.style.top = this.y + "px";
    this.domElement.style.zIndex = 5;
    theRoot.appendChild(this.domElement);
    this.speed = Math.random() / 2 + 0.25;
  }

  update = timeDiff => {
    this.x = this.x - this.speed * timeDiff;
    this.domElement.style.left = this.x + "px";
    //diagonal
    // if (this.x < GAME_WIDTH) {
    //   this.x = this.x + timeDiff * this.speed;
    //   this.domElement.style.left = this.x + "px";
    // } else if (this.x >= GAME_WIDTH) {
    //   this.x = this.x - timeDiff * this.speed;
    //   this.domElement.style.left = this.x + "px";
    // }

    console.log(this.speed);

    if (this.x + ENEMY_WIDTH < 0) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }
  };
  increaseSpeed = speedMult => {
    this.speed += speedMult;
  };
}
