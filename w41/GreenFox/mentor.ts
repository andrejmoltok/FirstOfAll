import { Person } from "./person";

class Mentor extends Person{

    private _level:string;

    constructor(name:string,age:number,gender:string,level:string){
        super(name,age,gender);
        this._level = level;
    }

    public getGoal(): void {
        console.log("My goal is: Educate brilliant junior software developers.");
    }

    public introduce(): void {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + ", " + this._level + " mentor.");        
    }

}

export {Mentor}

// let JD3 = new Mentor('Jane Doe', 30, 'female', 'intermediate');

// JD3.introduce();
// JD3.getGoal();
