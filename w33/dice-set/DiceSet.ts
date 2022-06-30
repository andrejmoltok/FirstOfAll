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
    let i=0;
    do {
      this.reroll(i);
      i++;
    } while (this.getCurrent(i) != 6);
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

// console.log(diceSet.getCurrent());

// diceSet.reroll();
// console.log(diceSet.getCurrent());

// let arr = Array.from(Object.values(diceSet))[1];

// console.log(Object.values(diceSet));

// console.log(arr);

//console.log(diceSet.getCurrent());

//do reroll() until arr[i] = 6

console.log(diceSet.setAllSix());

//console.log(arr.map((v:number,i:number) => (v<6)? diceSet.reroll(i) : v));//???????

// for (let i=0; i<=arr.length-1; i++){
//   if (arr[i] < 6){
//     for (let j=0; j<=arr.length-1; j++){
//       diceSet.reroll();
//     }
//   }
//   console.log(arr);
// }

// for (const elem of arr){
//   if (arr[elem] < 6){
//     diceSet.reroll();
//   }
//   console.log(arr);
// }

// console.log(Math.floor(Math.random() * 6 + 1));