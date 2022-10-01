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
console.log(startList);
var functionList = "Up,>>,<<,Down".split(',');
console.log(functionList);
var endList = " , , , ".split(',');
console.log(endList);

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

// var startTable = document.getElementById('startTable');
var funcTable = document.getElementById('funcTable');
// var endTable = document.getElementById('endTable');
