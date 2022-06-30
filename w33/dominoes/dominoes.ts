import {Domino} from "./domino";


function initializeDominoes(): Domino[] {
    let dominoes:any[] = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

//sortirozo funkciot kell irni
//pl.:[5,2],[2,4],[4,6],[6,7],[7,1],[1,5]

function sorter(input:any){
    for (let i=0; i<=input.length-1; i++){
            
    }
}

let dominoes = initializeDominoes();
// console.log(dominoes.pop()?.read(1));
// console.log(dominoes.pop()?.read(0));

//sorter(dominoes);

/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

//print(dominoes);

console.log((dominoes)[0].read(0));
console.log((dominoes)[0].read(1));
// console.log((dominoes)[1]);
// console.log((dominoes)[3]);
// console.log((dominoes)[5]);
// console.log((dominoes)[2]);