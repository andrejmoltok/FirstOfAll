'use strict'

//Euclidean algorithm variant B -> modulo with remainder

function euclidGCD(big:number,small:number):any{
    if (big < 0 || small < 0){
        console.log("Please use positive numbers.");
    }else if(big < small){
        console.log("Please give larger argument first into function.(ex. euclidGCD(48,18))"); 
    }
    else if (big % small == 0){
        return small;
    }
    else
    {
        return euclidGCD(small,big % small);
    }
}


console.log(euclidGCD(-54,-24));

console.log(euclidGCD(18,48));

console.log(euclidGCD(54,24));

console.log(euclidGCD(45,10));

console.log(euclidGCD(10,8));

console.log(euclidGCD(48,18));