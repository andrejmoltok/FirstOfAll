'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern

for (var i=0;i<8;i++){
    for (var j=0;j<6;j++){
      if ((i+j)%2){
      ctx.fillStyle="brown";
      ctx.fillRect(i*50,j*50,50,50);
      }
      else {
      ctx.fillStyle="black";
      ctx.fillRect(i*50,j*50,50,50);
      }
    }
  }