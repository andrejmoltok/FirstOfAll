//'use strict'

function powerN(base,power){
    if (power == 0){
        return 1;
    }
    else if (power == 1){
        return base;
    }
    else
    {
        return base * powerN(base,power-1);
    }
    
}

console.log(powerN(3,2));
console.log(powerN(5,2));
console.log(powerN(4,4));
console.log(powerN(9,5));

