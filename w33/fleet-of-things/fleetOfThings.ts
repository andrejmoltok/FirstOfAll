import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

let getMilk = new Thing('Get milk');
let obst = new Thing('Remove the obstacles');
let stand = new Thing('Stand up');
let lunch = new Thing('Eat lunch');

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those

//  Crete a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

fleet.add(getMilk);
fleet.add(obst);
fleet.add(stand);
fleet.add(lunch);
//console.log(fleet.getThings());
stand.complete();
lunch.complete();
console.log(fleet.toString());
