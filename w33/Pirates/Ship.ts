'use strict'

import { Pirate } from "./Pirate"

class Ship {

    private _crew:any = [];

    constructor(){
        this._crew = [];
    }

    //automatically fill new Ship with captain and crew of total 114 pirates
    //CAPTAIN of every new Ship has the index of 0
    public fillShip(){
        let cpt = new Pirate();
        if (this._crew.length != 114){
            console.log("New ship fills up with 1 Captain and 113 pirate crew.");
            this._crew.push(cpt);
            for (let i=0; i<=112; i++){
                this._crew.push(new Pirate);
            }
            console.log("Crew member number:" + this._crew.length);
            // console.log(this._crew.indexOf(cpt));
        }
        else if (this._crew.length == 113){
            console.log("This ship already full pirate crew");
        }
    }

    //n - number of the crew member from 0 to 114
    public crew(n:number){
        console.log("How much Rum did he drink? " + this._crew[n]._drunk);
        console.log("Is this pirate alive? " + ((this._crew[n]._isAlive)? "Yes" : "He's dead"));
    }

    //battle method for battling other ships
    public battle(otherShip: Ship):any{
        //battle between the 2 ships crew members
        for (let j=0; j<=this._crew.length-1; j++){
            this._crew[j].brawl(otherShip._crew[j]);
        }

        //calculate winning score (pirates alive - rum consumed by Cpt.)
        let score:number;
        let alive:number = 0;
        for (let i=0; i<=this._crew.length-1; i++){
           if (this._crew[i]._isAlive){
                alive++;
           }
        }

        score = alive + this._crew[0]._drunk;
        let score2:number;
        let alive2:number = 0;
        for (let k=0; k<=this._crew.length-1; k++){
           if (otherShip._crew[k]._isAlive){
                alive2++;
           }
        }
        score2 = alive2 + otherShip._crew[0]._drunk;
        
        //console.log(score);
        //console.log(score2);

        if (score > score2)
        {
            console.log("First ship won by " + score);
            console.log("Second ship lost by " + score2);
            // console.log(this._crew.forEach((elem:any) => elem._drunk += (Math.floor(Math.random() * 10))));
            // console.log(this._crew.forEach((elem:any) => console.log(elem._drunk)));
            for (let x=0; x<=this._crew.length-1; x++){
                if (this._crew[x]._isAlive == true){
                    this._crew[x]._drunk += (Math.floor(Math.random() * 10)+1);
                    console.log(this._crew[x]);
                }
                //logold ki azokat a kalozokat akik kidoltek
                // if (this._crew[x]._isAlive == false){
                // console.log(this._crew[x]._isAlive);
                // }
            }
        }
        else
        {
            console.log("Second ship won by " + score2);
            console.log("First ship lost by " + score);
            for (let y=0; y<=otherShip._crew.length-1; y++){
                if (otherShip._crew[y]._isAlive == true){
                    otherShip._crew[y]._drunk += (Math.floor(Math.random() * 10)+1);
                    console.log(otherShip._crew[y]);
                }
                //logold ki azokat a kalozokat akik kidoltek
                // if (otherShip._crew[y]._isAlive == false){
                //     console.log(otherShip._crew[y]._isAlive);
                // }
            }
        }
    }
}

let juggernaught = new Ship();
let octopus = new Ship();

octopus.fillShip();
juggernaught.fillShip();
juggernaught.crew(5);
juggernaught.battle(octopus);