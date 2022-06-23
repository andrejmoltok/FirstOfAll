'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50 long horizontal line from that point
// Draw at least 3 lines with that function using a loop

function horizontal(x,y){
    //30-al noveld a vonalak kozotti tavolsagot
    for (let i=0; i<=150; i = i + 30){
        ctx.beginPath();
        ctx.moveTo(x,y+i);//y - a vonalak kozotti tavolsag
        ctx.lineTo(x+50,y+i);//x+50 - a vonalak hosszusaga
        ctx.stroke();
    }
}

horizontal(30,30);
