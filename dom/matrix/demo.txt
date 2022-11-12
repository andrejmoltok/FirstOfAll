// let mx = [[1,2],
//           [4,5],
//           [7,8],
//           [10,11]]; //10,7,4,1;11,8,5,2

// let mx2 = [[1,2,3],
//            [4,5,6]];

// function mirrorVert(matrix) {
//     return matrix.map((v,i,a) => matrix[matrix.length - 1 - i].map((el,idx,arr) => arr[idx]));
// }

// function mirrorHoriz(matrix) {
//     return matrix.map((v,i,a) => a[i].map((el,idx,arr) => arr[arr.length - 1 - idx]));
// }

// function mirrorVertHoriz(matrix) {
//     return matrix.map((v,i,a) => a[a.length - 1 - i].map((el,idx,arr) => arr[arr.length - 1 - idx]));
// }

// function rotateRight(matrix) {
//     return [...Array(matrix[0].length)].map((v,i,a) => matrix.map((el,idx,arr) => arr[arr.length - 1 - idx][i]));
// }

// function mirrorRotaRight(matrix) {
//     return [...Array(matrix[0].length)].map((v,i,a) => matrix.map((el,idx,arr) => arr[idx][i]));
// }

// function test(matrix) {
//     return [...Array(1)].map((v,i,a) => matrix.map((el,idx,arr) => arr.map((val,id,ar) => ar[id][ar.length - 1 - idx])));
// }


// console.log(mirrorVert(mx));
// console.log(mirrorHoriz(mx));
// console.log(mirrorVertHoriz(mx));
// console.log(rotateRight(mx));
// console.log(mirrorRotaRight(mx));
//console.log(test(mx));