import {Plants} from './Plants';

class Flower extends Plants{
  
    constructor(color:string){
        super(7.5,color,'Flower');
    }

}


// let blue = new Flower('blue');
// console.log(blue.getWaterAmount());

export {Flower}