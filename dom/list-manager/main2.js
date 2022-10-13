// lists of content going inside of mainData tables
var startList = "bread,milk,orange,tomato,apple,salt".split(',');
var functionList = "Up,Add,Remove,Down".split(',');
var endList = [];
const myColumns = [startList, functionList, endList];

// main DIV container for three tables
var div = document.createElement('DIV');
div.setAttribute('id','container');
document.body.appendChild(div);

function clicked(elem) {
  clickedList = new Array(startList.length).fill(false);
  clickedList[elem] = true;
  console.log(clickedList);
  return clickedList.indexOf(true);
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
		clicked(item);
	},

	remove: (item) => {
		endList.splice(item, 1);
		startList.push(endList[item]);
		clicked(item);
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

function displayCol(column) {
	console.log("displayCol function working...");
	console.log("start " + startList);
	console.log("functions " + functionList);
	console.log("end " + endList);

}


function displayAll() {
	const tabla = document.createElement("TABLE");
	const tTest = document.createElement("TBODY");
	for (let i = 0; i < Math.max(startList.length, functionList.length, endList.length); i++) { //rows
		const sor = document.createElement("TR");
	    for (let j = 0; j < myColumns.length; j++) { //columns
				//console.log(myColumns.length + " - " + j);
		    const cella = document.createElement("TD");
		    const cellaAdat = document.createTextNode(`${myColumns[j][i] ?? " "}`);
		    cella.appendChild(cellaAdat);
		    sor.appendChild(cella);
	  }
	  tTest.appendChild(sor);
	}
  
	tabla.appendChild(tTest);
	tabla.setAttribute("border", "2");
	tabla.setAttribute("border-collapse","collapse");
	div.appendChild(tabla);
  }

  displayAll();