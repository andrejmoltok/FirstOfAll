//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

//  Example:
//console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
//console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

let arr:number[] = [34, 12, 24, 5, 9];

function bubble(arr:number[]){
    let sorted = arr.sort(function(a,b){return(a-b)});
    return sorted;
}

console.log("Ascending sort => original => [" +arr+ "]:", bubble(arr));


//Rendezes egy sorban console.log-ban
console.log([34, 12, 24, 5, 9].sort(function(a,b){return(a-b)}));


//Rendezes hozzaadott boolean parameter szerint

let arr2:number[] = [34, 12, 24, 5, 9];

function advBubble(arr:number[], bool:boolean){
    if (bool===true){
        arr.sort(function(a,b){return(b-a)});
    }
    else
    {
        arr.sort(function(a,b){return(a-b)});
    }
    return arr;
}

console.log("Advanced sort when true: ", advBubble(arr2, true));
console.log("Advanced sort when false: ", advBubble(arr2, false));