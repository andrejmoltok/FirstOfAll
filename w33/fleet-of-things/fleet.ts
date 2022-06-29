import { Thing } from './thing';

class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing): void {
    this.things.push(thing);
  }

  getThings(): Thing[] {
    return this.things;
  }

  toString(): string {
    return this.things
      .map((thing, index) => `${index + 1}. ${thing.toString()}`)
      .join('\n');
  }
}

export { Fleet };
