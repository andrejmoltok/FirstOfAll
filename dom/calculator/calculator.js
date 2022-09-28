var count = 0;

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

var TDs = Array.from(document.getElementsByTagName('input'));
var selectTDs = TDs.slice(6,TDs.length);

for (let a = 0; a < selectTDs.length-1; a++) {
  console.log(selectTDs[a].value);
  selectTDs[a].addEventListener('click',function() {
    check();
    display(selectTDs[a].value);
    count = 0;
  });
}

TDs[2].addEventListener('click',function() {
  check();
  display(TDs[2].value);
  count = 0;
});

TDs[3].addEventListener('click',function() {
  check();
  display("**2");
  count = 0;
});

TDs[4].addEventListener('click',function() {
  check();
  display("**");
  count = 0;
});

TDs[5].addEventListener('click',function() {
  check();
  sqrt();
});

selectTDs[15].addEventListener('click',function() {
  evaluation();
});

function check() {
  if (count > 0) {
    clr();
  }
}