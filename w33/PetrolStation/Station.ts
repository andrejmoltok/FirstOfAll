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
            //random uzenet
            console.log("Your tank is empty.");
            //kiirja az uj Car class nevet es hol tankoljon
            return (car._name + "'s tank is empty. Refill at Station " + this._name);
        }
        else //(car._gasAmount == 0)
        {   //kiszamolja hogy mennyit lehet bele tankolni
            console.log("Refilling with ", car._gasAmount = car._gasAmount + car._capacity, " to the capacity of " + car._capacity);
            //random uzenet
            console.log("Refill complete!");
            //kiirja az uj Car class nevet es hol tankolt
            return (car._name + "'s tank was refilled at Station " + this._name);
        }
    }
    
}

export {Station}