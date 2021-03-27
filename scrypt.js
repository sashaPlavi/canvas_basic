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
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;
ctx.beginPath();

ctx.arc(300, 500, 50, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();
