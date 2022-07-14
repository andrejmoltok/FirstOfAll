class Person {

    public _name:string;
    public _age:number;
    public _gender:string;
        
    constructor(name:string,age:number,gender:string){
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    public introduce():void {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender);
    }


    public getGoal():void {
        console.log("My goal is: Live for the moment!");
    }
}

// let JaneDoe = new Person('Jane Doe', 30, 'female');

// JaneDoe.introduce();
// JaneDoe.getGoal();


export {Person}