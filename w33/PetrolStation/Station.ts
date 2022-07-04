'use strict'

import { Car } from './Car'

class Station {

    public _gasAmount:number;
    public _name:string;

    constructor(gasAmount:number, name:string){
        this._gasAmount = gasAmount;
        this._name = name;
    }

    public refill(car :Car):void{
        if (this._gasAmount == 100){
            this._gasAmount = this._gasAmount - 100;
            console.log(car.getname() + "'s tank is empty. Refill at Station " + this._name);
            
        }
        else
        {
            this._gasAmount += 100;
            console.log(car.getname() + "'s tank is refilled at Station " + this._name);
            
        }
        return;
    }
    
}

export {Station}