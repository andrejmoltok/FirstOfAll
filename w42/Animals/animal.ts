export abstract class Animal {

    protected _name:string;
    protected _age:number;

    constructor(name:string,age?:number){
        this._name = name;
        this._age?? 0;
    }

    public abstract getName():string;

    public abstract breed():string;

    public abstract breath():string;

    public abstract blood():string;

    public abstract move():string;

}