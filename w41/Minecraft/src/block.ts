/* eslint-disable @typescript-eslint/no-unused-vars */
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

export class Block {
  protected _type: string;
  protected _color: string;
  protected _lightTransmission: number;
  protected _crossable: boolean;
  protected _placeable: string[];
  protected _canTransform: string[][];
  protected _quality?: number;
  protected _producer?: string;

  constructor(
    type: string,
    color: string,
    lightTransmission: number,
    crossable: boolean,
    placeable: string[],
    canTransform: string[][],
    quality?: number,
    producer?: string
  ) {
    this._type = type;
    this._color = color;
    this._lightTransmission = lightTransmission;
    this._crossable = crossable;
    this._placeable = placeable;
    this._canTransform = canTransform;
    this._quality = quality;
    this._producer = producer;
  }

  public getStatus(): void {
    console.log(
      `Block of type: ${this._type} \nHas light transmission: ${this._lightTransmission} \nCan` +
        (this._crossable ? " " : " not ") +
        `be crossed.`
    );
  }

  public getTransmission(): number {
    return this._lightTransmission;
  }

  public canPlaceAfter(block: Block): boolean {
    if (block._placeable.includes(this._type)) {
      return true;
    }
    return false;
  }

  public getTransform(): string[][] {
    return this._canTransform;
  }
}
