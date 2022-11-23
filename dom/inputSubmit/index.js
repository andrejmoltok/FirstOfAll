'use strict'

const myInput = document.getElementById('myInput');
const elemCount = document.getElementById('elemCount');
const mySubmit = document.getElementById('mySubmit');

const myDiv = document.getElementById('myDiv');
const inputDiv = document.getElementById('inputDiv');
const elemCountDiv = document.getElementById('elemCountDiv');

myDiv.style.width = "177px";
myDiv.style.display = "flex";
myDiv.style.flexFlow = "column wrap";

mySubmit.style.margin = "18px 0px";

mySubmit.addEventListener('click',function() {
    let output = [];
    let arr = myInput.value;
    arr = arr.split(',');
    while (arr[0]) {
        output.push(arr.splice(0,elemCount.value));        
    }
    output[0].map((col,c) => output.map((row,r) => output[r][c] = Number(output[r][c])))
    console.log(output);    
});

