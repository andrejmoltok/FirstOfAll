'use strict';

//let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is


let jel: string = "*";
let ures: string = " ";
let count: number = 3;
let odd:number = -1;

for (let i=0;i<4;i++){
    console.log(ures.repeat(count-i)+jel.repeat(odd=odd+2)+ures.repeat(count-i));//3-1-3//2-3-2//1-5-1//0-7-0
}