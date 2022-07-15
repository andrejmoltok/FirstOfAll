import {F35} from './f35';
import {F16} from './f16';

class Aircraft {

    protected _type:string;
    protected _initAmmo:number = 0;
    protected _maxAmmo:number;
    protected _baseDamage:number;
    protected _isPriority:boolean;
    
    constructor(type:string,maxAmmo:number,baseDamage:number,isPriority:boolean){
        this._type = type;
        this._maxAmmo = maxAmmo;
        this._baseDamage = baseDamage;
        this._isPriority = isPriority;
    }

    public fight(aircraft:Aircraft):any{
        for (let i=0; i<=){}
    }

    public getStatus(): any {
       console.log("Type " + this._type + ", Ammo: " + this._maxAmmo + ", Base Damage: " + this._baseDamage +
       ", All Damage: " + (this._baseDamage * this._maxAmmo));
    }

    public getType(): string {
        return this._type;
    }

    public isPriority(): boolean {
        return this._isPriority;
    }

    public refillAmmo(amount:number): number{
        var remainder:number = 0;
        if (this._type === 'F16'){
            if (amount > this._maxAmmo)
            this.setAmmo(this._maxAmmo);
            remainder = amount - this._maxAmmo;
        }
        else if (this._type === 'F35'){
            if (amount > this._maxAmmo)
            this.setAmmo(this._maxAmmo);
            remainder = amount - this._maxAmmo;
        }
        return remainder;
    }

    public setAmmo(amount:number):number{
        return (this._initAmmo + amount);
    }
}



export {Aircraft}