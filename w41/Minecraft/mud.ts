import {Block} from './block';

class Mud extends Block {

    constructor(){
        super('mud','dark gray',0,false);
    }

}

export {Mud}

let muddy = new Mud();
muddy.getStatus();