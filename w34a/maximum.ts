//find the largest number in the array recursively

var arr:number[] = [5,10,22,56,44,9,11,77,34];
var n:number = arr.length;

function maxVal(arr:any[]):any{
    if (n == 1){
        return arr[0];
    }
    else
    {
        return Math.max(arr[n-1], maxVal(arr[n-1]));
    }
}

console.log(maxVal(arr));