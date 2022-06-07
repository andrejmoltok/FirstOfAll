// - Create a variable named `numbers`
//   with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element
let numbers:number[] = [54, 23, 66, 12];

// let sum23:number = numbers[1]+numbers[2];

// console.log(sum23);

let sum23:number[] = numbers.slice(1,3);
console.log(sum23.reduce((p,c,i,a) => p+c,0));