var myStr = "word";

function change(word:string):any {
    if (word.length == 1) {
        return word;
    } 
    else {
        //console.log(word);
    return word.charAt(0) + "*" + change(word.substring(1));
  }
}

console.log(change(myStr));






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