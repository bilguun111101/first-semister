const canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 250;

ctx.strokeStyle = '#2980B9';
ctx.beginPath();
ctx.lineWidth = 6;
ctx.arc(87, 81, 50, 0, 2 * Math.PI);
ctx.shadowOffsetX = 0,
ctx.shadowOffsetY = 3,
ctx.shadowBlur = 35,
ctx.shadowColor = "rgb(0, 0, 218)"
ctx.stroke();

ctx.strokeStyle = '#000'
ctx.beginPath();
ctx.lineWidth = 6;
ctx.arc(192, 81, 50, 0, 2 * Math.PI);
ctx.shadowOffsetX = 0,
ctx.shadowOffsetY = 3,
ctx.shadowBlur = 35,
ctx.shadowColor = "rgb(0, 0, 0)"
ctx.stroke();

ctx.strokeStyle = '#FF0000'
ctx.beginPath();
ctx.lineWidth = 6;
ctx.arc(297, 81, 50, 0, 2 * Math.PI);
ctx.shadowOffsetX = 0,
ctx.shadowOffsetY = 3,
ctx.shadowBlur = 35,
ctx.shadowColor = "rgb(255, 0, 0)"
ctx.stroke();

ctx.strokeStyle = '#F4CB3F'
ctx.beginPath();
ctx.lineWidth = 6;
ctx.arc(141, 146, 50, 0, 2 * Math.PI);
ctx.shadowOffsetX = 0,
ctx.shadowOffsetY = 3,
ctx.shadowBlur = 35,
ctx.shadowColor = "rgb(255, 255, 0)"
ctx.stroke();

ctx.strokeStyle = '#28B463'
ctx.beginPath();
ctx.lineWidth = 6;
ctx.arc(247, 146, 50, 0, 2 * Math.PI);
ctx.shadowOffsetX = 0,
ctx.shadowOffsetY = 3,
ctx.shadowBlur = 35,
ctx.shadowColor = "rgb(0, 255, 0)"
ctx.stroke();