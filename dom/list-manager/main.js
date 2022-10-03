// main DIV container for three tables
var div = document.createElement('DIV');
div.setAttribute('id','container');

// names for three tables to create
var mainData = "start,func,end".split(',');

// forEach for mainData array to generate tables
mainData.forEach((v) => {
    var x = document.createElement("TABLE");
    x.setAttribute("id", v + "Table");
    div.appendChild(x);
    document.body.appendChild(div);
});

// lists of content going inside of mainData tables
var startList = "bread,milk,orange,tomato".split(',');
//console.log(startList);
var functionList = "Up,Add,Remove,Down".split(',');
//console.log(functionList);
var endList = " , , , ".split(',');
//console.log(endList);

// replacement function for 3 repetitive functions doing the same thing
function rendezo(list) {
    list.forEach((v) => {
        var z = document.createElement("TR");
        var t = document.createTextNode(v);
        if (list === startList) {
            //v === "bread" || v === "milk" || v === "orange" || v === "tomato"
            z.setAttribute("id", "start" + v);
            //console.log(z);
            z.appendChild(t);
        }
        if (list === functionList) {
            //v === "Up" || v === ">>" || v === "<<" || v === "Down"
            var x = document.createElement("INPUT");
            x.setAttribute("id", "func" + v);
            x.setAttribute("type", "button");
            x.value = v;
            //console.log(z);
        }
        if (list === endList) {
            //v === "' '"
            z.setAttribute("id", "end" + v);
            //console.log(z);
            z.appendChild(t);
        }
        
        //console.log(t);
        if (list === startList) {
            //v === "bread" || v === "milk" || v === "orange" || v === "tomato"
            document.getElementById("startTable").appendChild(z);
        } else if (list === functionList) {
            //v === "Up" || v === ">>" || v === "<<" || v === "Down"
            document.getElementById("funcTable").appendChild(x);
        } else if (list === endList) {
            //v === "' '"
            document.getElementById("endTable").appendChild(z);
        }
    });
}

rendezo(startList);
rendezo(functionList);
rendezo(endList);

var startTable = document.getElementById('startTable');
var funcTable = document.getElementById('funcTable');
var endTable = document.getElementById('endTable');

startTable.addEventListener('click', kivalaszto);

function kivalaszto(event) {
    // set initial backgroundColor for selected element within startTable
    document.getElementById('startbread').style.backgroundColor = "white";
    document.getElementById('startmilk').style.backgroundColor = "white";
    document.getElementById('startorange').style.backgroundColor = "white";
    document.getElementById('starttomato').style.backgroundColor = "white";
    //console.log(startTable.children);

    // set default cursor style for elements within startTable
    document.getElementById('startbread').style.cursor = "default";
    document.getElementById('startmilk').style.cursor = "default";
    document.getElementById('startorange').style.cursor = "default";
    document.getElementById('starttomato').style.cursor = "default";

    // selected element gets `lightgray` backgroundColor
    if (event.target && event.target.id === 'startbread') {
        document.getElementById('startbread').style.backgroundColor = "lightgray";
        console.log("EVT = ",event.target.id);
        console.log(startTable.children[0].id);
    } else if (event.target && event.target.matches('#startmilk')) {
        document.getElementById('startmilk').style.backgroundColor = "lightgray";
        console.log("EVT = ",event.target);
        console.log(startTable.children[1].id);
    } else if (event.target && event.target.matches('#startorange')) {
        document.getElementById('startorange').style.backgroundColor = "lightgray";
        console.log("EVT = ",event.target);
        console.log(startTable.children[2].id);
    } else if (event.target && event.target.matches('#starttomato')) {
        document.getElementById('starttomato').style.backgroundColor = "lightgray";
        console.log("EVT = ",event.target);
        console.log(startTable.children[3].id);
    }
    return event.target.id;
}

funcTable.addEventListener('click', hozzaAdas);

function hozzaAdas(event) {
    if (event.target === startTable.children[0].id) {
        var sL = startList.splice(startList.indexOf(startList[0]) + 1,startList.length);
        console.log(removed);
        startTable.deleteRow(0);
        startTable.deleteRow(1);
        startTable.deleteRow(2);
        startTable.deleteRow(3);
        rendezo(sL);
    }
}

// var removed = startList.splice(startList.indexOf(startList[0]) + 1,startList.length);
// console.log(removed);