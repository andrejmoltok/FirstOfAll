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

const myFunc = Object.values(myOperand); //const myFunc = [addClicked, removeClicked, upClicked, downClicked];
function myExecute(func, index) {myFunc[func](index);}

function displayAll() {
    console.log("start " + startList);
    console.log("clicked " + clickedList);
    console.log("functions " + functionList);
    console.log("end " + endList);
}

funcTable.addEventListener('click', hozzaAdas);

function hozzaAdas() {
    
    if (selected(0)) {

        // create a newList variable from startList.splice configuration
        var removed = startList.splice(0,1);

        // set endList first element to startList first element
        endList[0] = removed;

        // console.log(newList);
        // console.log(startList);
        // console.log(endList);

        // delete all rows inside startTable for regeneration process
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);

        //regenerate startTable with contents of newList variable
        rendezo(startList);

        // generate endTable with new content added from startTable and startList
        rendezo(endList);

        // highlight next element in startTable made from newList array
        if (startList[0] === "milk") {
           
            document.getElementById('startmilk').style.backgroundColor = "lightgray";
        } else if (startList[0] === "orange") {
           
            document.getElementById('startorange').style.backgroundColor = "lightgray";
        } else if (startList[0] === "tomato") {
            
            document.getElementById('starttomato').style.backgroundColor = "lightgray";
        }

    }
    
    if (selected(1)) {

        // create a newList variable from startList.splice configuration
        var removed = startList.splice(startList.indexOf(startList[1]),1);

        // set endList first element to startList first element
        endList[0] = removed;

        // console.log(newList);
        // console.log(startList);
        // console.log(endList);

        // delete all rows inside startTable for regeneration process
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);

        //regenerate startTable with contents of newList variable
        rendezo(startList);

        // generate endTable with new content added from startTable and startList
        rendezo(endList);

        // highlight next element in startTable made from newList array
        if (startList[0] === "bread") {
            document.getElementById('startbread').style.backgroundColor = "lightgray";
            selected(0);
        } else if (startList[0] === "orange") {
            document.getElementById('startorange').style.backgroundColor = "lightgray";
            selected(2);
        } else if (startList[0] === "tomato") {
            document.getElementById('starttomato').style.backgroundColor = "lightgray";
            selected(3);
        }

    }
    
    if (selected(2)) {

        // create a newList variable from startList.splice configuration
        // ezt azért használtam mert változhat hogy hanyadik indexen marad
        // a többi elem a startListben
        var removed = startList.splice(startList.indexOf(startList[2]),1);

        // set endList first element to startList first element
        endList[0] = removed;

        // console.log(newList);
        // console.log(startList);
        // console.log(endList);

        // delete all rows inside startTable for regeneration process
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);

        //regenerate startTable with contents of newList variable
        rendezo(startList);

        // generate endTable with new content added from startTable and startList
        rendezo(endList);

        // highlight next element in startTable made from newList array
        if (startList[0] === "bread") {
            document.getElementById('startbread').style.backgroundColor = "lightgray";
           
        } else if (startList[0] === "milk") {
            document.getElementById('startmilk').style.backgroundColor = "lightgray";
           
        } else if (startList[0] === "tomato") {
            document.getElementById('starttomato').style.backgroundColor = "lightgray";
          
        }

    }
    
    if (selected(3)) {

        // create a newList variable from startList.splice configuration
        var removed = startList.splice(startList.indexOf(startList[3]),1);

        // set endList first element to startList first element
        endList[0] = removed;

        // console.log(newList);
        // console.log(startList);
        // console.log(endList);

        // delete all rows inside startTable for regeneration process
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);

        //regenerate startTable with contents of newList variable
        rendezo(startList);

        // generate endTable with new content added from startTable and startList
        rendezo(endList);

        // highlight next element in startTable made from newList array
        if (startList[0] === "bread") {
            document.getElementById('startbread').style.backgroundColor = "lightgray";
          
        } else if (startList[0] === "milk") {
            document.getElementById('startmilk').style.backgroundColor = "lightgray";
           
        } else if (startList[0] === "orange") {
            document.getElementById('startorange').style.backgroundColor = "lightgray";
           
        }

    }
}
