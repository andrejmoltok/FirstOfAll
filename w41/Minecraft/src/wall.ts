/* eslint-disable @typescript-eslint/no-unused-vars */
import { Block } from "./block";
import { Mud } from "./collection";
import { Glowstone } from "./collection";
import { Glass } from "./collection";
import { Lava } from "./collection";
import { Air } from "./collection";
import { Window } from "./collection";
import { Gold } from "./collection";
import { Ice } from "./collection";
import { Door } from "./collection";
import { Brick } from "./collection";

class Wall {
  protected _listOfBlock: Block[];

  constructor() {
    this._listOfBlock = [];
  }

  public placeblock(newBlock: Block): void {
    if (this._listOfBlock.length === 0) {
      this._listOfBlock.push(newBlock);
    } else if (
      newBlock.canPlaceAfter(this._listOfBlock[this._listOfBlock.length - 1]) === true 
      && 
      String(newBlock.getTransform()[0]) === String(this._listOfBlock[this._listOfBlock.length - 1])
    ) {
      // console.log(this._listOfBlock[this._listOfBlock.length - 1]);

      console.log(String(newBlock.getTransform()[0]));
      console.log(String(this._listOfBlock[this._listOfBlock.length - 1]));
      
      //console.log(newBlock.getTransform()[0]);
      //console.log(newBlock.getTransform()[1]);

      
      //this._listOfBlock.push();
      //this._listOfBlock.push(newBlock);

      //console.log(newBlock.getStatus());

      // this._listOfBlock.splice(this._listOfBlock.length-1, 1);
    }
  }

  public getList(): void {
    console.log(this._listOfBlock);
  }
}

const myWall = new Wall();
const air = new Air();
const brick = new Brick("dark-gray");
const door = new Door(2, "Mordor", "black", 60);
const glass = new Glass(80);
const glow = new Glowstone();
const wind = new Window(1, "Liliput", "white", 70, true);
const wind2 = new Window(2, "Asgard", "light-gray", 90, true);
const mud = new Mud();
const gold = new Gold(50);
const lava = new Lava();
const glow2 = new Glowstone();
const ice = new Ice();
const lava2 = new Lava();
const gold2 = new Gold(30);
const ice2 = new Ice();

myWall.placeblock(air);
myWall.placeblock(brick);
myWall.placeblock(door);
myWall.placeblock(glass);
myWall.placeblock(glow);
// myWall.placeblock(wind);
// myWall.placeblock(wind2);
// myWall.placeblock(mud);
// myWall.placeblock(gold);
// myWall.placeblock(lava);
// myWall.placeblock(glow2);
// myWall.placeblock(ice);
// myWall.placeblock(lava2);
// myWall.placeblock(gold2);
// myWall.placeblock(ice2);

myWall.getList();

//console.log(glow.getTransform()[0]);
//console.log(glow.getTransform()[1]);