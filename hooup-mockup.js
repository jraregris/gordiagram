var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.font = "10px mono";

ctx.textAlign = "right";
ctx.fillText("VOX 1", 50-2, 20 + 4);
ctx.fillText("VOX 2", 50-2, 30 + 4);
ctx.fillText("VOX 3", 50-2, 40 + 4);

ctx.beginPath();
ctx.moveTo(50, 20);
ctx.bezierCurveTo(125, 20, 125, 100, 200, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 30);
ctx.bezierCurveTo(125, 30, 125, 100, 200, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 40);
ctx.bezierCurveTo(125, 40, 125, 100, 200, 100);
ctx.stroke();
