'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

const jel:string = "% ";
for (let i=0;i<=8;i++){
    console.log(jel.repeat(8));
}