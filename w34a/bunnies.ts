'use strict'

//a rekurzioval a bevitt ertekkel ismeteltetjuk a megadott muveletet
//pl. 5 => 4,3,2,1szer (2 + ...)
function bunnies(bunny:number):any{

    try {
    if (bunny < 0) {
        return "Negative!";
    }
    else if (bunny == 0) {
        return "No bunnies!";
    }
    else if (bunny == 1) {
        return 2;
    }
    else if (bunny > 1) {
        return 2 + bunnies(bunny-1); //(4 + 3 + 2 + 1)
    }
    }
    catch (error) {
        console.log(error);
    }
}



console.log(bunnies(-1));
console.log(bunnies(2));
console.log(bunnies(5));
console.log(bunnies(8));
console.log(bunnies(10));