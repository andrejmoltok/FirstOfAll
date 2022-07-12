'use strict'

function change(word:string):any{
    try {
        var newWord = "";
  if (word.length == 1) {
    return word.charAt(0) == "x" ? "": word.charAt(0);
  } else {
    word.charAt(0) == 'x'? newWord += '' : newWord += word.charAt(0);
    return newWord + change(word.substring(1));
  }

    } catch (error) {
        console.log(error);
    }
}

console.log(change("Xerox"));
console.log(change("Nexus"));