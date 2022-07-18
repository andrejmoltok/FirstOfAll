import {Aircraft} from "./aircraft";
import {F16} from './f16';
import {F35} from './f35';

class Carrier {

    protected _aircrafts : Aircraft[];
    protected _initAmmo:number;
    protected _HP:number;
    protected _ammoStorage:number;
    

    constructor(initAmmo:number,HP:number){
        this._aircrafts = [];
        this._initAmmo = initAmmo;
        this._HP = HP;
        this._ammoStorage = 2300;
    }

    public add(aircraft:Aircraft) :any {
        this._aircrafts.push(aircraft);
    }

    public fill() :any {
        //this._aircrafts[0].getMaxAmmo();
        //add up the sum of all aircraft ammo in the aircrafts array

        let maxAmmunition:number = 0;
        for (let i=0; i<=this._aircrafts.length-1; i++){
            maxAmmunition += Array.from(this._aircrafts)[i].getMaxAmmo();
        }
        
        //console.log(maxAmmunition);
        
        if (this._ammoStorage === 0) {
            console.log("The ammunition storage is empty, can't refill aircrafts!");
        }
        // else if (this._ammoStorage === maxAmmunition) {
        //     console.log(Array.from(this._aircrafts).forEach((item) => item.refillAmmo(this._ammoStorage)));
        // }
        else {
            console.log(Array.from(this._aircrafts).forEach((item) => item.refillAmmo(this._ammoStorage)));
        }
     
    }


}

let nimitz = new Carrier(100,300);
let enola = new F35();
let carl = new F16();

enola.fight(carl);

nimitz.add(enola);
nimitz.add(carl);

console.log(nimitz);
console.log(nimitz.fill());
console.log(nimitz);