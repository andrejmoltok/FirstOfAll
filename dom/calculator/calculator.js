// evaluation function run count
var count = 0;

// functions used in calculation
function display(val) {
  document.getElementById("textval").value += val;
  return val;
}

function evaluation() {
  let x = document.getElementById("textval").value;
  let y = eval(x);
  document.getElementById("textval").value = y;
  return count++;
}

function sqrt() {
  let x = document.getElementById("textval").value;
  let y = Math.sqrt(x);
  document.getElementById("textval").value = y;
  return count++;
}

function clr() {
  document.getElementById("textval").value = "";
}

// populating calculator with functional buttons
var tr = Array.from(document.getElementsByTagName('tr'));

var row0 = ['%','x**2','x**y','gyök'];
var row1 = ['*','7','8','9'];
var row2 = ['/','4','5','6'];
var row3 = ['+','1','2','3'];
var row4 = ['-','.','0','='];

for (let i = 0; i < row0.length; i++) {
  var button = document.createElement('input');
  var td = document.createElement('td');
  button.setAttribute('type','button');
  button.value = row0[i];
  tr[1].appendChild(td);
  td.appendChild(button);
}

for (let j = 0; j < row1.length; j++) {
  var button = document.createElement('input');
  var td = document.createElement('td');
  button.setAttribute('type','button');
  button.value = row1[j];
  tr[2].appendChild(td);
  td.appendChild(button);
}

for (let k = 0; k < row2.length; k++) {
  var button = document.createElement('input');
  var td = document.createElement('td');
  button.setAttribute('type','button');
  button.value = row2[k];
  tr[3].appendChild(td);
  td.appendChild(button);
}

for (let l = 0; l < row3.length; l++) {
  var button = document.createElement('input');
  var td = document.createElement('td');
  button.setAttribute('type','button');
  button.value = row3[l];
  tr[4].appendChild(td);
  td.appendChild(button);
}

for (let m = 0; m < row4.length; m++) {
  var button = document.createElement('input');
  var td = document.createElement('td');
  button.setAttribute('type','button');
  button.value = row4[m];
  tr[5].appendChild(td);
  td.appendChild(button);
}

// all TD's created and selecting only functional ones
var TDs = Array.from(document.getElementsByTagName('input'));
var selectTDs = TDs.slice(6,TDs.length);

// background colors for td's
for (let b = 6; b < TDs.length; b+=4) {
  TDs[b].style.backgroundColor = "lightslategrey";
  TDs[b].style.color = "white";
}

TDs[0].style.backgroundColor = "lightslategrey";
TDs[0].style.color = "white";
TDs[2].style.backgroundColor = "lightslategrey";
TDs[2].style.color = "white";
TDs[3].style.backgroundColor = "lightslategrey";
TDs[3].style.color = "white"; 
TDs[4].style.backgroundColor = "lightslategrey";
TDs[4].style.color = "white"; 
TDs[5].style.backgroundColor = "lightslategrey";
TDs[5].style.color = "white";

TDs[7].style.backgroundColor = "lightskyblue";
TDs[8].style.backgroundColor = "lightskyblue";
TDs[9].style.backgroundColor = "lightskyblue";
TDs[11].style.backgroundColor = "lightskyblue";
TDs[12].style.backgroundColor = "lightskyblue";
TDs[13].style.backgroundColor = "lightskyblue";
TDs[15].style.backgroundColor = "lightskyblue";
TDs[16].style.backgroundColor = "lightskyblue";
TDs[17].style.backgroundColor = "lightskyblue";
TDs[19].style.backgroundColor = "lightskyblue";
TDs[20].style.backgroundColor = "lightskyblue";
TDs[21].style.backgroundColor = "lightskyblue";

// add eventlistener to selected TD's
for (let a = 0; a < selectTDs.length-1; a++) {
  console.log(selectTDs[a].value);
  selectTDs[a].addEventListener('click',function() {
    check();
    display(selectTDs[a].value);
    count = 0;
  });
}

// modulo operator
TDs[2].addEventListener('click',function() {
  check();
  display(TDs[2].value);
  count = 0;
});

// power of 2 operator
TDs[3].addEventListener('click',function() {
  check();
  display("**2");
  count = 0;
});

// power of something else operator
TDs[4].addEventListener('click',function() {
  check();
  display("**");
  count = 0;
});

// square root operator
TDs[5].addEventListener('click',function() {
  check();
  sqrt();
});

// do the calc
selectTDs[15].addEventListener('click',function() {
  evaluation();
});

// check how many times evaluation function has run
function check() {
  if (count > 0) {
    clr();
  }
}