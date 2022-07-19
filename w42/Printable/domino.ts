import { Printable } from "./printable";

export class Domino implements Printable {

    protected _values:number[];

    constructor(valueA:number,valueB:number){
        this._values = [valueA,valueB];
    }

    public printAllFields(){
        console.log(`Domino A side ${this._values[0]} | B side ${this._values[1]}`);
    }

}