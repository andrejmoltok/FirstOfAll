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
}
