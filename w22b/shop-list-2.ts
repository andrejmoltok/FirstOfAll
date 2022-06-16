// - Represent the following products with their prices:

//   | Product         | Price  |
//   | :-------------- | :----- |
//   | Milk            | 1.07   |
//   | Rice            | 1.59   |
//   | Eggs            | 3.14   |
//   | Cheese          | 12.60  |
//   | Chicken Breasts | 9.40   |
//   | Apples          | 2.31   |
//   | Tomato          | 2.58   |
//   | Potato          | 1.75   |
//   | Onion           | 1.10   |

// - Represent Bob's shopping list:

//   | Product         | Amount |
//   | --------------- | ------ |
//   | Milk            | 3      |
//   | Rice            | 2      |
//   | Eggs            | 2      |
//   | Cheese          | 1      |
//   | Chicken Breasts | 4      |
//   | Apples          | 1      |
//   | Tomato          | 2      |
//   | Potato          | 1      |

// - Represent Alice's shopping list:

//   | Product         | Amount |
//   | --------------- | ------ |
//   | Rice            | 1      |
//   | Eggs            | 5      |
//   | Chicken Breasts | 2      |
//   | Apples          | 1      |
//   | Tomato          | 10     |

// - Create an application which prints out the answers to the following
//   questions:
//   - How much does Bob pay?
//   - How much does Alice pay?
//   - Who buys more Rice?
//   - Who buys more Potato?
//   - Who buys more different products?
//   - Who buys more products? (more pieces)

//Products List
let products = new Map();
let productsName = [
    "Milk", "Rice", "Eggs", "Cheese", "Chicken Breasts",
    "Apples", "Tomato", "Potato", "Onion"
];
let productsPrice = [
    1.07, 1.59, 3.14, 12.60, 9.40, 2.31, 2.58, 1.75, 1.10
];

for (let i=0;i<productsName.length;i++){
    products.set(productsName[i],productsPrice[i]);
}
// console.log("products: ",products);

//Bob List
let BobList = new Map();
let BobListNames = [
    "Milk", "Rice", "Eggs", "Cheese",
    "Chicken Breasts", "Apples", "Tomato",
    "Potato"
];
let BobListAmount =[
    3, 2, 2, 1, 4, 1, 2, 1
];
for (let k=0;k<BobListNames.length;k++){
    BobList.set(BobListNames[k],BobListAmount[k]);
}
// console.log("Bob Shopping List: BobList",BobList);

//Alice List
let AliceList = new Map();
let AliceListNames = [
    "Rice", "Eggs", "Chicken Breasts",
    "Apples", "Tomato"
];
let AliceListAmount = [
    1, 5, 2, 1, 10
];
for (let j=0;j<AliceListNames.length;j++){
    AliceList.set(AliceListNames[j],AliceListAmount[j]);
}
// console.log("Alice Shopping List: AliceList ",AliceList);

let prodKeyArr = Array.from(products.keys());
let prodValArr = Array.from(products.values());

//   - How much does Bob pay?
let comp1 = prodKeyArr.filter(v => Array.from(BobList.keys()).includes(v));
let comp2 = comp1.map((e,i) => prodValArr[i]*Array.from(BobList.values())[i]);
let sum = comp2.reduce((p,c) => p+=c,0);
console.log("Bob pays in total of: ",sum);

//   - How much does Alice pay?

let AliceKeys = Array.from(AliceList.keys());
//szurd ki azokat az arakat amelyeknek a kulcsa benne van mindket listaban
let comp3 = prodKeyArr.filter(e => AliceKeys.includes(e));
//talalad meg az arakat a kiszurt elemeknek
//az arak indexei a prodKeyArr-ban megegyeznek a prodValArr keresett indexeivel
let idxArr:number[] = [];
for (let i=0;i<comp3.length;i++){
    idxArr.push(prodKeyArr.indexOf(comp3[i]));
}
//return the values from prodValArr based on the indexes in idxArr
//use the numbers in idxArr as indices for prodValArr, then push into comp4-array
let comp4:number[] = [];
for (let x=0;x<=idxArr.length-1;x++){
    comp4.push(prodValArr[idxArr[x]]);
}
//Utolso fazis penzertek osszeszorzas mennyiseggel majd
//ezen ertekek osszeadas es az osszeg kiirasa
let AliceValues = Array.from(AliceList.values());
let sum2 = comp4.reduce((p,c,i) => p+= c*AliceValues[i],0);
console.log("Alice pays in total of: ",sum2);


//   - Who buys more Rice?
let BobAmount = Array.from(BobList.values());
let BobKeys = Array.from(BobList.keys());
// console.log("Alice ",AliceKeys.map((e,i) => e = AliceKeys[i]+" = "+AliceAmount[i]));
// console.log("Bob ",BobKeys.map((e,i) => e = BobKeys[i]+" = "+BobAmount[i]));
// keresd meg a Rice erteket mindket tombben es hasonlitsd ossze
// bobkeys => rice => bobamount => 2
// alicekeys => rice => aliceamount => 1
let idxRiceBob = BobKeys.indexOf('Rice');
let idxRiceAlice = AliceKeys.indexOf('Rice');
let BobRiceAmnt = BobAmount[idxRiceBob];
let AliceRiceAmnt = AliceListAmount[idxRiceAlice];
    if (idxRiceBob > idxRiceAlice) {
        console.log("Bob buys more Rice, exactly "+BobRiceAmnt+" pieces.");
    }
    else
    {   
        console.log("Alice buys more Rice, exactly "+AliceRiceAmnt+" pieces.");
    }
//   - Who buys more Potato?
let idxPotBob = BobKeys.indexOf('Potato');
let idxPotAlice = AliceKeys.indexOf('Potato');
// console.log(idxPotBob);
// console.log(idxPotAlice);
let BobPotAmnt = BobAmount[idxPotBob];
let AlicePotAmnt = AliceValues[idxPotAlice];
// console.log(BobPotAmnt);
// console.log(AlicePotAmnt);
    if (idxPotBob > idxPotAlice) {
        console.log("Bob buys more Potato, exactly "+BobPotAmnt+" pieces.");
    }
    else
    {   
        console.log("Alice buys more Potato, exactly "+AlicePotAmnt+" pieces.");
    }
//   - Who buys more different products?
let BobLen = BobKeys.length;
let AliceLen = AliceKeys.length; 
if (BobLen > AliceLen) {
    console.log("Bob has "+BobLen+" kind of products on his list. He buys more different products.");
}
else
{
    console.log("Alice buys more different products, "+AliceLen+" kind of products on her list.");
}   
//   - Who buys more products? (more pieces)
let BobPieces = BobListAmount.reduce((p,c,i) => p+=c,0);
let AlicePieces = AliceListAmount.reduce((p,c,i) => p+=c,0);
if (BobPieces > AlicePieces){
    console.log("Bob buys more pieces of products, "+BobPieces);
}
else
{
    console.log("Alice buys more pieces of products, "+AlicePieces);
}