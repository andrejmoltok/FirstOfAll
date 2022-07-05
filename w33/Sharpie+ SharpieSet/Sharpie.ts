'use strict'

class Sharpie {

    private _color: string;
    private _width: number;
    private _inkAmount: number;

    constructor(color:string, width:number){        
        this._color = color;
        this._width = width;
        this._inkAmount = 100;
    }

    public use():any{
        let shrink = this._inkAmount -= 10;
        return 'Remaining ink amount: '+ shrink;
    }
}

export {Sharpie}