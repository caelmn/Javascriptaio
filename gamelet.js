const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let posX = 0;
let posY = 0;

function handleKeyPress(e) {
  if (e.code === "KeyA") {
    posX -= 10;
  }
  if (e.code === "KeyD") {
    posX += 10;
  }
  if (e.code === "KeyS") {
    posY += 10;
  }
  if (e.code === "KeyW") {
    posY -= 10;
  }
  if (posX < 0) {
    posX = 0;
  }
  refresh(); //updates the ball's position
}

function refresh() {
  ball.style.left = posX + "px";
  ball.style.top = posY + "px";
}
