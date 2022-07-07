'use strict'

class Pirate {

    private _drunk:number;
    private _isAlive:boolean;

    constructor(){
        this._drunk = 0;
        this._isAlive = true;
    }

    //return the drunkenness or intoxication count of pirates
    public drinkSomeRum(){
        return this._drunk++;
    }
    
    //depending on this._drunk count return different answers
    //and lower intoxication (pirate passes out)
    public howsItGoingMate(){
        if (this._drunk < 4){
            console.log("Pour me anudder!");
        }
        else
        {
            while (this._drunk > 0){
                this._drunk--;
            }
            console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
        }
    }

    //pirates are fighting with a chances of 1/3 of staying alive or dying, or both pass out
    public brawl(pirate:Pirate){
        let chance:number = (Math.floor(Math.random() * 3)+1);
        if (this._isAlive){
            //death chance => 1/3 chance
            if (chance == 1){
                console.log("Defender: " + chance + "/3");
                this.die();
            }
            else if (chance == 2){
                console.log("Offender: " + chance + "/3");
                pirate.die();
            }
            else if (chance == 3){
                console.log("They both passed out! " + chance + "/3");
                this.die();
                pirate.die();
            }
        }
    }

    //die function returns "He's dead!", sets this._isAlive t0 false
    public die(){
        this._isAlive = false;
        console.log("He's dead!");
    }
}

export {Pirate}

let BlackJack = new Pirate();
let Will = new Pirate();

console.log(BlackJack);
console.log(Will);


BlackJack.drinkSomeRum();
BlackJack.drinkSomeRum();
BlackJack.drinkSomeRum();
BlackJack.drinkSomeRum();
BlackJack.drinkSomeRum();
BlackJack.drinkSomeRum();
BlackJack.drinkSomeRum();
Will.drinkSomeRum();
Will.drinkSomeRum();

BlackJack.howsItGoingMate();
Will.howsItGoingMate();

BlackJack.brawl(Will);
console.log(BlackJack);
console.log(Will);