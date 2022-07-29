import { Block } from "./block";

export class Mud extends Block {
  constructor() {
    super(
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
  constructor() {
    super(
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
    lightTransmission?: number,
    color?: string
  ) {
    super(
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
  constructor() {
    super(
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
  constructor() {
    super(
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
      "window",
      color,
      lightTransmission,
      crossable,
      ["mud", "brick", "air", "door", "glowstone"],
      [],
      quality,
      producer
    );
  }
}

export class Gold extends Block {
  constructor(lightTransmission?: number) {
    super(
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
  constructor() {
    super(
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
      "door",
      color ?? "",
      lightTransmission ?? 0,
      true,
      ["mud", "brick", "air", "window"],
      [],
      quality ?? 0,
      producer ?? ""
    );
  }
}

export class Brick extends Block {
  constructor(color?: string) {
    super(
      "brick",
      color ?? "rgb: 144,76,42",
      0,
      false,
      ["mud", "glass", "air", "door", "window"],
      []
    );
  }
}
