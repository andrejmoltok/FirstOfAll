//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)
let arr = [1,34,66,87,34,1,96];

let findUniqueItems:number[] = arr.filter((v,i,a) => (a.indexOf(v)===i));

console.log(findUniqueItems);