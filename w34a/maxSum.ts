'use strict'

// let arr:number[] = [1,2,3,4,5];
// console.log(arr.slice(0,4));
// console.log(arr.slice(0,3) , arr.length);
// console.log(arr.slice(0,2), arr.slice(3,5));
// console.log(arr.slice(0,1), arr.slice(2,5));
// console.log(arr.slice(1,5));

function sorted(arr:number[]):boolean{
    let second_index:number;
	for(let first_index = 0; first_index < arr.length; first_index++){
  	  second_index = first_index + 1;
      if(arr[second_index] - arr[first_index] < 0) return false;
    }
    return true;
}

function maxSum(arr:number[]):any {
    var temp = new Array();

    //bubble-sort first
    //check once if sorted
    sorted: if (sorted(arr) == true){
        break sorted;
    } else {
        arr.sort(function(a,b){return(a-b)});

        //declare new arrays to work with
        let first = arr.slice(0,4);
        let second = arr.slice(0,3).concat(arr.length);
        let third = arr.slice(0,2).concat(arr.slice(3,5));
        let fourth = arr.slice(0,1).concat(arr.slice(2,5));
        let fifth = arr.slice(1,5);

        //reduce to sum
        var one = first.reduce((p,c) => p+c,0);
        var two = second.reduce((p,c) => p+c,0);
        var three = third.reduce((p,c) => p+c,0);
        var four = fourth.reduce((p,c) => p+c,0);
        var five = fifth.reduce((p,c) => p+c,0);
        var temp = new Array();
        temp = [];
        temp.push(one,two,three,four,five);
    }
    
    //declare some base cases
    if (arr.length > 5){
        console.log("Please enter an array of 5 numbers only.");
    }
    else if (arr.length == 1){
        return arr[0];
    }
    else if (temp.length > 1) {
        let empty = 0;
        if (temp[0] >  temp[1]){
                empty = temp[0];
                temp[0] = temp[1];
                temp[1] = empty;
        }
        //INCOMPLETE
        console.log(temp.shift());
        maxSum(temp);
        return temp;
        
    }
}

console.log(maxSum([3,4,1,5,2]));
