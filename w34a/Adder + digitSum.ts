'use strict'

//number adder with recursion

function add(n:number):any{
    if (n < 1){
        return 0;
    }
    else
    {
        return (n + add(n-1));
    }
}

console.log(add(20));


//sumdigit
//((Math.trunc((n/10)/10))+(Math.ceil((n/10)/10))+(Math.floor(((n / 10) - Math.floor(n / 10))*10)))
// function digitSum(n:number):any{
//     let sum = 0;
//     //let dec:number = (Math.floor(((n / 10) - Math.floor(n / 10))*10));  //12/10=1.2 - 1 = 0.2*10 = 2
//     if (n < 1){
//         return 0;
//     }
//     else
//     {
//         return sum += digitSum(Math.trunc(n/10));
//     }
// }