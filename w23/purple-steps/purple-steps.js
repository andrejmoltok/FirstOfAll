'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]


for (let i=10; i<=350; i=i+20){
    let size = 20;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "rgb(177, 69, 243)";//or "purple"
    ctx.fillRect(i,i,size,size);
}