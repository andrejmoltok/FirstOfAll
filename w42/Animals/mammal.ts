import {Animal} from './animal';

export class Mammal extends Animal {

    constructor(name:string,age?:number){
        super(name,age);
    }

    public getName(): string {
        return this._name!;
    }

    public breed(): string {
        return "pushing miniature versions out.";
    }

    public breath(): string {
        return "through lungs."
    }

    public blood(): string {
        return "is warm-blooded."
    }

    public move(): string {
        return "an up-right stance locomotion.";
    }
}

// let koala:Animal = new Mammal("Koala");

// console.log(`A ${koala.getName()} is breeding by ${koala.breed()}`);
// console.log(koala._age);

