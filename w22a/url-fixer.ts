'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

//Megoldas 3
console.log(url.replace("//","://").replace('bots','odds'));

//Megoldas 1
let strArr: string[] = url.split('//');
strArr.push('://');
let temp = strArr[2];
strArr[2] = strArr[1];
strArr[1] = temp;
console.log(strArr.join('').replace('bots','odds'));

//Megoldas 2
let strArr2: string[] = url.split('');
strArr2[5] = ':/';
console.log(strArr2.join('').replace('bots','odds'));