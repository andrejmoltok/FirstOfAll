 // - Create a two dimensional list dynamically with the following content.
 //   Note that a two dimensional list is often called matrix if every
 //   internal list has the same length.
 //   Use a loop!
 //
 //   1 0 0 0
 //   0 1 0 0
 //   0 0 1 0
 //   0 0 0 1
 //
 //   Its length should depend on a variable
 //  
 // - Print this two dimensional list to the output

let mymatrix:number[] = [];
let value:number;

for (let i=0;i<4;i++){
    for (let j=0;j<4;j++){
        if (i==j) {
            value = 1;
        }
        else {
            value = 0;
        }
        mymatrix.push(value);
    }
}
console.log(mymatrix);