'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop

function goToCenter(x,y){
    let centerX = 200;
    let centerY = 200;
    for (let i=0; i<=150; i = i + 50){
        ctx.beginPath();
        ctx.moveTo(x+i,y);
        ctx.lineTo(centerX,centerY);
        ctx.stroke();
    }
}

goToCenter(30,30);