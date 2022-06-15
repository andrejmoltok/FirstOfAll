// - Create a map where the keys are strings and the values are strings with the
//   following initial values

//   | Key               | Value                   |
//   | :---------------- | :---------------------- |
//   | 978-1-60309-452-8 | A Letter to Jo          |
//   | 978-1-60309-459-7 | Lupus                   |
//   | 978-1-60309-444-3 | Red Panda and Moon Bear |
//   | 978-1-60309-461-0 | The Lab                 |

let dbMap = new Map();
let dbMapKeys = ["978-1-60309-452-8", "978-1-60309-459-7", "978-1-60309-444-3", "978-1-60309-461-0"];
let dbMapValues = ["A Letter to Jo", "Lupus", "Red Panda and Moon Bear", "The Lab"];

for (let i=0;i<dbMapKeys.length;i++){
    dbMap.set(dbMapKeys[i],dbMapValues[i]);
}

// - Print all the key-value pairs in the following format
//   ```text
//   A Letter to Jo (ISBN: 978-1-60309-452-8)
//   Lupus (ISBN: 978-1-60309-459-7)
//   Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
//   The Lab (ISBN: 978-1-60309-461-0)
//   ```
for (let k=0;k<dbMapKeys.length;k++){
    console.log(dbMapValues[k]+" (ISBN: "+dbMapKeys[k]+")");
}

// - Remove the key-value pair with key 978-1-60309-444-3
dbMap.delete('978-1-60309-444-3');
console.log("ISBN: 978-1-60309-444-3 torolve: ",dbMap);

// - Remove the key-value pair with value The Lab
let valami = "The Lab";

// console.log(Array.from(dbMap.keys())[Array.from(dbMap.values()).indexOf(valami)]);

//dbMap.keys() keszit egy iteratort amit Array.from-mal tombbe alakitunk azert,
//hogy ki tudjuk valasztani a kulcsokhoz tartozo ertekeket ugy
//hogy szogletes zarojelben a dbmap.values() iteratort mis tombbe alakitjuk
//es lekerjuk a keresett ertek kulcsat indexOf metodussal
//a kulcsokbol kikeressuk keresett ertek indexet

let kulcsIter = Array.from(dbMap.keys());
let ertekIter = Array.from(dbMap.values());

console.log("`The Lab` ertek kulcsa torolve: ",
            dbMap.delete(kulcsIter[ertekIter.indexOf(valami)]));

// - Add the following key-value pairs to the map

//   | Key               | Value                 |
//   | :---------------- | :-------------------- |
//   | 978-1-60309-450-4 | They Called Us Enemy  |
//   | 978-1-60309-453-5 | Why Did We Trust Him? |

let newdbMapKeys = ["978-1-60309-450-4", "978-1-60309-453-5"];
let newdbMapValues = ["They Called Us Enemy", "Why Did We Trust Him?"];

dbMap.set("978-1-60309-450-4","They Called Us Enemy")
    .set("978-1-60309-453-5","Why Did We Trust Him?");

console.log(dbMap);

// - Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log("Van hozzarendelt ertek a 478-0-61159-424-8 kulcshoz? ",(dbMap.has('478-0-61159-424-8'))? 1:0);

// - Print the value associated with key 978-1-60309-453-5
console.log("Van hozzarendelt ertek a 978-1-60309-453-5 kulcshoz? ",dbMap.get('978-1-60309-453-5'));