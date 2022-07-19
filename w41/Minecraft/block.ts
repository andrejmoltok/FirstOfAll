class Block {

    protected _type:string;
    protected _color:string;
    protected _lightTransmission:number;
    protected _crossable:boolean;
    //private _canTransform:Block[];
    //private _placeable : Block[];

    constructor(type:string,color:string,lightTransmission:number,crossable:boolean){
        this._type = type;
        this._color = color;
        this._lightTransmission = lightTransmission;
        this._crossable = crossable;
    }

    public getStatus(): any {
        return console.log("Block of type: " + this._type + "\nHas light transmission: " + this._lightTransmission +
         "\nCan" + (this._crossable? " ": " not ") + "be crossed.");
     }

    public canPlaceAfter(): void {
        const mud = ['brick','air', 'lava', 'door', 'window', 'gold'];
        const glowstone = ['glass', 'ice', 'air', 'lava'];
        const glass = ['mud', 'brick', 'ice', 'air', 'glowstone', 'door'];
        const lava = ['mud', 'brick', 'glass', 'ice', 'air', 'glowstone'];
        const air = ['mud', 'brick', 'glass', 'door', 'window', 'gold'];
        const window = ['mud', 'brick', 'air', 'door', 'glowstone'];
        const gold = ['glowStone', 'glass'];
        const ice = ['mud', 'brick', 'glass', 'lava', 'air', 'glowstone'];
        const door = ['mud', 'brick', 'air', 'window'];
        const brick = ['mud', 'glass', 'air', 'door', 'window'];

    }
}

export {Block}

// let mud = new Block('mud','dark gray',0,false);

// console.log(mud.getStatus());
