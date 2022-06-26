    // Create a function that
    // - takes the name of a CSV file as a parameter,
    //   - every row is in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
    // - and returns the year when the most births happened.
    //   - if there were multiple years with the same number of births then return any of them

    // You can find such a CSV file in this directory named births.csv
    // If you pass "births.csv" to your function, the result should be either 2006 or 2016.
        
    'use strict'

   var fs = require('fs');

   function getMax(obj) {
    return Math.max.apply(null,Object.values(obj));
  }

   function births(file) {
      try {
        let fileContent = fs.readFileSync(file, 'utf-8');
        let lines = fileContent.split('\n');
        console.log(lines);
        let temp = new Array();
        temp = [];
        for (let i=0; i<=99; i++){
            temp.push((lines[i].split(';')[1]).split('-')[0]);
        }
        console.log(temp);
        const count = {};
        for (const element of temp) {
            if (count[element]) {
              count[element] += 1;
            } else {
              count[element] = 1;
            }
          }
          console.log(count);
          let kulcs = Array.from(Object.keys(count));
          let ertek = Array.from(Object.values(count));
          console.log(kulcs);
          console.log(ertek);
          console.log(getMax(count));
            console.log(kulcs[ertek.indexOf(getMax(count))]);
      } catch (error) {
        return 0;
      }
    }
    
    births('./births.csv');