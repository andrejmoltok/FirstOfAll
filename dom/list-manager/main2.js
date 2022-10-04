// window.onload = displayAll;

// main DIV container for three tables
var div = document.createElement('DIV');
div.setAttribute('id','container');

// names for three tables to create
var mainData = "start,func,end".split(',');

// forEach for mainData array to generate tables
mainData.forEach((v) => {
    var x = document.createElement("TABLE");
    x.setAttribute("id", v);
    div.appendChild(x);
    document.body.appendChild(div);
});

// table variables
var startTable = document.getElementById(mainData[0]);
var funcTable = document.getElementById(mainData[1]);
var endTable = document.getElementById(mainData[2]);

// lists of content going inside of mainData tables
var startList = "bread,milk,orange,tomato".split(',');
var functionList = "Up,Add,Remove,Down".split(',');
var endList = ['test'];
const myColumns = [startList, functionList, endList];

// replacement function for 3 repetitive functions doing the same thing
function displayAll(column,index) {
    if (index === 1) {
        column[index].forEach((v) => {
            var x = document.createElement("INPUT");
            x.setAttribute("id", v);
            x.setAttribute("type", "button");
            x.value = v;
            document.getElementById(mainData[index]).appendChild(x);
        });
    } else {
        column[index].forEach((v) => {
            var z = document.createElement("TR");
            var t = document.createTextNode(v);
            z.setAttribute("id", v);
            z.appendChild(t);
            document.getElementById(mainData[index]).appendChild(z);
        });
    }
}

displayAll(myColumns,0);
displayAll(myColumns,1);
displayAll(myColumns,2);

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

const myFunc = Object.values(myOperand); 
//const myFunc = [addClicked, removeClicked, upClicked, downClicked];

//console.log(myFunc);

function myExecute(func, index) {myFunc[func](index);}

function displayCol() {
    console.log("displayCol function working...");
    console.log("start " + startList);
    console.log("functions " + functionList);
    console.log("end " + endList);

    start.addEventListener('click', function(event) {
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

    func.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'Add') {
            myExecute(1,clickedList.indexOf(true));
        }
    });
}