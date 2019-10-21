class Engine {
  constructor(theRoot) {
    this.root = theRoot;
    this.player = new Player(this.root);
    this.enemies = [];
    this.maxEnemies = MAX_ENEMIES;
    this.speedMult = 0;
    addBackground(this.root);
  }
  isPlayerDead() {
    let collision = false;
    this.enemies.forEach(enemy => {
      let enemyBottom = enemy.y + ENEMY_HEIGHT;
      if (enemy.x === this.player.x && enemyBottom >= this.player.y) {
        collision = true;
      }
    });
    return collision;
  }
  gameLoop = () => {
    if (this.lastFrame === undefined) this.lastFrame = new Date().getTime();
    let timeDiff = new Date().getTime() - this.lastFrame;
    this.lastFrame = new Date().getTime();
    this.enemies.forEach(enemy => {
      enemy.update(timeDiff);
    });
    this.enemies = this.enemies.filter(enemy => {
      return !enemy.destroyed;
    });

    while (this.enemies.length < this.maxEnemies) {
      let spot = nextEnemySpot(this.enemies);
      let enemy = new Enemy(this.root, spot);
      this.enemies.push(enemy);
      enemy.increaseSpeed(this.speedMult);
    }
    if (this.isPlayerDead()) {
      window.alert("Game over");
      return;
    }
    setTimeout(this.gameLoop, 20);
  };
  increaseEnemies = () => {
    if (this.maxEnemies < 5) {
      this.maxEnemies++;
    }
    this.speedMult += 0.1;
    setTimeout(this.increaseEnemies, 10000);
  };
}
