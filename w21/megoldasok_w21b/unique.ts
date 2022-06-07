//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)

let arr: number[] = [1,4,7,34,77,34,86,4];

let findUniqueItems:number[] = arr.filter((v,i,a) => (a.indexOf(v)===i));

console.log(findUniqueItems);