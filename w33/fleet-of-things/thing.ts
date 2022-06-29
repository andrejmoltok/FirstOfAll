class Thing {
  private name: string;
  #completed: boolean;

  constructor(name: string) {
    this.name = name;
    this.#completed = false;
  }

  public complete(): void {
    this.#completed = true;
  }

  getName(): string {
    return this.name;
  }

  getCompleted(): boolean {
    return this.#completed;
  }

  toString(): string {
    return `[${this.#completed ? 'x' : ' '}] ${this.name}`;
  }
}

export { Thing };
