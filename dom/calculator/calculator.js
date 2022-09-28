function display(val) {
  document.getElementById("textval").value += val
}

function evaluation() {
  let x = document.getElementById("textval").value
  let y = eval(x)
  document.getElementById("textval").value = y
}

function clr() {
  document.getElementById("textval").value = ""
}

var tr = Array.from(document.getElementsByTagName('tr'));
console.log(tr.length);
tr[0].display = "flex";
tr[0].style.justifyContent = "flex-end";

var row1 = ['7','8','9','*'];
var row2 = ['4','5','6','/'];
var row3 = ['1','2','3','+'];
var row4 = ['0','.','=','-'];

for (let j = 0; j < row1.length; j++) {
  var button = document.createElement('input');
  var td = document.createElement('td');
  button.setAttribute('type','button');
  button.value = row1[j];
  tr[1].appendChild(td);
  td.appendChild(button);
}

for (let k = 0; k < row2.length; k++) {
  var button = document.createElement('input');
  var td = document.createElement('td');
  button.setAttribute('type','button');
  button.value = row2[k];
  tr[2].appendChild(td);
  td.appendChild(button);
}

for (let l = 0; l < row3.length; l++) {
  var button = document.createElement('input');
  var td = document.createElement('td');
  button.setAttribute('type','button');
  button.value = row3[l];
  tr[3].appendChild(td);
  td.appendChild(button);
}

for (let m = 0; m < row4.length; m++) {
  var button = document.createElement('input');
  var td = document.createElement('td');
  button.setAttribute('type','button');
  button.value = row4[m];
  tr[4].appendChild(td);
  td.appendChild(button);
}