// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

function calculateFactorial(num:number){
    let factorio = 1;
    for (var i = num; i >= 1; i--){
    factorio *= i;
    }
    console.log(factorio);
}

calculateFactorial(4);
calculateFactorial(5);
calculateFactorial(6);
calculateFactorial(7);