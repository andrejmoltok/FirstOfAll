'use strict'

import {Student} from './Student'

class Teacher {

    public static _name: string;

    constructor(name: string){
        Teacher._name = name;
    }

    public giveAnswer(){
        return (Teacher._name + " is answering a question from " + Student._name);
    }

    public teach(student: Student){
       return student.learn();
    }
    
    // public getName(){
    //     return Student._name;
    // }

}

export {Teacher}