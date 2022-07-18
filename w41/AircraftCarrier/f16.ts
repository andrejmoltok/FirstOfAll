import {Aircraft} from './aircraft';
import { F35 } from './f35';

class F16 extends Aircraft {

    constructor(){
        super('F16',8,30,false);
    }

}
let f16 = new F16();
let f35 = new F35();

console.log(f16.refillAmmo(300));

f35.refillAmmo(20);

f16.getStatus();
f35.getStatus();

console.log(f16.isPriority());

f16.fight(f35);
f35.fight(f16);

export {F16}