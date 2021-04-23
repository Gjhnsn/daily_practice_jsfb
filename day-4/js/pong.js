// create elements

const gameArea = document.createElement("div");
const ball = document.createElement("div");
const paddleLeft = document.createElement("div");
const paddleRight = document.createElement("div");

//append to body

document.body.appendChild(gameArea);
gameArea.appendChild(ball);
gameArea.appendChild(paddleLeft);
gameArea.appendChild(paddleRight);

// styles
gameArea.style.width = "600px";
gameArea.style.height = "600px";
gameArea.style.backgroundColor = "#333";
gameArea.style.position = "relative";

ball.style.width = "50px";
ball.style.height = "50px";
ball.style.backgroundColor = "dodgerblue";
ball.style.borderRadius = "50%";
ball.style.position = "absolute";
ball.style.left = "275px";
ball.style.top = "275px";

paddleLeft.style.width = "20px";
paddleLeft.style.height = "100px";
paddleLeft.style.backgroundColor = "grey";
paddleLeft.style.position = "absolute";

paddleRight.style.width = "20px";
paddleRight.style.height = "100px";
paddleRight.style.backgroundColor = "grey";
paddleRight.style.position = "absolute";
paddleRight.style.left = "580px";

function play() {
  console.log("play");
  window.requestAnimationFrame(play);

  ball.style.left = parseInt(ball.style.left) + 1;
}

play();