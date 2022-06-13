'use strict';
// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let addThis: string = "always takes longer than";
let quote2: string = "Hofstadter's Law: It "+addThis+" you expect, even when you take into account Hofstadter's Law.";

console.log(quote2);

//Megoldas 2

console.log(quote.slice(0,21)+addThis+quote.slice(20));