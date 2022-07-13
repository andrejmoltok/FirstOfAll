'use strict'

// ELMÉLET:
// 1. a rekurzióban azt kell eldünteni, h mi lesz az utolsó lépés, 
//    amikor már nem kell rekurzív függvényt meghívni

// 2. meg kell fogalmazni, h mi történjék a rekurzív meghíváskor

//0 and 1 => base cases
//start from num=0
//sum =prev+curr => 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fib(num:number):any{
    if (num == 0){
        return 0
    }
    else if (num == 1){
        return 1
    }
    else {
        return fib(num-1) + fib(num-2);
    }
}

console.log(fib(10)); 
// 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55;