'use strict'

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

var w = canvas.width;
var h = canvas.height;

for (let i=0; i<=260; i=i+20){
        
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo((w/2),i+5);
    ctx.lineTo((w/2)+20+i,(h/2)-10);
    ctx.stroke();

    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo((w/2),i+5);
    ctx.lineTo((w/2)-i,(h/2)-10);
    ctx.stroke();

    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo((w/2),h-i-20);
    ctx.lineTo((w/2)-i,(h/2)-10);
    ctx.stroke();

    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo((w/2),h-i-20);
    ctx.lineTo((w/2)+20+i,(h/2)-10);
    ctx.stroke();
}