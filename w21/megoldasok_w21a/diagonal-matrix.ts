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

let matrix: number[][] = [];
let value:number;
let dim = 4;

for (let i=0; i<dim; i++){
    let mat1: number[] = [];
    for (let j=0; j<dim; j++){
        if (i==j) {
            value = 1;
        }
        else {
            value = 0;
        }
        mat1.push(value);
    }
    matrix.push(mat1);
}

console.log(matrix);
console.table(matrix);