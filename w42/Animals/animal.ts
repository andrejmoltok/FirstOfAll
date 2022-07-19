export abstract class Animal {

    _name?:string;
    _age?:number;

    constructor(name?:string,age?:number){
        this._name = name;
        this._age = age;
    }

    public abstract getName():string;

    public abstract breed():string;

    public abstract breath():string;

    public abstract blood():string;

    public abstract move():string;

}