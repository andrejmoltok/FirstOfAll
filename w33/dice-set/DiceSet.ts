class DiceSet {
  private dice: number[];
  readonly numOfDices: number = 6;

  constructor(dice:number[]){
    this.dice = dice;
  }

  roll(): number[] {
    this.dice = [];
    for (let i = 0; i < this.numOfDices; i++) {
      this.dice.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dice;
  }

  reroll(index?: number): void {
    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        this.dice[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dice[index] = Math.floor(Math.random() * 6 + 1);
    }
  }

  getCurrent(index?: number): number[] | number {
    if (index === undefined) {
      return this.dice;
    } else {
      return this.dice[index];
    }
  }

  setAllSix():void{
    this.dice.map((v,i) => (v<6)? this.reroll(v) : v);
  }
}

// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll()
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

let diceSet = new DiceSet([]);

// console.log("------------------");
// diceSet.roll();
// console.log(diceSet.getCurrent());
// diceSet.reroll();
// console.log(diceSet.getCurrent());
// console.log("------------------");

diceSet.roll();

console.log(diceSet.setAllSix());