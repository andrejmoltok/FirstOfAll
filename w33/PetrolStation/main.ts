import { Car } from "./Car";
import { Station } from './Station';

let newCar = new Car("Tesla", 0, 100);
let newStat = new Station(100, "Benzinkut");

console.log(newCar);
console.log(newStat.refill(newCar));
console.log(newStat.refill(newCar));
