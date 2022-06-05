// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter
function sum(n:number){
    let sum =0;
    for (var i=0;i<=n;i++){
        sum += i;
    }
    console.log(" ");
    console.log("The sum of numbers from 0 to " +n+" is: " + sum);
    console.log("A megadott szam szamainak osszege 0-tol " +n+"-ig: " + sum);
    console.log(" ");
}

sum(5);
sum(15);
sum(1024);