'use strict'

//Euclidean algorithm variant A 

function euclidGCD(big:number,small:number):any{
    if (big < 0 || small < 0){
        console.log("Please use positive numbers.");
    }
    else if (big == small){
        return big;
    }
    else if(big < small){
        return euclidGCD(big, small - big); 
    }
    else
    {
        return euclidGCD(big - small,small);
    }
}


console.log(euclidGCD(-54,-24));

console.log(euclidGCD(18,48));

console.log(euclidGCD(54,24));

console.log(euclidGCD(45,10));

console.log(euclidGCD(10,8));

console.log(euclidGCD(48,18));