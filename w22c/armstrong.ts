// > An Armstrong number is an n-digit number that is equal to the sum of the nth
// > powers of its digits.

// - Let's demonstrate this for a **4-digit number**: 1634 is a 4-digit number,
//   raise each digit to the fourth power, and add: 1^4 + 6^4 + 3^4 + 4^4 = 1634,
//   so it is an Armstrong number.
// - For a **3-digit number**: 153 is a 3-digit number, raise each digit to the
//   third power, and add: 1^3 + 5^3 + 3^3 = 153, so it is an Armstrong number.

// ## Exercise

// Write a simple program to check if a given number is an armstrong number. The
// program should ask for a number. E.g. if we type 371, the program should print
// out: `The 371 is an Armstrong number.`

// let num = 19;
// let digits = Array.from(String(num),Number);
//     console.log(digits);
// let power = 0;    
// let sum = 0;
    
// for (let i=0;i<=digits.length-1;i++){  
//     power = Math.pow(digits[i],digits.length);//8**2//1**2=64+1=65
//     sum += power;    
// }    
// console.log(sum);
// if (sum == num){
//     console.log("Armstrong");
// }
// else
// {
//     console.log("Not armstrong");
// }

//Osszes Armstrong szam 0-10000 kozott
// let osszes:number = 0;
let arms:number[] = [];

for (let k=0;k<=10000;k++){
    if (armstrong(k) !== 0){
        arms.push(armstrong(k));
    }
}
console.log(arms);
console.log(arms.length);

function armstrong(num:number){
    let digits = Array.from(String(num),Number);
    let power = 0;    
    let sum = 0;
    
    for (let i=0;i<digits.length;i++){  
        power = Math.pow(digits[i],digits.length);
        sum += power;    
    }    

    let eredmeny:number = 0;

    if (sum==num){
        eredmeny = sum;
    }
    else
    {
        eredmeny = 0;
    }

    return eredmeny
}

console.log(armstrong(153));
console.log(armstrong(370));
console.log(armstrong(371));
console.log(armstrong(407));
console.log(armstrong(1634));
console.log(armstrong(8208));
console.log(armstrong(9474));