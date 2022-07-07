'use strict'

import { Pirate } from "./Pirate"
import { Ship } from "./Ship"

class Armada {

    private _listOfShips:any = [];

    constructor(){
        this._listOfShips = [];
    }

    //fill Armada with a given number of Ships
    public fillArmada(numOfShips:number){
        for (let i=0; i<=numOfShips-1; i++){
            //push (new Ship) into _listOfShips array
            this._listOfShips.push(new Ship);
            //fillShip() every Ship with cpt. and crew
            this._listOfShips[i].fillShip();
        }
        console.log(this._listOfShips.length);
    }

    public war(otherArmada: Armada):any{
        // for (let k=0; k<=this._listOfShips.length-1; k++){
        //     //if k=0 score > score2 => k=0 battle otherArmada._listOfShips[k+1]
        //     if (this._listOfShips[k].battle(otherArmada._listOfShips[k]) == true){
        //         console.log(this._listOfShips[k].battle(otherArmada._listOfShips[k+1]));
        //     }
        //     else
        //     {
        //         console.log(this._listOfShips[k+1].battle(otherArmada._listOfShips[k]));
        //     }
        // }
       // console.log(this._listOfShips);  
    }
}

let spanish = new Armada();
let english = new Armada();

spanish.fillArmada(25);
english.fillArmada(25);
spanish.war(english);