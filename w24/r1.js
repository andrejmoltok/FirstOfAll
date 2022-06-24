'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

var w = canvas.width;
var h = canvas.height;

for (let i=0; i<=400; i=i+20){
    for (let j=0; j<=400; j=j+20){
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(3,70+i);
        ctx.lineTo(20+i,h-20);
        ctx.stroke();
        ctx.strokeStyle = "purple";
        ctx.beginPath();
        ctx.moveTo(70+j,3);
        ctx.lineTo(w-20,20+j);
        ctx.stroke();
    }
}

//0,50//20,h
//0,70//40,h
//0,90//60,h