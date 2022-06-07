// - Create a variable named `firstList`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `secondList`
//   with the following content: `[4, 5]`
// - Log "secondList is longer" to the console if `secondList` has more elements than
//   `firstList`
// - Otherwise log: "firstList is the longer one"

let firstList:number[] = [1,2,3];
let secondList:number[] = [4,5];
let len1 = firstList.length;
let len2 = secondList.length;

if (len1 < len2){
    console.log("secondList is longer => " + secondList.length + " items");}
    else {  
    console.log("firstList is the longer one => " + firstList.length + " items");};