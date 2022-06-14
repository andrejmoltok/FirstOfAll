// - Create a list ('`List A`') which contains the following values
//   ```text
//   Apple, Avocado, Blueberries, Durian, Lychee
//   ```
let listA:string = "Apple, Avocado, Blueberries, Durian, Lychee";
// - Create a new list ('`List B`') with the values of `List A`
let listB:string = listA;
// - Print out whether `List A` contains "Durian" or not
console.log("Does listA contain 'Durian'? = ",listA.includes("Durian"));
// - Remove "Durian" from `List B`
// make array from string with split and array.from
let sListB=listB.split(', ');
Array.from(sListB);
//check type of new array
console.log("Typeof sListB:",typeof sListB);
//get index of element 'Durian'
let dur:number = sListB.findIndex((e,i,t) => e=='Durian'? i:"");
console.log("Index of Durian is : ",dur);
//move element 'Durian' at index dur to the last position of the array
let temp:string = sListB[dur];
    sListB[dur] = sListB[dur+1];
    sListB[dur+1] = temp;
//remove 'Durian', the last element from listB
    sListB.pop();
//return List B to log
console.log("Moved 'Durian' at index "+dur+" to last index and removed it with .pop():",sListB);
console.log("\n");
// - Add "Kiwifruit" to `List A` after the 4th element
//make array from listA with split and Array.from()
let sListA=listA.split(', ');
Array.from(sListA);
console.log("List A: ",sListA);
//add 'Kiwifruit' to listA
sListA.push('Kiwifruit');
//find index of 'Kiwifruit' and give it a name
let kiwi:number = sListA.findIndex((e,i,t) => e=='Kiwifruit'? i:"");
console.log(sListA);
//move 'Kiwifruit' after the 4th element in listA
let csere:string = sListA[kiwi];
sListA[kiwi] = sListA[kiwi-1];
sListA[kiwi-1] = csere;
console.log(sListA);
// - Compare the size of `List A` and `List B`
let sizeA:number = sListA.length;
let sizeB:number = sListB.length;
// console.log(sListA.length);
// console.log(sListB.length);
if (sizeA > sizeB){
    console.log("Size of ListA '",sizeA,"' is bigger than ListB");
}
else
{
    console.log("Size of ListB '"+sizeB+"' is bigger than ListA");
}
// - Get the index of "Avocado" from `List A`
console.log("Index of Avocado in sListA: ",sListA.indexOf('Avocado'));
// - Get the index of "Durian" from `List B`
console.log("Index of Durian in sListB: ",sListB.indexOf('Durian'));
// - Add "Passion Fruit" and "Pomelo" to `List B` in a single statement
console.log(sListB);
sListB.push("Passion Fruit","Pomelo");
console.log(sListB);
// - Print out the 3rd element from `List A`
console.log("3rd element of sListA: ",sListA[2]);