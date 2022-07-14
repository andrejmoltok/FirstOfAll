import {Person} from './person';
import {Sponsor} from './sponsor';
import {Student} from './student';
import {Mentor} from './mentor';


class Cohort {

    private _name:string;
    private _students: Student[];
    private _mentors: Mentor[];

    constructor(name:string){
        this._name = name;
        this._students = [];
        this._mentors = [];
    }

    public addStudent(student:Student):any{
        this._students.push(student);
    }

    public addMentor(mentor:Mentor):any{
        this._mentors.push(mentor);
    }

    public info():any{
        console.log("The " + this._name + " cohort has " + this._students.length + " students and "
        + this._mentors.length + " mentors.");
    }
}

export {Cohort}