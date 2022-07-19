import { Animal } from "./animal";
import { Mammal } from "./mammal";
import { Reptile } from "./reptile";

const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);

console.log("How do you breath?");
console.log(`A ${reptile.getName()} is breathing ${reptile.breath()}`);
console.log(`A ${mammal.getName()} is breathing ${mammal.breath()}`);

console.log("What kind of blood do you have?");
console.log(`A ${reptile.getName()} ${reptile.blood()}`);
console.log(`A ${mammal.getName()} ${mammal.blood()}`);

console.log("How do you move about?");
console.log(`A ${reptile.getName()} has ${reptile.move()}`);
console.log(`A ${mammal.getName()} has ${mammal.move()}`);


