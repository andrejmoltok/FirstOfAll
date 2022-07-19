import {Block} from './block';

class Glowstone extends Block {

    constructor() {
        super('glowstone','white',300,false);
    }

}

export {Glowstone}

let glowy = new Glowstone();
console.log(glowy);
