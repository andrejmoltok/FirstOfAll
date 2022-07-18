import {F35} from './f35';
import {F16} from './f16';

class Aircraft {

    protected _type:string;
    protected _initAmmo:number = 0;
    protected _maxAmmo:number;
    protected _baseDamage:number;
    protected _isPriority:boolean;
    protected _totalDmg:number;
    
    constructor(type:string,maxAmmo:number,baseDamage:number,isPriority:boolean){
        this._type = type;
        this._maxAmmo = maxAmmo;
        this._baseDamage = baseDamage;
        this._isPriority = isPriority;
        this._totalDmg = this._maxAmmo * this._baseDamage;
    }

    public fight():any{
        this._maxAmmo = 0;
        //(this._totalDmg > aircraft._totalDmg) ? 
        //    console.log(this._type + " made a damage of " + this._totalDmg + " and won!") :
        //        console.log(aircraft._type + " made a damage of " + aircraft._totalDmg + " and won!");
        return this._totalDmg;
    }

    public getStatus(): any {
       console.log("Type " + this._type + ", Ammo: " + this._maxAmmo + ", Base Damage: " + this._baseDamage +
       ", All Damage: " + this._totalDmg);
    }

    public getType(): string {
        return this._type;
    }

    public isPriority(): boolean {
        return this._isPriority;
    }

    public refillAmmo(amount:number): any {
        var remainder:number = amount - this._maxAmmo;;
        if (this.isPriority() === true){
            this.setAmmo();
            console.log("Priority refilled first.");
        }
        else {
            this.setAmmo();
            console.log("Non-priority refilled last.");
        }
        return remainder;
    }

    public setAmmo():any{
        const base = [8, 12];
        if (this._type === 'F16'){
            this._maxAmmo = base[0];
        }
        else
        {
            this._maxAmmo = base[1];
        }
    }

    public getMaxAmmo():number{
        return this._maxAmmo;
    }

    public getTotalDmg():any{
        return this._totalDmg;
    }

}



export {Aircraft}