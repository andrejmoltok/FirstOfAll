'use strict'

import {Student} from './Student'

class Teacher {

    public _name: string;

    constructor(name: string){
        this._name = name;
    }

    public giveAnswer(name:string){
        return (this._name + " is answering a question from " + name);
    }

    public teach(student: Student){
       return student.learn(this._name);
    }
    
    // public getName(){
    //     return Student._name;
    // }

}

export {Teacher}