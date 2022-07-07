'use strict'

import { Pirate } from "./Pirate"

class Ship {

    private _crew:any = [];

    constructor(){
        this._crew = [];
    }

    public fillShip(){
        if (this._crew.length != 114){
            console.log("This ship fills up with 1 Captain and 113 pirate crew.");
            for (let i=0; i<=113; i++){
                this._crew.push(new Pirate);
            }
            console.log("Crew member number:" + this._crew.length);
        }
        else if (this._crew.length == 114){
            console.log("This ship already has 1 Captain and 113 pirate crew");
        }
    }
}

let juggernaught = new Ship();

juggernaught.fillShip();