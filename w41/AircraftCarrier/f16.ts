import {Aircraft} from './aircraft';

class F16 extends Aircraft {

    constructor(){
        super('F16',8,30,false);
    }

}
let f16 = new F16();

console.log(f16.refillAmmo(300));

f16.getStatus();

console.log(f16.isPriority());

export {F16}