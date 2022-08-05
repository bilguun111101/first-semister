let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let out = document.getElementById("score")
canvas.width = 400;
canvas.height = 600;


function Column(width, x, y, dx, drawn) {
  this.width = width;
  this.x = x;
  this.y = y;
  this.dx = dx;
}
let pipes = [];
let pipeTimer = 0;
let flapTimer = 0;
let score = 0;
let gameStart = false;
let bird = {
  x: canvas.width/3,
  y: canvas.height/2,
  dy: 0,
  d2y: 0
};



function drawBird() {
  bird.y += bird.dy;
  bird.dy += bird.d2y;
  flapTimer -= 1;
  ctx.beginPath();
  ctx.arc(bird.x, bird.y, 24, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.closePath();
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addPipe() {
  if (pipeTimer <= 0) {
    pipes.push(new Column(60, canvas.width, randInt(60, canvas.height - 100), -1));
    pipeTimer = 200;
  }
  pipeTimer -= 1;
}

function drawPipe() {
  for (i = 0; i < pipes.length; i++) {
    ctx.beginPath();
    ctx.rect(pipes[i].x, 0, pipes[i].width, pipes[i].y);
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#fff";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.rect(pipes[i].x, pipes[i].y + 100, pipes[i].width, canvas.height);
    ctx.fill();
    ctx.stroke();
    pipes[i].x += pipes[i].dx;

  }
  if (pipes[0].x <= -1 * pipes[0].width) {
    pipes.shift();
  }
}

function borderCollision() {
  if (bird.y + 10 >= canvas.height) {
    gameOver();
  } else if (bird.y <= 0) {
    bird.dy *= -2;
  }
}

function pipeCollision() {
  for (i = 0; i < pipes.length; i++) {
    if ((bird.x + 19 >= pipes[i].x) && (bird.x - 19 <= pipes[i].x + pipes[i].width) && (bird.y - 19 <= pipes[i].y || bird.y + 19 >= pipes[i].y + 105)) {
      gameOver();
    }
    else if (bird.x === pipes[i].x + pipes[i].width / 3) {
      score++;
      out.innerHTML = score;
    }
  }
}

function gameOver() {
  bird.y = canvas.height / 2;
  bird.dy = 0;
  bird.d2y = 0;
  gameStart = false;
  pipes = [];
  pipeTimer = 0;
  flapTimer = 0;
  score = 0;
  out.innerHTML = "Game Over";
  canvas.classList.remove("class");
  out.classList.remove("class")
}

function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBird();
  if (gameStart) {
    addPipe();
    drawPipe();
    borderCollision();
    pipeCollision();
  }
}

document.addEventListener("keydown", keyDownHandler, false);
function keyDownHandler(e) {
  if (e.keyCode === 32) {
    if (!gameStart) {
      bird.d2y = 0.1;
      gameStart = true;
      out.innerText = "Go Go"
      canvas.classList.add("class");
    }
    if (flapTimer <= 0) {
      bird.dy = -3;
      flapTimer = 10;
    }
  }
}
setInterval(drawGame, 10);