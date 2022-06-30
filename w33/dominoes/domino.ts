class Domino {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }

    read(index:number):void{
        console.log(this.values[index]);
    }

    sorter(input:any):void{
        //open domino set and read values
        //arrange dominoes based on equal values
        //if One's last equals to Second's first
        //put them next to eachother
        
    }
}

export {Domino};
