// lists of content going inside of mainData tables
var startList = "bread,milk,orange,tomato".split(','); //,apple,salt,honey,beer
var functionList = "Up,Add,Remove,Down".split(',');
var endList = [];
const myColumns = [startList, functionList, endList];

// main DIV container for three tables
var div = document.createElement('DIV');
div.setAttribute('id','container');
div.style.display = "flex";
div.style.justifyContent = "center";
document.body.appendChild(div);

var clickedStartList = new Array(startList.length).fill(false);
function clickedStart(elem) {
  clickedStartList[elem] = true;
  console.log(clickedStartList);
	//return clickedStartList;
}

var clickedEndList = new Array(endList.length).fill(false);
function clickedEnd(elem) {
  clickedEndList[elem] = true;
  console.log(clickedEndList);
	//return clickedEndList;
}

function unclickStart() {clickedStartList = new Array(startList.length).fill(false);}
function unclickEnd() {clickedEndList = new Array(endList.length).fill(false);}

const myOperand = {
	up: (item) => {
		if(item != 0) {
			var temp = startList[item];
			startList[item] = startList[item - 1];
			startList[item - 1] = temp;    
			clickedEnd(item - 1);
		} else {clickedEnd(0);}
	},

	add: (item) => {
		endList.push(startList[item]);
		startList.splice(item, 1); 
		unclickStart();   
		clickedStart(0);
	},

	remove: (item) => {
		startList.push(endList[item]);
		endList.splice(item, 1);
		unclickEnd();
		clickedEnd(0);
	},

	down: (item) => {
		if(item != startList.length-1) {
			var temp = startList[item];
			startList[item] = startList[item + 1];
			startList[item + 1] = temp;
			clickedEnd(item + 1);
		} else {clickedEnd(startList.length-1);}
	},
};

const myFunc = Object.values(myOperand); 
//const myFunc = [addClicked, removeClicked, upClicked, downClicked];

//console.log(myFunc);

function myExecute(func, index) {myFunc[func](index);}

function displayCol(/*column*/) {
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
		// div.style sets dimensions of container div dinamically
		div.style.maxWidth = "225px";
		div.style.height = `${Math.max(startList.length, functionList.length, endList.length)*24 + 
			(Math.max(startList.length, functionList.length, endList.length)*3)}px`;
		//
	    for (let j = 0; j < myColumns.length; j++) { //columns
				//console.log(myColumns.length + " - " + j);
		    const cella = document.createElement("TD");
		    const cellaAdat = document.createTextNode(`${myColumns[j][i] ?? ""}`);
				// create selectable id's for eventlisteners
				if (myColumns[j][i] === undefined) {
					// create nothing - DONE
				} else if (j == 1) {
					cella.setAttribute('id',myColumns[j][i]);
				}
				if (j == 0) {
					cella.setAttribute('onclick',`clickedStart(${i})`);
				} else if (j == 2) {
					myColumns[j][i] == undefined ? "" : cella.setAttribute('onclick',`clickedEnd(${i})`);
				}
		    cella.appendChild(cellaAdat);
		    sor.appendChild(cella);
	  }
	  tTest.appendChild(sor);
	}
	tabla.appendChild(tTest);
	div.appendChild(tabla);
}

function clearAll() {
	document.getElementsByTagName('TABLE')[0].remove();	
}

displayAll();

let upMe = document.getElementById('Up');
let addMe = document.getElementById('Add');
let removeMe = document.getElementById('Remove');
let downMe = document.getElementById('Down');

addMe.addEventListener('click', function() {
	myExecute(1,clickedStartList.indexOf(true));
	clearAll();
	displayAll();
	displayCol();
	unclickStart();
});