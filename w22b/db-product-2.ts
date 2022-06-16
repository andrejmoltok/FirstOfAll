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

// - Create an application which prints out the answers to the following
//   questions:
//   - Which products cost less than 201? (just the name)
//   - Which products cost more than 150? (name + price)

let prods = new Map();

let prodsName = [
    "Eggs","Milk","Fish","Apples","Bread","Chicken"
];
console.log("🚀 ~ file: db-product-2.ts ~ line 21 ~ prodsName", prodsName)

let prodsPrice =[
    200,200,400,150,50,550
];
console.log("🚀 ~ file: db-product-2.ts ~ line 24 ~ prodsPrice", prodsPrice)

for (let i=0;i<prodsName.length;i++){
    prods.set(prodsName[i],prodsPrice[i]);
}

console.log(prods);


// - Which products cost less than 201? (just the name)
function prodsUnder201(prods:Map<string,number>){
    //szurd ki azokat a kulcsokat amelyek erteke kisebb mint 201
    let idx = Array.from(prods.keys()).filter((e,i) => Array.from(prods.values())[i]<201);
    let pU201:string = "";
    for (let k=0;k<idx.length;k++){
        pU201 += String((k+1))+"."+(idx[k])+"\n";
    }
    return "Products under 201 are: \n"+pU201;
}

console.log(prodsUnder201(prods));

// - Which products cost more than 150? (name + price)
function prodsOver150(prods:Map<string,number>){

    let idx = Array.from(prods.keys()).filter((e,i) => Array.from(prods.values())[i]>150);
    let val = Array.from(prods.values()).filter((e,i) => e>150);
    let pO150:string = "";
    for (let k=0;k<idx.length;k++){
        pO150 += String(k+1)+"."+(idx[k])+" = "+(val[k])+"\n";
    }
    return "Products over 150 are: \n"+pO150;
}

console.log(prodsOver150(prods));