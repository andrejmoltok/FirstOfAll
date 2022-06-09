'use strict';

// Write a program that prints the numbers from 1 to 100
// but for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”
// For numbers which are multiples of both three and five print “FizzBuzz”

//export function fizzBuzz (maximum: number)

function fizzBuzz(max:number){
    for (let i=1;i<=max;i++){
        if (i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }
        else if (i%3==0){
            console.log("Fizz");
        }
        else if (i%5==0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz(100);

// let i:number = 100;
// console.log((i) => (i%3==0 && i%5==0)? "FizzBuzz" : (i%3==0)? "Fizz" : (i%5==0)? "Buzz" : i);