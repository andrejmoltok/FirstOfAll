'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge

ctx.lineWidth = 5;

ctx.beginPath();
ctx.moveTo(30,30);
ctx.strokeStyle = "red";
ctx.lineTo(100,30);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(100,30);
ctx.lineTo(100,100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100,100);
ctx.strokeStyle = "blue";
ctx.lineTo(30,100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(30,100);
ctx.strokeStyle = "orange";
ctx.lineTo(30,30);
ctx.stroke();