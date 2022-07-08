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
        // K[0,1,2,3,4] - J[0,1,2,3,4]
        // K[0]aJ[0]=true => K[4]
        // K[0]aJ[0]=false => J[4]
        //
        // var y:number = this._listOfShips.length-1;
        // var z:number = otherArmada._listOfShips.length-1;
        // while (y > 0 || z > 0){
        //     if (this._listOfShips[y].battle(otherArmada._listOfShips[z]) == true){
        //         otherArmada._listOfShips.splice(z,1);
        //         z--;
        //         if (this._listOfShips.length == 1 && otherArmada._listOfShips.length == 0){
        //             console.log("Defender Armada won: " + this._listOfShips.length);
        //             break;
        //         }
        //     } else if (this._listOfShips[y].battle(otherArmada._listOfShips[z]) == false){
        //         this._listOfShips.splice(y,1);
        //         y--;
        //         if (otherArmada._listOfShips.length == 1 && this._listOfShips.length == 0){
        //             console.log("Opponent Armada won: " + otherArmada._listOfShips.length);
        //             break;
        //         }
        //     }
        // }
        for (let k=0; k<=this._listOfShips.length-1; k++){
            //if k=0 score > score2 => k=0 battle otherArmada._listOfShips[k+1]
            if (this._listOfShips[k].battle(otherArmada._listOfShips[k]) == true){
                otherArmada._listOfShips.splice(k,1);
                console.log("Ships in defender Armada: " + otherArmada._listOfShips.length);
                if (this._listOfShips.length == 1 && otherArmada._listOfShips.length == 0){
                    console.log("Defender Armada won: " + this._listOfShips.length);
                    break;
                }
                console.log(this._listOfShips[k].battle(otherArmada._listOfShips[k+1]));
                //console.log("Ships remaining:" + this._listOfShips.length);
                 
            }
            else if (this._listOfShips[k].battle(otherArmada._listOfShips[k]) == false)
            {
                this._listOfShips.splice(k,1);
                console.log("Ships in opponent Armada: " + this._listOfShips.length);
                if (otherArmada._listOfShips.length == 1 && this._listOfShips.length == 0){
                    console.log("Opponent Armada won: " + otherArmada._listOfShips.length);
                    break;
                }
                console.log(otherArmada._listOfShips[k+1].battle(this._listOfShips[k]));
                //console.log("Ships remaining:" + otherArmada._listOfShips.length);
                
            }
        }
    }
}


let spanish = new Armada();
let english = new Armada();

spanish.fillArmada(3);
english.fillArmada(3);
spanish.war(english);