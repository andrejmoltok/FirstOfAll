'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function

var w = canvas.width;
var h = canvas.height;

function diagonal(x1, y1, x2, y2){
    if (x1==0 && y1==0){
        ctx.strokeStyle = "green";
    }
    else if (x1==w && y1==0){
        ctx.strokeStyle = "red";
    }
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

diagonal(0,0,w,h);
diagonal(w,0,0,h);