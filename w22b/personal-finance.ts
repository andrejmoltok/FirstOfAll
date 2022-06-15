//  We are going to represent our expenses in a list containing integers.
// - Create a list with the following items:
//   - 500, 1000, 1250, 175, 800 and 120
let expense:number[] = [500, 1000, 1250, 175, 800, 120];

// - Create an application which prints out the answers to the following
//   questions:
//   - How much did we spend?
//   - Which was our greatest expense?
//   - Which was our cheapest spending?
//   - What was the average amount of our spendings?
function expenditure(arr:number[]){
    let total = arr.reduce((p,c,i,a) => p+c,0);
    const getMax = (a:number, b:number) => Math.max(a, b);
    const getMin = (c:number, d:number) => Math.min(c, d);
    let maxExp = arr.reduce(getMax,0);
    let minExp = arr.reduce(getMin);
    let avgExpRounded = Math.round(total/(arr.length));
    let avgExpBase = (total/(arr.length));
    let osszes:string = ("Osszes kiadas: "+total+" \n"+"Legnagyobb kiadas: "+maxExp+"\n"+
                        "Legkisebb kiadas:"+minExp+"\n"+"Atlagos kiadas kerekitve: "+avgExpRounded+"\n"+
                        "Atlagos kiadas tizedessel: "+avgExpBase);
    return osszes;
}

console.log(expenditure(expense));

    // console.log("Osszes kiadas: ",total);
    // console.log("Legnagyobb osszegu kiadas: ",maxExp);
    // console.log("Legkisebb kiadas: ",minExp);
    // console.log("Osszes kiadas atlag erteke: ",avgExp);