// We are going to represent our products in a map where the keys are strings
// representing the product's name and the values are numbers representing the
// product's price.

// - Create a map with the following key-value pairs:

//   | Product name (key) | Price (value) |
//   | :----------------- | :------------ |
//   | Eggs               | 200           |
//   | Milk               | 200           |
//   | Fish               | 400           |
//   | Apples             | 150           |
//   | Bread              | 50            |
//   | Chicken            | 550           |

let product = new Map();

let prodName = [
    "Eggs","Milk","Fish","Apples","Bread","Chicken"
];
let prodPrice =[
    200,200,400,150,50,550
];

for (let i=0;i<prodName.length;i++){
    product.set(prodName[i],prodPrice[i]);
}

console.log(product);
// console.log(typeof product);
// - Create an application which prints out the answers to the following
//   questions:
//   - [How much is the fish?](https://www.youtube.com/watch?v=cbB3iGRHtqA)
//   - What is the most expensive product?
//   - What is the average price?
//   - How many products' price is below 300?
//   - Is there anything we can buy for exactly 125?
//   - What is the cheapest product?

function prodList(product:Map<string,number>){
    //alap szamitasok
    const getMax = (a:number, b:number) => Math.max(a, b);
    const getMin = (c:number, d:number) => Math.min(c, d);
    let total = (Array.from(product.values())).reduce((p,c,i,a) => p+c,0);
    //szamitasok a kerdesekre
    //How much is the fish?
    let fishPrice = product.get('Fish');
    //What is the most expensive product?  
    let mostExp = (Array.from(product.values())).reduce(getMax,0);
    //What is the average price?
    let avgPrice = Math.round(total/(Array.from(product.values())).length);
    //How many products' price is below 300?
    let priceUnder300 = (Array.from(product.values())).filter((price => price<300)).length;
    //Is there anything we can buy for exactly 125?
    let price125 = (Array.from(product.values())).filter((price => price==125)).length;
    //What is the cheapest product?
    let minExp = (Array.from(product.values())).reduce(getMin);
    let szoveg:string = ("Mennyibe kerul a hal? "+fishPrice+"\n"+"Melyik a legdragabb termek? "+mostExp+"\n"+
                        "Mennyi az atlagos ara a termekeknek? "+avgPrice+"\n"+"Mennyi termek van ami kevesebb mint 300-ba kerul? "+
                        priceUnder300+"\n"+"Van olyan termek ami pontosan 125-be kerul? "+price125+"\n"+
                        "Melyik a legolcsobb termek? "+minExp);
    return szoveg;
}

console.log(prodList(product));