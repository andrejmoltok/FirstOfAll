// Read all data from 'log.txt'
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses
// Write a function that returns the GET / POST request ratio

var fs = require('fs');

function IPlogger(file:string){
    //read file
    let logi:string = fs.readFileSync(file, 'utf-8');

    //create 2 main, 1 temp arrays
    let pre = new Array();
    let unique = new Array();
    let temp = new Array();

    //push content of file read into pre array
    pre.push(logi);
    //console.log(pre);

    //split pre array
    for (let i=0; i<=pre.length-1; i++){
            temp = pre[i].split(' ');
            //put every 12th element from temp array into unique array starting from pos=8
        for (let k=8; k<=temp.length-1; k=k+12){            
            unique.push(temp[k]);
        }
    }
    //console.log(unique);

    let counted = unique.reduce((init, curr) => { 
        if (curr in init) {
            init[curr]++;
        } else {
            init[curr] = 1;
        }

        return init;
    }, {});

    //console.log(counted);
    
    let kulcs = Array.from(Object.keys(counted));
    let ertek = Array.from(Object.values(counted));
    let temp2 = new Array();
    let final = new Array();

    //return every key, which value equals to 1
    for (let j=0; j<=ertek.length-1; j++){
        if (ertek[j]==1){
            final.push(kulcs[j]);
        }
    }
    console.log("Unique IP addresses:",final);
}

IPlogger('log.txt');