'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

//globalis valtozok
var w = canvas.width;
var h = canvas.height;

//background
ctx.fillStyle = "black";
ctx.fillRect(0,0,w,h);

//szurke arnyalatok tomb
var greyShades = [[178, 190, 181],[115, 147, 179],[54, 69, 79],[169, 169, 169],[229, 228, 226],[112, 128, 144]];

//for ciklus random szinekkel es poziciokkal
for (let i=0; i<=1500; i = i + 15){
    ctx.fillStyle = "rgb("+greyShades[Math.floor(Math.random() * greyShades.length)]+")";
    ctx.fillRect((Math.random() * i),(Math.random() * i),4,4);
}

//proba logolas
// console.log("rgb("+greyShades[Math.floor(Math.random() * greyShades.length)]+")");