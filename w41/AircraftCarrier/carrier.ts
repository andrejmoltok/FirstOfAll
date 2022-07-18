import { Aircraft } from "./aircraft";
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

}

let nimitz = new Carrier(100,300);
let enola = new F35();
let carl = new F16();

nimitz.add(enola);
nimitz.add(carl);

console.log(nimitz);
