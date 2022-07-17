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

    public shoot(aircraft:Aircraft):any{
        if (this._maxAmmo>= 0 && aircraft._maxAmmo >= 0){
            this.setAmmo(this._maxAmmo--);
            aircraft.setAmmo(aircraft._maxAmmo--);
            this.shoot(aircraft);
        }
    }

    
    public fight(aircraft:Aircraft):any{
        let chance:number = (Math.floor(Math.random() * 2)+1);
            if (chance === 1) {
                this.shoot(aircraft);
                console.log(this._type + " made a damage of " + (this._maxAmmo * this._baseDamage) + " and won!");
            }
            else if (chance === 2) {
                aircraft.shoot(this);
                console.log(aircraft._type + " made a damage of " + (aircraft._maxAmmo * aircraft._baseDamage) + " and won!");
            }
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
        if (this.isPriority() === true){
            if (amount > this._maxAmmo)
            this.setAmmo(this._maxAmmo);
            remainder = amount - this._maxAmmo;
        }
        else {
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