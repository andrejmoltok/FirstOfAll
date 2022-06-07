// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test

let numbers:number[] = [1,2,3,8,5,6];

console.log("Initial: " + numbers);

// let newArray = numbers.map((e, i, a) => {if(i == 3){e = 4;}return e;})

let newArray = numbers.map((a, i) =>  i==3? 8 : a);

console.log("New array is: " + newArray);