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
var functionList = "Up,>>,<<,Down".split(',');
var endList = "' ',' ',' ',' '".split(',');

// replacement function for 3 repetitive functions doing the same thing
function rendezo(list) {
    list.forEach((v) => {
        var z = document.createElement("TR");
        var t = document.createTextNode(v);
        if (v === "bread" || v === "milk" || v === "orange" || v === "tomato") {
            z.setAttribute("id", "start" + v);
            //console.log(z);
        }
        if (v === "Up" || v === ">>" || v === "<<" || v === "Down") {
            z.setAttribute("id", "func" + v);
            //console.log(z);
        }
        if (v === "' '") {
            z.setAttribute("id", "end" + v);
            //console.log(z);
        }
        z.appendChild(t);
        //console.log(t);
        if (v === "bread" || v === "milk" || v === "orange" || v === "tomato") {
            document.getElementById("startTable").appendChild(z);
        } else if (v === "Up" || v === ">>" || v === "<<" || v === "Down") {
            document.getElementById("funcTable").appendChild(z);
        } else if (v === "' '") {
            document.getElementById("endTable").appendChild(z);
        }
    });
}

rendezo(startList);
rendezo(functionList);
rendezo(endList);