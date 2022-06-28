'use strict'

class Animal {

    private _hunger: number;
    private _thirst: number;

    constructor(){
        this._hunger = 50;
        this._thirst = 50;
    }

    public eat(){
        this._hunger --;
        return console.log('Animal has eaten.')
    }

    public drink(){
        this._thirst --;
        return console.log('Animal drank well.')
    }

    public play(){
        this._hunger ++;
        this._thirst ++;
        return console.log('Animal played well.')
    }
}

let kutya = new Animal();
let cica = new Animal();

console.log(kutya);
console.log(cica);

kutya.eat();
kutya.drink();
kutya.drink();
kutya.play();