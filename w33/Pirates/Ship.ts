'use strict'

import { Pirate } from "./Pirate"

class Ship {

    private _crew:any = [];

    constructor(){
        this._crew = [];
    }

    public fillShip(){
        if (this._crew.length != 114){
            console.log("This ship needs 1 Captain and maximum 113 pirate crew.");
            this._crew.push(new Pirate);
            console.log(this._crew);
        }
        else if (this._crew.length == 114){
            console.log("This ship already has 1 Captain and 113 pirate crew");
            
        }
    }

}

let juggernaught = new Ship();

juggernaught.fillShip();