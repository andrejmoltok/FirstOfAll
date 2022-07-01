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

function sorter(arr:any[]){ 
    arr.map((v,i) => {v.values 
    for (let i=0;i<v.values.length;i++){ 
        for (let j=1;j<v.values.length;j++){
            let empty:number[] = [];       
            if (v[i][j]=v[i+1][i]){//[5,2][1]==[2,4][0]
                empty = v[i][j];
                v[i][j] = v[i+1][i];
                v[i+1][i] = empty;
            }
        }
    }   
    })   
}


let dominoes = initializeDominoes();

/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */
//find a match for first item's last value equals first value of second item

//print(dominoes);

//console.log(dominoes.map((v,i) => {console.log(v.values)}));

//console.log(Array.from(Object.values(dominoes)).sort(function(a,b){return(b-a)}));

sorter(dominoes);





//lehetseges sorrend
// console.log((dominoes)[0]);
// console.log((dominoes)[4]);
// console.log((dominoes)[1]);
// console.log((dominoes)[3]);
// console.log((dominoes)[5]);
// console.log((dominoes)[2]);