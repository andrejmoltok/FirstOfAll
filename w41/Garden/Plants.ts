import {Tree} from './Tree';
import {Flower} from "./Flower";

class Plants {

    public _waterAmount:number;
    protected _color:string;
    protected _type:string;

    constructor(waterAmount:number,color:string,type:string){
        this._waterAmount = 0;
        this._color = color;
        this._type = type;
    }

    public getNeedsWater(): any {
        if (this._type == 'Flower'){
            if (this.getWaterAmount() < 5){
            console.log("The " + this._color + " Flower needs water.");
            return true;
            }
            else {
                console.log("The " + this._color + " Flower doesn't need water.");
                return false;
            }
        }
        if (this._type == 'Tree'){
            if (this.getWaterAmount() < 10){
                console.log("The " + this._color + " Tree needs water.");
            return true;
            }
            else {
                console.log("The " + this._color + " Tree doesn't need water.");
                return false;
            }
        }
    }

    public getWaterAmount(): number {
        return this._waterAmount;
    }

    public getType(): string {
        return this._type;
    }

    public setWaterAmount(amount:number):any{
        this._waterAmount = amount;
    }
}

export {Plants}