// -  Create a variable named `numbers` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element directly (without loops and without array methods: forEach, map, ...)
// -  Log the third element to the console

//Egyszeruen
// let numbers:number[] = [1, 2, 3, 4, 5];

// console.log("Original number: ", numbers[3]);
// console.log("Incremented: ", numbers[3]+1);

//Array `.map` method
let numbers:number[] = [1, 2, 3, 4, 5];

console.log(numbers.map((v,i,a) => (i==3)? (v+1) : v));