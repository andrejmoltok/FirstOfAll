'use strict'

class Pirate {

    private _intoxication:number;
    private _isAlive:boolean = false;
    public call:number = 0;

    constructor(){
        this._intoxication = 0;
        this.call = 0;
        this._isAlive = true;
    }

    public drinkSomeRum(){
        this.call++;
        return this._intoxication++;
    }
    
    public howsItGoingMate(){
        if (this.call < 4){
            console.log("Pour me anudder!");
            this.drinkSomeRum();
        }
        else
        {
            while (this._intoxication > 0){
                this._intoxication--;
            }
            console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
        }
    }

    public brawl(pirate:Pirate){
        let chance:number = (Math.floor(Math.random() * 3)+1);
        if (this._isAlive){
            //rock,paper,scissors => 1/3 chance
            if (chance == 1){
                console.log("Defender: " + chance + "/3");
                this.die();
                // this._isAlive = false;
            }
            else if (chance == 2){
                console.log("Offender: " + chance + "/3");
                pirate.die();
                // this._isAlive = false;
            }
            else if (chance == 3){
                console.log("They both passed out! " + chance + "/3");
                this.die();
                pirate.die();
                // this._isAlive = false;
            }
        }
    }

    public die(){
        this._isAlive = false;
        console.log("He's dead!");
    }
}

let BlackJack = new Pirate();
let Will = new Pirate();

BlackJack.drinkSomeRum();
BlackJack.drinkSomeRum();
BlackJack.drinkSomeRum();
// BlackJack.drinkSomeRum();
// BlackJack.drinkSomeRum();

BlackJack.howsItGoingMate();

BlackJack.brawl(Will);