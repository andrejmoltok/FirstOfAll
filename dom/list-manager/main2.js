window.onload = displayAll;

// main DIV container for three tables
var div = document.createElement('DIV');
div.setAttribute('id','container');

// names for three tables to create
var mainData = "start,function,end".split(',');

// forEach for mainData array to generate tables
mainData.forEach((v) => {
    var x = document.createElement("TABLE");
    x.setAttribute("id", v);
    div.appendChild(x);
    document.body.appendChild(div);
});

// table variables
var startTable = document.getElementById('start');
var funcTable = document.getElementById('func');
var endTable = document.getElementById('end');

// lists of content going inside of mainData tables
var startList = "bread,milk,orange,tomato".split(',');
var functionList = "Up,Add,Remove,Down".split(',');
var endList = [];

// replacement function for 3 repetitive functions doing the same thing
function rendezo(list) {
    list.forEach((v) => {
        var z = document.createElement("TR");
        var t = document.createTextNode(v);
        if (list === startList) {
            z.setAttribute("id", v);
            z.appendChild(t);
            document.getElementById("start").appendChild(z);
        } else if (list === functionList) {
            var x = document.createElement("INPUT");
            x.setAttribute("id", v);
            x.setAttribute("type", "button");
            x.value = v;
            document.getElementById("function").appendChild(x);
        } else if (list === endList) {
            z.setAttribute("id", v);
            z.appendChild(t);
            document.getElementById("end").appendChild(z);}
});
}

rendezo(startList);
rendezo(functionList);
rendezo(endList);

function clicked(elem) {
  clickedList = new Array(startList.length).fill(false);
  clickedList[elem] = true;
  console.log(clickedList);
  return clickedList;
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

const myFunc = Array.from(Object.values(myOperand)); 
//const myFunc = [addClicked, removeClicked, upClicked, downClicked];

function myExecute(func, index) {myFunc[func](index);}

function displayAll() {
    console.log("start " + startList);
    console.log("functions " + functionList);
    console.log("end " + endList);

    startTable.addEventListener('click', function(event) {
        if (event.target && event.target.id === startList[0]) {
            unclick();
            if (startList.includes("milk") || startList.includes("orange") || startList.includes("tomato")) {
                document.getElementById('milk').style.backgroundColor = "white";
                document.getElementById('orange').style.backgroundColor = "white";
                document.getElementById('tomato').style.backgroundColor = "white";
            }
            document.getElementById('bread').style.backgroundColor = "lightgray";
            clicked(0);
        } else if (event.target && event.target.id === startList[1]) {
            unclick();
            if (startList.includes("bread") || startList.includes("orange") || startList.includes("tomato")) {
                document.getElementById('bread').style.backgroundColor = "white";
                document.getElementById('orange').style.backgroundColor = "white";
                document.getElementById('tomato').style.backgroundColor = "white";
            }
            document.getElementById('milk').style.backgroundColor = "lightgray";
            clicked(1);
        } else if (event.target && event.target.id === startList[2]) {
            unclick();
            if (startList.includes("bread") || startList.includes("milk") || startList.includes("tomato")) {
                document.getElementById('bread').style.backgroundColor = "white";
                document.getElementById('milk').style.backgroundColor = "white";
                document.getElementById('tomato').style.backgroundColor = "white";
            }
            document.getElementById('orange').style.backgroundColor = "lightgray";
            clicked(2);
        } else if (event.target && event.target.id === startList[3]) {
            unclick();
            if (startList.includes("bread") || startList.includes("milk") || startList.includes("orange")) {
                document.getElementById('bread').style.backgroundColor = "white";
                document.getElementById('milk').style.backgroundColor = "white";
                document.getElementById('orange').style.backgroundColor = "white";
            }
            document.getElementById('tomato').style.backgroundColor = "lightgray";
            clicked(3);
        }
    });

    funcTable.addEventListener('click', function(event) {

    });
}