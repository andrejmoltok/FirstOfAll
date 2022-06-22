'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter and draws one square
// Parameter: the square size
// The function shall draw a square of that size to the center of the canvas
// Draw at least 3 squares with that function.
// (the squares should not be filled otherwise they will hide each other)
// Avoid code duplication!

let w = canvas.width;
let h = canvas.height;

function sqr(size){    
    ctx.strokeRect(-50,-50,size,size);
}
ctx.translate((w/2),(h/2));
sqr(size);