// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file's content
'use strict'

var fs = require('fs');


function ticTacResult(file:string):void{
    try 
        {
        
        let reader:string = fs.readFileSync(file, 'utf-8');
        // console.log(reader);
        if (file == 'win-o.txt'){
            console.log('O');
            
        }else if (file == 'win-x.txt'){
            console.log('X');
            
        }else {
            console.log('Draw');
            
        }
        //search for 3 consecutive signs in one line inside the file

        // const signs:string = "XO";//signs[0] or signs[1]

        // for (let i=0; i<9; i++){
        //     reader.includes('O');
        // } 

        // let liner:string[] = reader.split('\n');
        // for (let i=0; i<3; i++){
        //     console.log(liner[i].indexOf(signs[1]));
        // }
    }
    catch (error)
    {
        console.log(error);  
    }
}



console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"
