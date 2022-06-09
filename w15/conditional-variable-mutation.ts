'use strict';

// if a is even increment output1 by one
let a = 12;
    if (a % 2 ==0){
        a++;
        console.log("The number is even, so I added one: " + a);
    }
    else
    {
        console.log("The number is not even " + a);
    }


// if b is between 10 and 20 set output2 to "Sweet!"
// if less than 10 set output2 to "Less!",
// if more than 20 set output2 to "More!"
let b = Math.floor((Math.random() * 29) + 1);
if (b > 10 && b < 20){
    console.log("Sweet!(number is between 10 and 20)");
}
else if (b < 10)
{
    console.log("Less!(number is less than 10)");
}
else if (b > 20){
    console.log("More!(number is larger than 20)");
}

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

let c: number = Math.floor((Math.random() * 99) + 1);
let is_bonus:boolean = Math.random() < 0.5;
if (c >= 50 && is_bonus==false){
    console.log("C is at least 50 = " +c+ " and is_bonus is false, c = " +(c-2));
}
else if (c < 50 && is_bonus==false){
    console.log("C is smaller than 50 = " +c+ " and is_bonus is false, c = "+(c-1));
}
else if (is_bonus==true){
    console.log("C is: "+c+" and is_bonus is true.");
}

// if d is dividable by 4
// and time is not more than 200
// set output3 to "check"
// if time is more than 200
// set output3 to "Time out"
// otherwise set output3 to "Run Forest Run!"

let d:number = Math.floor((Math.random()*299)+1);
let time:number = Math.floor((Math.random()*299)+1);
if (d%4==0 && time <= 200){
    console.log("Check");
}
else if (time > 200){
    console.log("Time out!");
}
else
{
    console.log("Run Forest Run!");
}