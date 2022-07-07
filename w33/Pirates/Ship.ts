'use strict'

import { Pirate } from "./Pirate"

class Ship {

    private _crew:any = [];

    constructor(){
        this._crew = [];
    }

    //automatically fill new Ship with captain and crew of total 114 pirates
    public fillShip(){
        if (this._crew.length != 114){
            console.log("New ship fills up with 1 Captain and 113 pirate crew.");
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