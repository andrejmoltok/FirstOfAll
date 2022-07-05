'use strict'

import {Sharpie} from './Sharpie'

class SharpieSet {

    private _listofSharpies: Sharpie[];

    constructor(){
        this._listofSharpies = [];
    }

    public add(sharpie: Sharpie):void{
        this._listofSharpies.push(sharpie);
    }

    public countUsable():number{        
        let count:number = 0;
        for (let i=0; i<=this._listofSharpies.length-1; i++){
        let ertek:any = (Array.from(Object.values(Array.from(Object.values(col)).flat(1)[i]))[2]);
            if (Number(ertek) > 0){
                count++;
            }
        }
        return count;
    }

    public removeTrash():void{
        //.splice(idx,elemcount,string)        
        for (let k=0; k<=this._listofSharpies.length-1; k++){
        let ertek:any = (Array.from(Object.values(Array.from(Object.values(col)).flat(1)[k]))[2]);
            if (Number(ertek) == 0){
                this._listofSharpies.splice(k,1);
            }
        }
    }
}

let red = new Sharpie("red",3);
let blue = new Sharpie("blue",5);
let green = new Sharpie("green",4);

let col = new SharpieSet;

col.add(red);
col.add(blue);
col.add(green);

console.log(col);

for (let j=0; j<10; j+=1){
    console.log(red.use());//using only red Sharpie
    }

console.log(col);

console.log('Usable Sharpies: ',col.countUsable());//count the sharpies which have ink inside

col.removeTrash();//delete empty sharpie

console.log(col);


// let inkA_kulcs = Array.from(Object.keys(Array.from(Object.values(col)).flat(1)[0]))[2];
// let inkA_ertek = Array.from(Object.values(Array.from(Object.values(col)).flat(1)[0]))[2];
// console.log(inkA_kulcs);
// console.log(typeof inkA_ertek);
