// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test

let numbers:number[] = [1,2,3,8,5,6];

console.log("Initial: " + numbers);

let fourthElem = numbers.map(function(fourthElem){
    numbers.splice(3,1,4);
    return fourthElem;
})

//console.log("Old array was [1,2,3,8,5,6]");
console.log("New array is: " + fourthElem);
console.log("Number changed to: " + numbers[3]);