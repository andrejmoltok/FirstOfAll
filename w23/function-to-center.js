'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Fill the canvas with lines from the edges (every 20 px) to the center

function toCenter(x,y){
    let w = canvas.width;
    let h = canvas.height;
    let centerX = 200;
    let centerY = 200;
    for (let i=0; i<=400; i = i + 20){
        ctx.beginPath();
        ctx.moveTo(x+i,y);
        ctx.lineTo(centerX,centerY);
        ctx.moveTo(x,y+i);
        ctx.lineTo(centerX,centerY);
        ctx.moveTo(0+i,w);
        ctx.lineTo(centerX,centerY);
        ctx.moveTo(h,0+i);
        ctx.lineTo(centerX,centerY);
        ctx.stroke();
    }
}

toCenter(0,0);