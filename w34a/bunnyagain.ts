'use strict'


//vigyel be barmilyen szamot es szamold ki rekurzivan a fulek osszeget
//ugy hogy a paratlan szamoknak 2 fule van, a parosoknak 3 fule van
//pl. 5 => 5(2),4(3),3(2),2(3),1(2)
function bunagain(bun:number):any{
    try {
        if (bun < 0) {
            return "Negative";
        }
        else if (bun == 0) {
            return 0;
        }
        else if (bun % 2 == 1) {
                return 2 + bunagain(bun-1);
        }
        else if (bun % 2 == 0) {
                return 3 + bunagain(bun-1);;
            }
        }
    
    catch (error)
    {
        console.log(error);
    }
}

console.log(bunagain(5));
console.log(bunagain(10));
console.log(bunagain(15));