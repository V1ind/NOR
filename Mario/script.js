const finishLine = document.getElementById("finish-line");
const winMessage = document.getElementById("win-message");
const loseMessage = document.getElementById("lose-message");
let hasFinished = false;
let hasLost = false;
let timerInterval; 

const mario = document.getElementById("Mario");

function checkCollision() {
  const marioPosition = mario.getBoundingClientRect();
  const finishPosition = finishLine.getBoundingClientRect();

  if (
    marioPosition.bottom >= finishPosition.top &&
    marioPosition.left >= finishPosition.left &&
    marioPosition.right <= finishPosition.right
  ) {
    hasFinished = true;
    winMessage.style.display = "block";
    clearInterval(timerInterval);
  } 

}

const timerDisplay = document.getElementById("countdown");
let timeLeft = 10;
timerDisplay.textContent = timeLeft;

function countdown() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      hasLost = true;
      document.write("LOOOOOOOOOOOOSER!")
    }
  }, 1000);
}

countdown();

let isJumping = false;
let gravity = 1;
let isGoingLeft = false;
let isGoingRight = false;
let leftTimer;
let rightTimer;
let jumpTimer;

function jump() {
  let jumpCount = 0;
  isJumping = true;
  jumpTimer = setInterval(function () {
    let currentPosition = parseInt(
      window.getComputedStyle(mario).getPropertyValue("bottom")
    );

    if (jumpCount < 10) {
      mario.style.bottom = currentPosition + 30 + "px";
    } else if (jumpCount > 20) {
      mario.style.bottom = currentPosition - 30 + "px";
    }

    jumpCount++;

    if (jumpCount > 30) {
      clearInterval(jumpTimer);
      isJumping = false;
    }
  }, 30);
}

function moveLeft() {
  if (isGoingRight || hasLost) {
    clearInterval(rightTimer);
    isGoingRight = false;
  }
  isGoingLeft = true;
  leftTimer = setInterval(function () {
    let currentPosition = parseInt(
      window.getComputedStyle(mario).getPropertyValue("left")
    );
    if (currentPosition > 0 && isGoingLeft) {
      mario.style.left = currentPosition - 5 + "px";
    }
  }, 20);
  checkCollision();
}

function moveRight() {
  if (isGoingLeft || hasLost) {
    clearInterval(leftTimer);
    isGoingLeft = false;
  }
  isGoingRight = true;
  rightTimer = setInterval(function () {
    let currentPosition = parseInt(
      window.getComputedStyle(mario).getPropertyValue("left")
    );
    if (currentPosition < window.innerWidth - 50 && isGoingRight) {
      mario.style.left = currentPosition + 5 + "px";
    }
  }, 20);
  checkCollision();
}

function keyDown(event) {
  if (event.key === "ArrowLeft" && !isGoingLeft) {
    moveLeft();
  }
  if (event.key === "ArrowRight" && !isGoingRight) {
    moveRight();
  }
  if (event.key === "ArrowUp" && !isJumping) {
    jump();
  }
}

function keyUp(event) {
  if (event.key === "ArrowLeft") {
    clearInterval(leftTimer);
    isGoingLeft = false;
  }
  if (event.key === "ArrowRight") {
    clearInterval(rightTimer);
    isGoingRight = false;
  }
}

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
