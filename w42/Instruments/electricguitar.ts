import { StringedInstrument } from "./stringedinstrument";

export class ElectricGuitar extends StringedInstrument {
    
    constructor(numberOfStrings?:number){
        super('Electric Guitar','Thwang',numberOfStrings??6);
    }

}