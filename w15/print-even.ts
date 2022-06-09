'use strict';

// Create a program that prints all the even numbers between 0 and 500
function printer500(){
    for (let i=0;i<=500;i++){
        console.log((i%2==0)? i: '');
    }
}

printer500();