'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

// ctx.beginPath();
// ctx.moveTo(10,10);
// ctx.lineTo(290,10);
// ctx.lineTo(290,290);
// ctx.lineTo(10,290);
// ctx.stroke();

let param = [[10, 10], [290,  10], [290, 290], [10, 290]];
let param2 = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];
var list = new Array();


function draw(list){
    ctx.beginPath();
    ctx.moveTo(list[0][0],list[0][1]);

    for (let j=1; j<=list.length-1; j++){
        ctx.lineTo(list[j][0],list[j][1]);
    }

    ctx.stroke();
}

draw(param);
draw(param2);