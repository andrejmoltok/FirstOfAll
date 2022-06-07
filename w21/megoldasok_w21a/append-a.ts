// -  Create an array variable named `animals`
//    with the following content:
// `["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill",
// "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"]`
//
// -  Add all elements an `"a"` at the end

//Hosszabb megoldas

    // let animals:string[] = ["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill",
    // "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"];
    // for (var i=0;i<animals.length;i++){
    //     console.log(animals[i] + 'a');
    // }
    
//Array method megoldas
let animals:string[] = ["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill",
"hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"];

let appendA = animals.map((v,i,a) => (v+'a'));

console.log(appendA);