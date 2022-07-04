'use strict'

import {Teacher} from './Teacher'

class Student {

    public _name: string;

    constructor(name: string)
    {
        this._name = name;
    }

    public learn(name:string){
       return this._name + " is actually learning from teacher " + name;
    }

    public question(teacher:Teacher){
       return teacher.giveAnswer(this._name);
    }

    // public getName(){
    //     return Teacher._name;
    // }
}

export {Student}