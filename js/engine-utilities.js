let nextEnemySpot = enemies => {
  let enemySpots = GAME_WIDTH / ENEMY_WIDTH; // creates 5 spots
  let spotsTaken = [false, false, false, false, false];

  enemies.forEach(enemy => {
    spotsTaken[enemy.spot] = true;
  });
  let candidate = undefined;
  while (candidate === undefined || spotsTaken[candidate]) {
    candidate = Math.floor(Math.random() * enemySpots);
  }
  return candidate;
};

let addBackground = root => {
  let bg = document.createElement("img");
  bg.src = "images/loopForest.gif";
  bg.style.height = GAME_HEIGHT + "px";
  bg.style.width = GAME_WIDTH + "px";
  root.append(bg);
  let whiteBox = document.createElement("div");
  whiteBox.id = "whitebox";
  whiteBox.style.position = "absolute";
  whiteBox.style.top = GAME_HEIGHT + "px";
  whiteBox.style.height = 150 + "px";
  whiteBox.style.width = GAME_WIDTH + "px";
  whiteBox.style.zIndex = 100;
  whiteBox.style.background = "#fff";
  //root.append(whiteBox);
};
