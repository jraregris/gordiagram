
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.textAlign = "right";
ctx.strokeText("VOX 1 ", 50, 20+4);
ctx.strokeText("VOX 2 ", 50, 30+4);
ctx.strokeText("VOX 3 ", 50, 40+4);

ctx.beginPath();
ctx.moveTo(50,20);
ctx.bezierCurveTo(125, 20, 125, 100, 200, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50,20-4);
ctx.lineTo(50+10,20);
ctx.lineTo(50,20+4);
ctx.fill();

ctx.beginPath();
ctx.moveTo(50,30);
ctx.bezierCurveTo(125, 30, 125, 100, 200, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50,40);
ctx.bezierCurveTo(125, 40, 125, 100, 200, 100);
ctx.stroke();
