'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!

var w = canvas.width;
var h = canvas.height;

//rajzolj meg 4 negyzetet
for (let i=0; i<4; i++){ 

    //randomizald a negyzetek kezdo ertekeit es meretet
    let x1 = Math.floor(Math.random() * (w/2));
    let y1 = Math.floor(Math.random() * (w/2));
    let size = Math.floor(Math.random() * (w/2)); 

    //szinezd be a negyzeteket randomizalva es rajzold meg
    ctx.fillStyle = "rgb("+(255*Math.random())+","+(255*Math.random())+","+(255*Math.random())+")";
    ctx.fillRect(x1,y1,size,size); 
}