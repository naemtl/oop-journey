let gameEngine = new Engine(document.getElementById("app"));
let keyDownHandler = event => {
  if (event.code === "ArrowLeft") {
    gameEngine.player.moveLeft();
  }
  if (event.code === "ArrowRight") {
    gameEngine.player.moveRight();
  }
  if (event.code === "ArrowUp") {
    gameEngine.player.moveUp();
  }
  if (event.code === "ArrowDown") {
    gameEngine.player.moveDown();
  }
};
document.addEventListener("keydown", keyDownHandler);
gameEngine.gameLoop();
gameEngine.increaseEnemies();
// gameEngine.score.update("hello");
