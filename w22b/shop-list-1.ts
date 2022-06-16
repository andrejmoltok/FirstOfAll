// We are going to represent a shopping list in a list containing strings.

// - Create a list with the following items:
//   - ˇ"eggs", "milk", "fish", "apples", "bread" and "chicken"
let shopList = ["eggs", "milk", "fish", "apples", "bread", "chicken"];

// - Create an application which prints out the answers to the following
//   questions:
//   - Do we have milk on the list?
//   - Do we have bananas on the list?
console.log("Do we have milk on the list? (1=Yes/-1=No)",shopList.indexOf('milk'));

console.log("Do we have bananas on the list? (1=Yes/-1=No)",shopList.indexOf('bananas'));