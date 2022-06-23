'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle
// draw a green vertical line to the canvas' middle

let w = canvas.width;//600
let h = canvas.height;//400

function drawLine(x1,y1,x2,y2){
    if (x1==0) {
        ctx.strokeStyle = "red";
    }
    else if (y1==0) {
        ctx.strokeStyle = "green";
    }    
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

drawLine((w/2),0,(w/2),h);//vertical line => 300,0,300,400 => y1=0
drawLine(0,(h/2),w,(h/2));//horizontal line => 0,200,600,200 => x1=0