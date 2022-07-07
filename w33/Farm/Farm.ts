'use strict'

import {Animal} from './Animal'

class Farm {

    private _listOfAnimals:any = [];
    private _limit:number;

    constructor(limit:number){
        this._listOfAnimals = [];
        this._limit = limit;
    }

    public breed():any{
        if (this._listOfAnimals.length !== this._limit){
            this._listOfAnimals.push(new Animal());
            console.log("New animal arrived to the Farm!");
            console.log(this._listOfAnimals);
        }
        else if (this._listOfAnimals.length == this._limit)
        {
            console.log("No more space available on the Farm!");
        }
    }

    public sell(){
        for (let i=0; i<=this._listOfAnimals.length; i++){
            if ((Math.min(50,this._listOfAnimals[i]._hunger))){
                this._listOfAnimals.splice(i,1);
                console.log("Animal sold!");
            }
        }
        console.log(this._listOfAnimals);
    }

    public feed(){
        this._listOfAnimals[Math.floor(Math.random() * (this._listOfAnimals.length))].eat();
        console.log(this._listOfAnimals);
    }

    public checkFarm():any{
        console.log("The Farm has " + this._listOfAnimals.length + ((this._listOfAnimals.length==1)? " animal." :  " animals."));
        console.log("The farms animal limit is " + this._limit);
    }

}

let mcdonald = new Farm(5);

mcdonald.breed();
mcdonald.breed();
mcdonald.breed();
mcdonald.breed();
mcdonald.breed();
mcdonald.breed();
mcdonald.breed();
mcdonald.breed();

mcdonald.checkFarm();

mcdonald.feed();
mcdonald.feed();
mcdonald.feed();
mcdonald.feed();
mcdonald.feed();

mcdonald.sell();

mcdonald.checkFarm();