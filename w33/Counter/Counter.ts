'use strict'

class Counter {

    private _counterField:number;
    private _counter:number;

    constructor(counter?:number){
        this._counter = counter ?? 0;          
        this._counterField = this._counter;
    }

    public add(num?:number){
        return this._counterField += num ?? 1;
    }

    public get(){
        return this._counterField;
    }

    public reset(){
        return this._counterField = this._counter;
    }

}

const myself = new Counter(5);

console.log(myself.get());
console.log(myself.add(9));
console.log(myself.add());
console.log(myself.reset());