// -  Create a variable named `numbers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `numbers` to the console*
// *hint: use a loop, console.log(numbers) won't cut it
// -  bonus for using the correct built in array method
let numbers:number[] = [4, 5, 6, 7];

let iterator = numbers.values();

for (let value of iterator) {
  console.log(value);
}