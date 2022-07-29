/* eslint-disable @typescript-eslint/no-unused-vars */
export class Block {
  protected _quality: number;
  protected _producer: string;
  protected _type: string;
  protected _color: string;
  protected _lightTransmission: number;
  protected _crossable: boolean;
  protected _placeable: string[];
  protected _canTransform: string[][];

  constructor(
    quality: number,
    producer: string,
    type: string,
    color: string,
    lightTransmission: number,
    crossable: boolean,
    placeable: string[],
    canTransform: string[][]
  ) {
    this._quality = quality;
    this._producer = producer;
    this._type = type;
    this._color = color;
    this._lightTransmission = lightTransmission;
    this._crossable = crossable;
    this._placeable = placeable;
    this._canTransform = canTransform;
  }

  public getStatus(): void {
    console.log(`Block of type: ${this._type} \nHas light transmission: ${this._lightTransmission} \nCan` + (this._crossable? " " : " not ") + `be crossed.`);
  }

  public getTransmission(): number {
    return this._lightTransmission;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public canPlaceAfter(block: Block): boolean {
    // for (let i = 0; i < block._placeable.length; i += 1) {
    //   if (this._type == block._placeable[i]) {
    //     return true;
    //   }
    // }
    if (block._placeable.includes(this._type)){
      return true;
    }
    return false;
  }
}
