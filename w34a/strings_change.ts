'use strict'

function change(word:string):any{
    try {
        var newWord = "";
  if (word.length == 1) {
    return word.charAt(0) == "x" ? "y": word.charAt(0);
  } else {
    word.charAt(0) == 'x'? newWord += 'y' : newWord += word.charAt(0);
    return newWord + change(word.substring(1));
  }

    } catch (error) {
        console.log(error);
    }
}

console.log(change("Xerox"));
console.log(change("Nexus"));






// function charReplace(string:string):any{
//     if(string.length < 1){
//         return string;
//     }
//     let first = string.substring(0,1);
    
//     // let match:string = 'x';
//     let replace:string = '*';
//     if(first){
//         first += replace;
//     }

//     let last:any = charReplace(string.substring(1));

//     return first + last;
// }

// console.log(charReplace('xerox'));
// console.log(charReplace('xaxax'));