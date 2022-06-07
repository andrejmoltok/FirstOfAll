// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements of `numbers` to the console
let numbers:number[] = [3,4,5,6,7];
// let sum = 0;

// for (var i=0;i<number.length;i++){
//     sum += number[i];
// }
// console.log(sum);

let sum:number = numbers.reduce((p,c,i,a) => p+c,0);
console.log(sum);