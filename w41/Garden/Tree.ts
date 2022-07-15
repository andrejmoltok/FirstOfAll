import {Plants} from './Plants';

class Tree extends Plants{

    constructor(color:string){
        super(4,color,'Tree');
    }

}

// let orange = new Tree('orange');

export {Tree}