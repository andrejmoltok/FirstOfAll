'use strict';



// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is
//console.log(width.toString(2));

let lineCount: number = 13;
let ures:string = " ";
let jel:string = "%";
console.log("%%%%%%%%%%%%%%%%");

for (let k=0;k<=lineCount;k++){
     console.log(jel.repeat(1)+ures.repeat(k)+jel.repeat(1)+ures.repeat(lineCount-k)+jel.repeat(1));
}

console.log("%%%%%%%%%%%%%%%%");