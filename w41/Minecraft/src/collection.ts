import { Block } from "./block";

export class Mud extends Block {
  constructor(quality?: number, producer?: string) {
    super(
      quality ?? 0,
      producer ?? "",
      "Mud",
      "dark gray",
      0,
      false,
      ["Brick", "Air", "Lava", "Door", "Window", "Gold"],
      []
    );
  }
}

export class Glowstone extends Block {
  constructor(quality?: number, producer?: string) {
    super(
      quality ?? 0,
      producer ?? "",
      "Glowstone",
      "white",
      300,
      false,
      ["Glass", "Ice", "Air", "Lava"],
      [["Glass"],["Gold"]]
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
      "Glass",
      color ?? "transparent",
      lightTransmission ?? 99,
      false,
      ["Mud", "Brick", "Ice", "Air", "Glowstone", "Door"],
      []
    );
  }
}

export class Lava extends Block {
  constructor(quality?: number, producer?: string) {
    super(
      quality ?? 0,
      producer ?? "",
      "Lava",
      "yellow",
      170,
      false,
      ["Mud", "Brick", "Glass", "Ice", "Air", "Glowstone"],
      [
        ["Mud", "Brick"],
        ["Ice", "Air"],
      ]
    );
  }
}

export class Air extends Block {
  constructor(quality?: number, producer?: string) {
    super(
      quality ?? 0,
      producer ?? "",
      "Air",
      "transparent",
      100,
      true,
      ["Mud", "Brick", "Glass", "Door", "Windows", "Gold"],
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
      "Window",
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
      "Gold",
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
      "Ice",
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
      "Door",
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
      "Brick",
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
mud.canPlaceAfter(glow);
mud.canPlaceAfter(brick);
