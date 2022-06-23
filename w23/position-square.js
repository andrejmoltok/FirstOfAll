'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws one square
// Parameters: the x and y coordinates of the square's top left corner
// The function shall draw a 50x50 square from that point
// Draw 3 squares with that function
// Avoid code duplication!

function drawSqr(x,y){
    let size = 50;
    for (let i=0; i<=60; i = i + 30){
        ctx.strokeRect(x+i,y+i,size,size);
    }
}