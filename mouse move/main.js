const ball = document.getElementById('ball');
let prevX = null;
let prevY = null;
let prevTime = null;
const speed = 100; 

function moveBall(event) {
  const currentTime = Date.now();
  const deltaTime = (prevTime) ? (currentTime - prevTime) : 0;

  if (prevX !== null && prevY !== null) {
    const distanceX = speed * (deltaTime / 1000); 
    const distanceY = speed * (deltaTime / 1000); 

    const currentX = parseFloat(ball.style.left || 0);
    const currentY = parseFloat(ball.style.top || 0);

    const directionX = (event.clientX > currentX) ? 1 : -1;
    const directionY = (event.clientY > currentY) ? 1 : -1;

    ball.style.left = (currentX + distanceX * directionX) + 'px';
    ball.style.top = (currentY + distanceY * directionY) + 'px';
  }

  prevX = event.clientX;
  prevY = event.clientY;
  prevTime = currentTime;
}

document.addEventListener('mousemove', moveBall);