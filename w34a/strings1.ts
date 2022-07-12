'use strict'

function strings1(str:string):any{
    try {
        let newStr = new Array();
        let split = str.split('');
        let i:number = 0;
        console.log(split);
             
        //cut the first letter every call
        //and use the remainder in the recursion
        if (str.length-1 >= i){
        let extract = split.shift();
        newStr[i] = "";
        console.log("Extracted letter: ", extract);
        if (extract === 'x'){
            extract = "y";
        }
        newStr[i] += extract;
        console.log("New array: ", newStr);
        i++;
        }
        
        if (split.join('').length > 0){
            strings1(split.join(''));
        }        
    }
    catch (error)
    {
        console.log(error);
    }
}

console.log(strings1('Xerox'));
//console.log(strings1('Xerxes'));