import { Instrument } from "./instrument";

export abstract class StringedInstrument extends Instrument {

    protected numberOfStrings:number;
    protected effect:string;

    constructor(name:string,effect:string,numberOfStrings:number){
        super(name);
        this.effect = effect;
        this.numberOfStrings = numberOfStrings;
    }

    public sound():string{
        return this.effect;
    }

    public play():void{
        console.log(`${this._name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }
}