'use strict'

import {Teacher} from './Teacher'

class Student {

    public static _name:string;

    constructor(name:string)
    {
        Student._name = name;
    }

    public learn(){
       return Student._name + " is actually learning from teacher " + this.getName();
    }

    public question(teacher:Teacher){
       return teacher.giveAnswer();
    }

    public getName(){
        return Teacher._name;
    }
}

export {Student}