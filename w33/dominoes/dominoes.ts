import {Domino} from "./domino";


function initializeDominoes(): Domino[] {
    let dominoes = [];
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
function sorter(input:any):void{
    //     //open domino set and read values
    //     //arrange dominoes based on equal values
    //     //if One's last equals to Second's first
    //     //put them next to eachother
    let temp = new Array();
    for (let i=0; i<=input.length-1; i++){
        temp[i] = "";
        if (input[i].read(1) = input[i+1].read(0)) {
            temp[i] += input[i];
            }
    }
    for (let x=0; x<=temp.length-1; x++){
        console.log(temp[x]);
    }
    }


let dominoes = initializeDominoes();

/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */
//find a match for first item's last value equals first value of second item

//print(dominoes);

//console.log(dominoes.map((v,i) => {console.log(v.values)}));

sorter(dominoes); 





//lehetseges sorrend
// console.log((dominoes)[0]);
// console.log((dominoes)[4]);
// console.log((dominoes)[1]);
// console.log((dominoes)[3]);
// console.log((dominoes)[5]);
// console.log((dominoes)[2]);