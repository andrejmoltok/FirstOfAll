// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`
let numbers:number[] = [3, 4, 5, 6, 7];

let reversedNums = numbers.reverse();
// let reversedNumsLoop = [];
// for (let i=numbers.length;i>0;i--){
//     reversedNumsLoop.push(numbers.pop());
// }
console.log("Built-in:", reversedNums);
// console.log("Temp Array with loop:", reversedNumsLoop);