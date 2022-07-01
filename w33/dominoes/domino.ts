class Domino {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }

    read(index:number):number{
       return this.values[index];
    }

    
}

export {Domino};
