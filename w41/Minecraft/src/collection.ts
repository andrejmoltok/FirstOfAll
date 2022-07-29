import { Block } from "./block";

export class Mud extends Block {
  constructor(quality?: number, producer?: string) {
    super(
      quality ?? 0,
      producer ?? "",
      "mud",
      "dark gray",
      0,
      false,
      ["brick", "air", "lava", "door", "window", "gold"],
      []
    );
  }
}

export class Glowstone extends Block {
  constructor(quality?: number, producer?: string) {
    super(
      quality ?? 0,
      producer ?? "",
      "glowstone",
      "white",
      300,
      false,
      ["glass", "ice", "air", "lava"],
      [["glass"],["gold"]]
    );
  }
}

export class Glass extends Block {
  constructor(
    quality?: number,
    producer?: string,
    color?: string,
    lightTransmission?: number
  ) {
    super(
      quality ?? 0,
      producer ?? "",
      "glass",
      color ?? "transparent",
      lightTransmission ?? 99,
      false,
      ["mud", "brick", "ice", "air", "glowstone", "door"],
      []
    );
  }
}

export class Lava extends Block {
  constructor(quality?: number, producer?: string) {
    super(
      quality ?? 0,
      producer ?? "",
      "lava",
      "yellow",
      170,
      false,
      ["mud", "brick", "glass", "ice", "air", "glowstone"],
      [
        ["mud", "brick"],
        ["ice", "air"],
      ]
    );
  }
}

export class Air extends Block {
  constructor(quality?: number, producer?: string) {
    super(
      quality ?? 0,
      producer ?? "",
      "air",
      "transparent",
      100,
      true,
      ["mud", "brick", "glass", "door", "window", "gold"],
      []
    );
  }
}

export class Window extends Block {
  constructor(
    quality: number,
    producer: string,
    color: string,
    lightTransmission: number,
    crossable: boolean
  ) {
    super(
      quality,
      producer,
      "window",
      color,
      lightTransmission,
      crossable,
      ["mud", "brick", "air", "door", "glowstone"],
      []
    );
  }
}

export class Gold extends Block {
  constructor(quality?: number, producer?: string, lightTransmission?: number) {
    super(
      quality ?? 0,
      producer ?? "",
      "gold",
      "rgb: 255,215,0",
      lightTransmission ?? 0,
      false,
      ["glowstone", "glass"],
      []
    );
  }
}

export class Ice extends Block {
  constructor(quality?: number, producer?: string) {
    super(
      quality ?? 0,
      producer ?? "",
      "ice",
      "transparent",
      97,
      false,
      ["mud", "brick", "glass", "lava", "air", "glowstone"],
      [["lava", "glass"]]
    );
  }
}

export class Door extends Block {
  constructor(
    quality?: number,
    producer?: string,
    color?: string,
    lightTransmission?: number
  ) {
    super(
      quality ?? 0,
      producer ?? "",
      "door",
      color ?? "",
      lightTransmission ?? 0,
      true,
      ["mud", "brick", "air", "window"],
      []
    );
  }
}

export class Brick extends Block {
  constructor(quality?: number, producer?: string, color?: string) {
    super(
      quality ?? 0,
      producer ?? "",
      "brick",
      color ?? "rgb: 144,76,42",
      0,
      false,
      ["mud", "glass", "air", "door", "window"],
      []
    );
  }
}

const mud = new Mud();
const glow = new Glowstone();
const brick = new Brick();
mud.getStatus();
glow.getStatus();
console.log(mud.getTransmission());
console.log(mud);
console.log(mud.canPlaceAfter(glow));
console.log(mud.canPlaceAfter(brick));
