'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

function subStrSearch(one:string, two:string):void{
    let c:string = one;
    let d:string = two;
    console.log(c.indexOf(d));
}

//  Example

// should print: `17`
console.log(subStrSearch("this is what I'm searching in", "searching"));

// should print: `-1`
console.log(subStrSearch("this is what I'm searching in", "not"));

/*let s: string = "this is what I'm searching in";
let w: string = "searching";
let n: string = "not";
let index: number;
console.log(s + " --- " + w);
//index = s.indexOf( "searching" );
index = s.indexOf(w);
console.log(index);
index = s.indexOf(n);
console.log(index);
*/