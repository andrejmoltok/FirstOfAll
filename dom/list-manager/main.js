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
var endList = [];
//console.log(endList);

// replacement function for 3 repetitive functions doing the same thing
function rendezo(list) {
    list.forEach((v) => {
        var z = document.createElement("TR");
        var t = document.createTextNode(v);
        if (v === "bread" || v === "milk" || v === "orange" || v === "tomato") {
            z.setAttribute("id", "start" + v);
            //console.log(z);
            z.appendChild(t);
            document.getElementById("startTable").appendChild(z);
        }
        if (v === "Up" || v === "Add" || v === "Remove" || v === "Down") {
            var x = document.createElement("INPUT");
            x.setAttribute("id", "func" + v);
            x.setAttribute("type", "button");
            x.value = v;
            document.getElementById("funcTable").appendChild(x);
            //console.log(z);
        }
        if (list === endList) {
            z.setAttribute("id", "end" + v);
            //console.log(z);
            z.appendChild(t);
            document.getElementById("endTable").appendChild(z);
        }
    });
}

rendezo(startList);
rendezo(functionList);
rendezo(endList);

// table variables
var startTable = document.getElementById('startTable');
var funcTable = document.getElementById('funcTable');
var endTable = document.getElementById('endTable');

var startList = "bread,milk,orange,tomato".split(',');
var functionList = "Up,Add,Remove,Down".split(',');
var endList = [];

function clicked(elem) {
  clickedList = new Array(startList.length).fill(false);
  clickedList[elem] = true;
}

function unclick() {clickedList = new Array(startList.length).fill(false);}

const myOperand = {
    up: (item) => {
        if(item != 0) {
            var temp = startList[item];
            startList[item] = startList[item - 1];
            startList[item - 1] = temp;    
            clicked(item - 1);
        } else {clicked(0);}
    },

    add: (item) => {
        endList.push(startList[item]);
        startList.splice(item, 1);    
        clicked(0);
    },

    remove: (item) => {
        startList.splice(item, 1);    
        clicked(0);
    },

    down: (item) => {
        if(item != startList.length-1) {
            var temp = startList[item];
            startList[item] = startList[item + 1];
            startList[item + 1] = temp;
            clicked(item + 1);
        } else {clicked(startList.length-1);}
    },
};

const myFunc = Object.values(myOperand); 
//const myFunc = [addClicked, removeClicked, upClicked, downClicked];

function myExecute(func, index) {myFunc[func](index);}

function displayAll() {
    console.log("start " + startList);
    console.log("clicked " + clickedList);
    console.log("functions " + functionList);
    console.log("end " + endList);
}