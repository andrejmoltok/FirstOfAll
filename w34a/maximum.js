//find the largest number in the array recursively


function minMaxVal(arr,op){
    if (arr.length == 1){
        return arr[0];
    }
    else if (arr.length > 1){
        //(arr[0] < arr[1]) ? max = arr[1] : max = arr[0];
        
        let empty = 0; 
        /*change '>' to '<', to find minimum value from array
        ('>' looks for max value, '<' looks for min value)*/
        if (op == '>'){
            if (arr[0]  >  arr[1]){
                empty = arr[0];
                arr[0] = arr[1];
                arr[1] = empty;
           }
        }
        else if (op == '<'){
            if (arr[0] < arr[1]){
                empty = arr[0];
                arr[0] = arr[1];
                arr[1] = empty; 
            }
        }
        
        arr.shift();
        minMaxVal(arr, op);
        return Number(arr);
    }
}

console.log(minMaxVal([5,10,44,77,41,56,99,17], '>'));
console.log(minMaxVal([9,2,7,4,19,21,11,13,7,35], '<'));
console.log(minMaxVal([44,11,89,87,100,11,17,91], '>'));
