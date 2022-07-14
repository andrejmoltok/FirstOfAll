import { Person } from "./person";

class Student extends Person {
;
    private _previousOrganization:string;
    private _skippedDays:number = 0;

    constructor(name:string,age:number,gender:string,prevOrg:string) {
        super(name,age,gender)
        this._previousOrganization = prevOrg;
        this._skippedDays = 0;
    }

    public getGoal(): void {
        console.log("My goal is: Be a junior software developer.");
    }

    public skipDays(numberOfDays:number):number{
        return (this._skippedDays += numberOfDays);
    }

    public introduce():void {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + 
        " from " + this._previousOrganization + " who skipped " + this._skippedDays + 
        " from the course already.");
    }
    
}

export {Student}

// let JaneDoe2 = new Student('Jane Doe', 30, 'female', 'The School Of Life');
// console.log(JaneDoe2.skipDays(3));
// JaneDoe2.introduce();
// JaneDoe2.getGoal();
