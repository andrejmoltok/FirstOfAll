import { Person } from "./person";

class Sponsor extends Person{

    private _company:string;
    private _hiredStudents:number;

    constructor(name:string,age:number,gender:string,company:string){
        super(name,age,gender);
        this._company = company;
        this._hiredStudents = 0;
    }

    public introduce(): void {
       console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + 
       " who represents " + this._company + " and hired " + this._hiredStudents + " students so far.");
    }

    public getGoal(): void {
        console.log("My goal is: Hire brilliant junior software developers.");
    }

    public hire(): number {
        return this._hiredStudents++;
    }
}

export {Sponsor}

// let JD4 = new Sponsor('Jane Doe',30,'female','Google');

// JD4.introduce();
// JD4.hire();
// JD4.introduce();