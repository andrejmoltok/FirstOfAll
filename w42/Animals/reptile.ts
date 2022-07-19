import {Animal} from './animal';

export class Reptile extends Animal {

    constructor(name?:string,age?:number){
        super(name,age);
    }

    public breed(): string {
        return "laying eggs.";
    }

    public getName(): string {
        return this._name!;
    }

    public breath(): string {
        return "through lungs."
    }

    public blood(): string {
        return "is cold-blooded."
    }

    public move(): string {
        return "a sprawling movement.";
    }
}