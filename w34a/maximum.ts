//find the largest number in the array recursively

var arr:number[] = [9,2,7,4,19,21,11,13,7,35]; //5,10,44,77,41,56,99,17
var n:number = arr.length;

function maxVal(arr:Array<number>):any{
    if (arr.length == 1){
        return arr[0];
    }
    else if (arr.length > 1){
        //(arr[0] < arr[1]) ? max = arr[1] : max = arr[0];
        
        let empty:number = 0;       
        if (arr[0]>arr[1]){
            empty = arr[0];
            arr[0] = arr[1];
            arr[1] = empty;
        }
        arr.shift();
        maxVal(arr);
        return Number(arr);
    }
}

console.log(maxVal(arr));