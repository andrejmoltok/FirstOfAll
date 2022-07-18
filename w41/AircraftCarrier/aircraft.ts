import {F35} from './f35';
import {F16} from './f16';

class Aircraft {

    protected _type:string;
    protected _initAmmo:number = 0;
    protected _maxAmmo:number;
    protected _currAmmo:number;
    protected _baseDamage:number;
    protected _isPriority:boolean;
    private _total:number;
    
    constructor(type:string,maxAmmo:number,baseDamage:number,isPriority:boolean){
        this._type = type;
        this._maxAmmo = maxAmmo;
        this._currAmmo = 0;
        this._baseDamage = baseDamage;
        this._isPriority = isPriority;
        this._total = this._maxAmmo * this._baseDamage;
    }

    public shoot(aircraft:Aircraft):any{
        if (this._maxAmmo === 0 && aircraft._maxAmmo === 0){
            console.log("Fight is over!");
            
        }
        else if (this._maxAmmo> 0 && aircraft._maxAmmo > 0){
            this._currAmmo = this._maxAmmo - 1;
            this.setAmmo();
            aircraft.setAmmo();
            this.shoot(aircraft);
        }
    }

    public fight(aircraft:Aircraft):any{
        this.shoot(aircraft);
        (this._total > aircraft._total) ? 
        console.log(this._type + " made a damage of " + this._total + " and won!") :
        console.log(aircraft._type + " made a damage of " + aircraft._total + " and won!"); 
    }

    public getStatus(): any {
       console.log("Type " + this._type + ", Ammo: " + this._maxAmmo + ", Base Damage: " + this._baseDamage +
       ", All Damage: " + this._total);
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
            console.log(this._maxAmmo);
            
        }
        else {
            this.setAmmo();
            console.log("Non-priority refilled last.");
            console.log(this._maxAmmo);
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
        //return this._maxAmmo;
    }

    public getMaxAmmo():number{
        return this._maxAmmo;
    }
}



export {Aircraft}