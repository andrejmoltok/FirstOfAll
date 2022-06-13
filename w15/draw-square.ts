'use strict';
// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 13;
let ures:string = " ";
let jel:string = "%";
console.log(jel.repeat(lineCount+2));

for (let k=0;k<=lineCount;k++){
     console.log(jel.repeat(1)+ures.repeat(lineCount)+jel.repeat(1));
}

console.log(jel.repeat(lineCount+2));