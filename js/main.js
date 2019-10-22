let app = document.getElementById("app");
app.style.position = "absolute";
app.style.left = "50%";
app.style.transform = "translate(-50%,0)";
let audio = new Audio("./madForest.mp3");
audio.autoplay;
audio.loop = true;
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
  if (event.code === "Space") {
    gameEngine.gameLoop();
    audio.play();
  }
};
document.addEventListener("keydown", keyDownHandler);
gameEngine.increaseEnemies();
