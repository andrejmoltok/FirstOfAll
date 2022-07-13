//find the largest number in the array recursively

var arr = [5,10,22,56,44,9,11,77,34];
var n = arr.length;

function maxVal(arr){
    //console.log(arr[n-1]);
    if (n == 1){
        return arr[0];
    }
    else
    {
        return Math.max(arr[n-1], maxVal(arr[n-1]));
    }
}

console.log(maxVal(arr));