'use strict'

// - Create an empty map where the keys are integers and the values are characters
let newMap = new Map();

// - Print out whether the map is empty or not
console.log("A newMap ures-e: ",newMap.size);

// - Add the following key-value pairs to the map
let myMapKeys = [97,98,99,65,66,67];
let mMV = "a,b,c,A,B,C";
let myMapValues = mMV.split(',');
for (let i=0;i<myMapKeys.length;i++){
    (newMap.set(myMapKeys[i],myMapValues[i]));
}
//   |  Key | Value |
//   | :--- | :---- |
//   | 97   | a     |
//   | 98   | b     |
//   | 99   | c     |
//   | 65   | A     |
//   | 66   | B     |
//   | 67   | C     |

let newMapKeys = newMap.keys();
let newMapvalues = newMap.values();

// - Print all the keys
console.log("newMap kulcsai: ",newMapKeys);

// - Print all the values
console.log("newMap ertekei: ",newMapvalues);

// - Add value D with the key 68
console.log("68:D hozzadva a newMap-hoz => ",newMap.set(68,'D'));

// - Print how many key-value pairs are in the map
console.log("Mennyi kulcs-ertek par van a newMap-ben: ",newMap.size);

// - Print the value that is associated with key 99
console.log("A 99-es kulcs erteke ",newMap.get(99));

// - Remove the key-value pair where with key 97
console.log("97-es kulcs-ertek torolve: ",newMap.delete(97));

// - Print whether there is an associated value with key 100 or not
console.log("Van-e 100-as kulcsnak erteke a newMap-ben: ",newMap.has(100));

// - Remove all the key-value pairs
console.log("newMap kulcs-ertek parjainak torlese");
newMap.clear();
console.log("newMap tartalma `newMap.clear()` utan: ",newMap.size);