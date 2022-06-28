'use strict'

class Sharpie {

    private _color: string;
    private _width: number;
    private _inkAmount: number;

    constructor(color:string, width:number){
        this._inkAmount = 100;
        this._color = color;
        this._width = width;
    }

    public use(){
        let shrink = this._inkAmount -= 10;
        return console.log('Remaining ink amount: ', shrink);
    }
}

let HP = new Sharpie('Blue',5);
HP.use();
HP.use();
HP.use();
HP.use();
HP.use();