'use strict'

import {Station} from './Station'

class Car extends Station {

    public _capacity:number;
    public _name:string;

    constructor(name:string, gasAmount:number, capacity:number){
        super(gasAmount,name);
        this._name = name;
        this._gasAmount = 0;        
        this._capacity = 100;
    }

    public getname(){
        return this._name;
    }

}

export {Car}