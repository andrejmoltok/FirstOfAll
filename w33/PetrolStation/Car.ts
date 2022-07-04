'use strict'

import {Station} from './Station'

class Car {

    public _name:string;
    public _gasAmount:number;
    public _capacity:number;  
    
    constructor(name:string, gasAmount:number, capacity:number){
        this._name = name;
        this._gasAmount = 0;        
        this._capacity = 100;
    }

}

export {Car}