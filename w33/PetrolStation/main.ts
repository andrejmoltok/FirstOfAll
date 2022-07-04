import { Car } from "./Car";
import { Station } from './Station';

let newCar = new Car("Mazda", 0, 100);
let newStat = new Station("OMV", 100);

console.log(newCar);
console.log(newStat.refill(newCar));