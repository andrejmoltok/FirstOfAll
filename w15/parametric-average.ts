'use strict';

// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3

function sumAvg(num:number){
    let sum:number = 0;
    for (let i=0;i<=num;i++){
        sum = sum + i;
    }
    let avg:number;
    avg = sum / num;
    console.log("Sum is "+sum+" and Average is "+avg);
}

sumAvg(5);
sumAvg(10);
sumAvg(15);