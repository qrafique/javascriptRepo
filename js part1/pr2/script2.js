let canvas = document.createElement('canvas');
canvas.height = 350;
canvas.width = 540;
var ctx = canvas.getContext('2d');
ctx.font = '30px Cursive';
ctx.fillText("Hello world!", 50, 50);
ctx.shadowColor = 'green';
document.body.appendChild(canvas);
 
var img = new Image();
img.src = 'https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg';
document.body.appendChild(img);