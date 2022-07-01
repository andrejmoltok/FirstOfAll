import {Domino} from "./domino";


function initializeDominoes(): Domino[] {
    let dominoes: any = [];
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

//pl.:[5,2],[2,4],[4,6],[6,7],[7,1],[1,5]

function sorter(arr: Domino[]){
    let tempDom: Number[][] = [];
    for (let i: number = 0; i < arr.length; i++) {
        tempDom.push(arr[i].values);
    }
    let temp: Number[][] = [];
    for (let i=0; i<tempDom.length; i++){    
        for (let j=1; j<tempDom.length; j++){     
            if (tempDom[i][1] == tempDom[j][0]){
                let empty = tempDom[j];
                    tempDom[j] = tempDom[i+1];
                    tempDom[i+1] = empty;
                    temp.push(tempDom[j]);
            }   
        }
    }
    // console.log("Snake dominoes: ",tempDom);
    return tempDom;
}

let dominoes = initializeDominoes();

/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */


console.log("Orignial: ", dominoes);

console.log("Snake dominoes: ",sorter(dominoes));