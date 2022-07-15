import {Tree} from './Tree';
import {Flower} from './Flower';
import {Plants} from './Plants';

class Garden {

    private _plants: Plants[];

    constructor(){
        this._plants = [];
    }

    public fillGarden(plant: Plants): any {
        this._plants.push(plant);
    }

    public getState(): void {
        for (let i=0; i<=this._plants.length-1 ;i++){
            this._plants[i].getNeedsWater();
        }      
    }

    public waterPlants(amount:number): void {
        amount = amount / this._plants.length;
        for (let k=0; k<=this._plants.length-1; k++){
            if (this._plants[k].getType() == "Flower"){
                this._plants[k].setWaterAmount(Math.round(this._plants[k].getWaterAmount() + (amount * 75) /  100));
            }
            else if (this._plants[k].getType() == "Tree"){
                this._plants[k].setWaterAmount(Math.round(this._plants[k].getWaterAmount() + (amount * 40) /  100));
            }
        }
    } 
}


let myGarden = new Garden();
let rozsa = new Flower('yellow');
let szegfu = new Flower('blue');
let bananfa = new Tree('purple');
let juhar = new Tree('orange');

console.log(myGarden);


myGarden.fillGarden(rozsa);
myGarden.fillGarden(szegfu);
myGarden.fillGarden(bananfa);
myGarden.fillGarden(juhar);

console.log(myGarden);

myGarden.getState();

myGarden.waterPlants(40);
myGarden.getState();

myGarden.waterPlants(70);
myGarden.getState();

console.log(myGarden);