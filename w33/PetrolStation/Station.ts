'use strict'

import { Car } from './Car'

class Station {

    public _name:string;
    public _gasAmount:number;
    
    constructor(name:string, gasAmount:number,){
        this._name = name;
        this._gasAmount = gasAmount;
        
    }

    public refill(car :Car){
        //console.log(car.getGasAmount());
        
        if (car._gasAmount == car._capacity){
            //kiszamolja a jelenlegi benzin mennyuseget
            console.log("Tank is running low...",car._gasAmount = car._gasAmount - car._capacity);
            //kiirja az uj Car class nevet es hol tankoljon
            console.log(car._name + "'s tank is empty. Refill at Station " + this._name);
            //random uzenet
            return "Your tank is empty.";
        }
        else //(car._gasAmount == 0)
        {   //kiszamolja hogy mennyit lehet bele tankolni
            console.log("Refilling...", car._gasAmount = car._gasAmount + car._capacity);
            //kiirja az uj Car class nevet es hol tankolt
            console.log(car._name + "'s tank is refilled at Station " + this._name);
            //random uzenet
            return "Refill complete!";
        }
    }
    
}

export {Station}