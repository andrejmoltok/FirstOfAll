'use strict'

function string_change(str:string):any{
    try {
        let newStr:string = "";
        
        console.log("Check first letter: ", str.substring(0,1));
        newStr += str.substring(0,1);
        if (str.substring(0,1) == 'x'){
            console.log(str.replace(str[0],'y'));
            console.log(str);
            
        }

        console.log("New string: ",newStr);
        console.log("Check after replace: ",str);
        
        

        //string_change(str.substring(1));//takes the string beginning from index 1


        return null;
    }
    catch (error)
    {
        console.log(error);
    }
}

console.log(string_change('Xerox'));
//console.log(string_change('Xerxes'));