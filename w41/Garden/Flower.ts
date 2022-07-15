import {Plants} from './Plants';

class Flower extends Plants{
  
    constructor(color:string){
        super(7.5,color,'Flower');
    }

}

export {Flower}