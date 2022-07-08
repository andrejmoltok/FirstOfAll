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
        var k:number = this._listOfShips.length-1;
        var n:number = otherArmada._listOfShips.length-1;
        while (k >= 1 || n >= 1){
            if (this._listOfShips[k].battle(otherArmada._listOfShips[n]) == true){
                otherArmada._listOfShips.splice(n,1);
            } else if (this._listOfShips[k].battle(otherArmada._listOfShips[n]) == false){
                this._listOfShips.splice(k,1);
            }
            k--;
            n--;
            console.log(this._listOfShips.length);
            console.log(otherArmada._listOfShips.length);
            
        }   
        // for (let k=0; k<=this._listOfShips.length-1; k++){
        //     //if k=0 score > score2 => k=0 battle otherArmada._listOfShips[k+1]
        //     if (this._listOfShips[k].battle(otherArmada._listOfShips[k]) == true){
        //         otherArmada._listOfShips.splice(k,1);
        //         console.log("Ships in defender Armada: " + otherArmada._listOfShips.length);
                
        //         //console.log(this._listOfShips[k].battle(otherArmada._listOfShips[k+1]));
        //         //console.log("Ships remaining:" + this._listOfShips.length);
                
        //     }
        //     else if (this._listOfShips[k].battle(otherArmada._listOfShips[k+1]) == false)
        //     {
        //         this._listOfShips.splice(k,1);
        //         console.log("Ships in opponent Armada: " + this._listOfShips.length);
                
        //         //console.log(otherArmada._listOfShips[k+1].battle(this._listOfShips[k+1]));
        //         //console.log("Ships remaining:" + otherArmada._listOfShips.length);
                
        //     }
        //}
        if (this._listOfShips.length == 1){
            console.log(this._listOfShips + " is the winner Armada.");
        }
        else if (otherArmada._listOfShips.length == 1){
            console.log(otherArmada._listOfShips + " is the winner Armada.");
            
        }
        
       // console.log(this._listOfShips);  
    }
}

let spanish = new Armada();
let english = new Armada();

spanish.fillArmada(5);
english.fillArmada(5);
spanish.war(english);