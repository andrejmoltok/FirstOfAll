import { StringedInstrument } from "./stringedinstrument";

export class BassGuitar extends StringedInstrument {
    
    constructor(numberOfStrings?:number){
        super('Bass Guitar','Duum-duum-duum',numberOfStrings??4);
    }

}