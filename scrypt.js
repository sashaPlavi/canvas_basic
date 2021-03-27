const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
  x: null,
  y: null,
};
console.log('bla');
canvas.addEventListener('click', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(event);
  drowCircle();
});

function drowCircle() {
  ctx.fillStyle = 'blue';
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;
  ctx.beginPath();

  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
}
