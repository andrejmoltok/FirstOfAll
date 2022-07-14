//find the largest number in the array recursively

var arr:number[] = [5,10,44,77,41,56,99,17];
var n:number = arr.length;

function maxVal(arr:Array<number>):any{
    // if (arr.length > 0){    
    //     maxVal(arr);
    // }
    var max:number = 0;
    if (arr.length == 1){
        return arr[0];
    }
    else if (arr.length > 1){
        (arr[0] > arr[1]) ? max = arr[0] : max = arr[1];
        arr.shift();
        console.log(arr);
        
        maxVal(arr);
        return max
    }
}

console.log(maxVal(arr));