// - Create an empty list which will contain names (strings)
let myList:string[] = [];
// - Print out the number of elements in the list
console.log(myList.length);
// - Add "William" to the list
myList.push("William");
// - Print out whether the list is empty or not
console.log(myList.length);
// - Add "John" to the list
myList.push("John");
// - Add "Amanda" to the list
myList.push("Amanda");
// - Print out the number of elements in the list
console.log(myList.length);
// - Print out the 3rd element
console.log(myList[2]);
// - Iterate through the list and print out each name
//   ```text
//   William
//   John
//   Amanda
//   ```
myList.forEach(v => console.log(v));
// - Iterate through the list and print
//   ```text
//   1. William
//   2. John
//   3. Amanda
//   ```
for (let i=0;i<myList.length;i++){
    console.log((i+1).toString()+". "+myList[i]);
}

///console.log(names.split(" ").reduce((p, v, i, a) => p += i.toString() + ". " + a[i] + "\n",""));

// console.log(names.split(" ").reduce((p, v, i) => p += i + ". " + v + "\n",""));

// - Remove the 2nd element
// 2022-06-13 23:16
for (let i=0;i<myList.length-1;i++){
    let temp:string = myList[1];
    myList[1] = myList[2];
    myList[2] = temp;
    myList.pop();
}
console.log(myList);
// - Iterate through the list in a reversed order and print out each name
//   ```text
//   Amanda
//   William
//   ```

for (let i=myList.length-1;i>=0;i--){
    console.log(myList[i]);
}

// - Remove all elements
for (let k=0;k<=myList.length;k++){
    myList.pop();
}
console.log(myList);


