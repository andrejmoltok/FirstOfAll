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
        this._ammoStorage = this._initAmmo;
    }

    public add(aircraft:Aircraft) :void {
        this._aircrafts.push(aircraft);
    }

    public fill(): void {
        //returns maximum ammunition needed by all aircrafts inside the carrier
        let maxAmmunition:number = 0;
        for (let i=0; i<=this._aircrafts.length-1; i++){
            this._aircrafts[i].refillAmmo(maxAmmunition);
            maxAmmunition += Array.from(this._aircrafts)[i].getMaxAmmo();
        }

        if (this._ammoStorage === 0) {
            console.log("Ammo Storage is empty, cannot refill!"); 
        }
        else {
            this.setAmmoStorage(maxAmmunition);
        }
     
    }

    public setAmmoStorage(amount:number):any{
        return this._ammoStorage = this._ammoStorage - amount;
    }

    public fight(enemyCarrier: Carrier):void{
        let maxDmg:number = 0;
        for (let j=0; j<=this._aircrafts.length-1; j++){
            maxDmg += this._aircrafts[j].getTotalDmg();
            this._aircrafts[j].fight();
        }
        enemyCarrier._HP = enemyCarrier._HP - maxDmg;
        if (maxDmg > enemyCarrier._HP){
            enemyCarrier.setHP();
            console.log("It's dead Jim! :(");
        }
        else if (enemyCarrier._HP === 0)
        {
            console.log("It's dead Jim! :(");
        }
    }

    public setHP():void{
        this._HP = 0;
    }

    public getStatus():void{
        let maxDmg:number = 0;

        for (let k=0; k<=this._aircrafts.length-1; k++){
            maxDmg += this._aircrafts[k].getTotalDmg();
        }

        console.log("HP: " + this._HP + ", Aircraft count: " + this._aircrafts.length + ", Ammo Storage: " 
        + this._ammoStorage + ", Total damage: " + (maxDmg));
        
        for (let m=0; m<=this._aircrafts.length-1; m++) {
            this._aircrafts[m].getStatus();
        }
    }
}

let nimitz = new Carrier(100,1000);
let gordon = new Carrier(100,800);

let enola = new F35();
let carl = new F16();
let genola = new F35();
let darl = new F16();

//enola.fight(carl);

nimitz.add(enola);
nimitz.add(carl);
gordon.add(genola);
gordon.add(darl);

//console.log(nimitz);
//console.log(nimitz.fill());
// console.log(nimitz);
// console.log(gordon);

console.log(nimitz.fight(gordon));
//console.log(gordon.fight(nimitz));

nimitz.getStatus();
gordon.getStatus();