'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

//k = arr.length-(k+1);
//stringName.length-1; thing.length-1

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(thing:string){    
    return thing.split('').reverse().join(''); 
}

console.log(reverse(toBeReversed));