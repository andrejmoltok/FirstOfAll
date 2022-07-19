export abstract class Instrument {

    protected _name:string;

    constructor(name:string){
        this._name = name;
    }

    public abstract play():string;

}