// names for three tables to create
var mainData = "start,func,end".split(',');

// main DIV container for three tables
var div = document.createElement('DIV');
div.setAttribute('id','container');

// forEach for mainData array to generate tables
mainData.forEach((v) => {
    var x = document.createElement("TABLE");
    x.setAttribute("id", v + "Table");
    div.appendChild(x);
    document.body.appendChild(div);
});

// startFunction to create rows inside each of the mainData tables
function startFunction(item) {
    var z = document.createElement("TR");
    var t = document.createTextNode(item);
    z.setAttribute("id", "start" + item);
    z.appendChild(t);
    document.getElementById("startTable").appendChild(z);
}

//funcFunction to create functional buttons to move list items
function funcFunction(item) {
    var z = document.createElement("TR");
    var t = document.createTextNode(item);
    z.setAttribute("id", "func" + item);
    z.appendChild(t);
    document.getElementById("funcTable").appendChild(z);
}

// endFunction to create empty table for future content
function endFunction(item) {
    var z = document.createElement("TR");
    var t = document.createTextNode(item);
    z.setAttribute("id", "endTr");
    z.appendChild(t);
    document.getElementById("endTable").appendChild(z);
}

// lists of content going inside of mainData tables
var startList = "bread,milk,orange,tomato".split(',');
var functionList = "Up,>>,<<,Down".split(',');
var endList = "' ',' ',' ',' '".split(',');

// forEach function for startList content
startList.forEach((v) => {
    startFunction(v);
});

// forEach function for functionList content
functionList.forEach((v) => {
    funcFunction(v);
});

// forEach function for endList future content
endList.forEach((v) => {
    endFunction(v);
});