'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

var w = canvas.width;
var h = canvas.height;

function rainbow(size,color){
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    for (let i=0; i<=h; i = i + 50){
        //0,i => w,0
        //0,50 => w,0
        ctx.fillStyle = "rgb("+(255*Math.random())+","+(255*Math.random())+","+(255*Math.random())+")";
        ctx.fillRect(0,i,w,i);
    }
    ctx.fillStyle = color;
    ctx.fillRect(centerX-(size/2),centerY-(size/2),size,size);
}

rainbow();
