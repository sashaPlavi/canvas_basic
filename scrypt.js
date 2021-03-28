const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArr = [];

//console.log(ctx);
// window.addEventListener('resize', () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   ctx.fillStyle = 'white';
//   ctx.fillRect(10, 20, 50, 150);
// });

// ctx.fillStyle = 'white';
// ctx.fillRect(10, 20, 50, 150);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener('click', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});
canvas.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

// function drowCircle() {
//   ctx.fillStyle = 'blue';
//   ctx.strokeStyle = 'red';
//   ctx.lineWidth = 5;
//   ctx.beginPath();

//   ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
//   ctx.stroke();
//   ctx.fill();
// }

class Particle {
  constructor() {
    // this.x = mouse.x;
    // this.y = mouse.y;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  drow() {
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);

    ctx.fill();
  }
}
// making particels
function init() {
  for (let index = 0; index < 100; index++) {
    particlesArr.push(new Particle());
  }
}
init();
console.log(particlesArr);
// function makeParticle() {
//   const particle = new Particle();
//   particle.update();
//   particle.drow();
// }
function handleParticles() {
  for (let index = 0; index < particlesArr.length; index++) {
    particlesArr[index].update();
    particlesArr[index].drow();
  }
}

//cleating loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // drowCircle();
  handleParticles();
  requestAnimationFrame(animate);
}

animate();
