class Enemy {
  constructor(theRoot, enemySpot) {
    this.root = theRoot;
    this.spot = enemySpot;
    this.x = enemySpot * ENEMY_WIDTH;
    this.y = -ENEMY_HEIGHT;
    this.destroyed = false;
    this.domElement = document.createElement("img");
    this.domElement.src = "images/enemy.png";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = this.x + "px";
    this.domElement.style.top = this.y + "px";
    this.domElement.style.zIndex = 5;
    theRoot.appendChild(this.domElement);
    this.speed = Math.random() / 2 + 0.25;
  }

  update = timeDiff => {
    this.y = this.speed * timeDiff + this.y;
    this.domElement.style.top = this.y + "px";
    //diagonal
    //this.x = this.x + timeDiff * this.speed;
    //this.domElement.style.left = this.x + "px";
    //setTimeout(this.increaseSpeed, 5000);
    console.log(this.speed);

    if (this.y > GAME_HEIGHT) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }
  };
  increaseSpeed = speedMult => {
    this.speed += speedMult;
  };
}