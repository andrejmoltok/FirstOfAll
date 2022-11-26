'use strict'

const myInput = document.getElementById('myInput');
const elemCount = document.getElementById('elemCount');
const mySubmit = document.getElementById('mySubmit');

const myDiv = document.getElementById('myDiv');

const main = document.getElementById('main');

main.style.margin = "auto";
main.style.display = "flex";
main.style.flexFlow = "row nowrap";
main.style.justifyContent = "center";

myDiv.style.width = "200px";
myDiv.style.display = "flex";
myDiv.style.flexFlow = "column wrap";

mySubmit.style.margin = "18px 0px";

mySubmit.addEventListener('click',function() {
    let output = [];
    let arr = myInput.value;
    arr = arr.split(',');
    while (arr[0]) {
        output.push(arr.splice(0,elemCount.value));        
    }
    output[0].map((col,c) => output.map((row,r) => output[r][c] = Number(output[r][c])))
    const container = document.getElementById('container');
    if (container.children.length === 0) {
      myMx(output);
    } else {
      document.getElementById('mutate1').remove();
      document.getElementById('mutate2').remove();
      document.getElementById('mutate3').remove();
      document.getElementById('mutate4').remove();
      document.getElementById('mutate5').remove();
      document.getElementById('mutate6').remove();
      document.getElementById('mutate7').remove();
      document.getElementById('mutate8').remove();
      myMx(output);
    }
});

function myMx(mX) {

  //console.log(mX);
  // console.log(mX[0].map((col, c) => mX.map((row, r) => mX[r][c])));
  // console.log(mX[0].map((col, c) => mX.map((row, r) => mX[mX.length - 1 - r][c])));
  // console.log(mX[0].map((col, c) => mX.map((row, r) => mX[r][mX[0].length - 1 - c])));
  // console.log(mX[0].map((col, c) => mX.map((row, r) => mX[mX.length - 1 - r][mX[0].length - 1 - c])));
  
  // console.log(mX.map((row, r) => mX[0].map((col, c) => mX[r][c])));
  // console.log(mX.map((row, r) => mX[0].map((col, c) => mX[mX.length - 1 - r][c])));
  // console.log(mX.map((row, r) => mX[0].map((col, c) => mX[r][mX[0].length - 1 - c])));
  // console.log(mX.map((row, r) => mX[0].map((col, c) => mX[mX.length - 1 - r][mX[0].length - 1 - c])));

  const container = document.getElementById('container');
  container.style.width = "800px";
  container.style.height = "200px";
  container.style.display = "flex";
  container.style.flexDirection = "row";
    
  for (let j = 1; j <= 8; j++) {
    const out = document.createElement('DIV');
    out.setAttribute('id', 'mutate'+j);
    out.style.width = "100px";
    out.style.height = "200px";
    container.appendChild(out);

    const myPara = document.createElement('P');
    myPara.style.textAlign = "center";
    myPara.innerText = "Forgatás  " + j;
    out.appendChild(myPara);

    if (j < 5) {
    mX[0].map(function(col, c) {
      const myTbl = document.createElement('TABLE'+j);
      const myTr = document.createElement('TR'+j);
      myTbl.style.margin = "auto";
      myTbl.style.border = "1px solid black";
      myTbl.style.borderCollapse = "collapse";
      mX.map((row, r) => {
        for (let i = 1; i <= 4; i++) {
            document.createElement('TD' + i);
        }
        document.getElementById('TD1').style.width = "10px";
        document.getElementById('TD1').style.border = "1px solid black";
        document.getElementById('TD2').style.width = "10px";
        document.getElementById('TD2').style.border = "1px solid black";
        document.getElementById('TD3').style.width = "10px";
        document.getElementById('TD3').style.border = "1px solid black";
        document.getElementById('TD4').style.width = "10px";
        document.getElementById('TD4').style.border = "1px solid black";
        document.getElementById('TD1').innerText = mX[mX.length - 1 - r][c];
        document.getElementById('TD2').innerText = mX[r][c];
        document.getElementById('TD3').innerText = mX[r][mX[0].length - 1 - c];
        document.getElementById('TD4').innerText = mX[mX.length - 1 - r][mX[0].length - 1 - c];
        document.getElementById('TR1').appendChild('TD1');
        document.getElementById('TR2').appendChild('TD2');
        document.getElementById('TR3').appendChild('TD3');
        document.getElementById('TR4').appendChild('TD4');
        });
        myTbl.appendChild('TR1');
        myTbl.appendChild('TR2');
        myTbl.appendChild('TR3');
        myTbl.appendChild('TR4');
        document.getElementById('mutate1').appendChild(myTbl);
        document.getElementById('mutate2').appendChild(myTbl);
        document.getElementById('mutate3').appendChild(myTbl);
        document.getElementById('mutate4').appendChild(myTbl);
      });
    }
  }


  
  
  
  
  mX[0].map(function(col, c) {
    const myTbl = document.createElement('TABLE');
    const myTr = document.createElement('TR');
    myTbl.style.margin = "auto";
    myTbl.style.border = "1px solid black";
    myTbl.style.borderCollapse = "collapse";
    mX.map((row, r) => {
      
    });
    myTbl.appendChild(myTr);
    document.getElementById('mutate2').appendChild(myTbl);
  });

  mX[0].map(function(col, c) {
    const myTbl = document.createElement('TABLE');
    const myTr = document.createElement('TR');
    myTbl.style.margin = "auto";
    myTbl.style.border = "1px solid black";
    myTbl.style.borderCollapse = "collapse";
    mX.map((row, r) => {
      const myTd = document.createElement('TD');
      myTd.style.width = "10px";
      myTd.style.border = "1px solid black";
      
      myTr.appendChild(myTd);
    });
    myTbl.appendChild(myTr);
    document.getElementById('mutate3').appendChild(myTbl);
  });

  mX[0].map(function(col, c) {
    const myTbl = document.createElement('TABLE');
    const myTr = document.createElement('TR');
    myTbl.style.margin = "auto";
    myTbl.style.border = "1px solid black";
    myTbl.style.borderCollapse = "collapse";
    mX.map((row, r) => {
      const myTd = document.createElement('TD');
      myTd.style.width = "10px";
      myTd.style.border = "1px solid black";
      
      myTr.appendChild(myTd);
    });
    myTbl.appendChild(myTr);
    document.getElementById('mutate4').appendChild(myTbl);
  });

  mX.map(function(row, r) {
    const myTbl = document.createElement('TABLE');
    const myTr = document.createElement('TR');
    myTbl.style.margin = "auto";
    myTbl.style.border = "1px solid black";
    myTbl.style.borderCollapse = "collapse";
    mX[0].map((col, c) => {
      const myTd = document.createElement('TD');
      myTd.style.width = "10px";
      myTd.style.border = "1px solid black";
      myTd.innerText = mX[r][c];
      myTr.appendChild(myTd);
    });
    myTbl.appendChild(myTr);
    document.getElementById('mutate5').appendChild(myTbl);
  });

  mX.map(function(row, r) {
    const myTbl = document.createElement('TABLE');
    const myTr = document.createElement('TR');
    myTbl.style.margin = "auto";
    myTbl.style.border = "1px solid black";
    myTbl.style.borderCollapse = "collapse";
    mX[0].map((col, c) => {
      const myTd = document.createElement('TD');
      myTd.style.width = "10px";
      myTd.style.border = "1px solid black";
      myTd.innerText = mX[mX.length - 1 - r][c];
      myTr.appendChild(myTd);
    });
    myTbl.appendChild(myTr);
    document.getElementById('mutate6').appendChild(myTbl);
  });

  mX.map(function(row, r) {
    const myTbl = document.createElement('TABLE');
    const myTr = document.createElement('TR');
    myTbl.style.margin = "auto";
    myTbl.style.border = "1px solid black";
    myTbl.style.borderCollapse = "collapse";
    mX[0].map((col, c) => {
      const myTd = document.createElement('TD');
      myTd.style.width = "10px";
      myTd.style.border = "1px solid black";
      myTd.innerText = mX[r][mX[0].length - 1 - c];
      myTr.appendChild(myTd);
    });
    myTbl.appendChild(myTr);
    document.getElementById('mutate7').appendChild(myTbl);
  });

  mX.map(function(row, r) {
    const myTbl = document.createElement('TABLE');
    const myTr = document.createElement('TR');
    myTbl.style.margin = "auto";
    myTbl.style.border = "1px solid black";
    myTbl.style.borderCollapse = "collapse";
    mX[0].map((col, c) => {
      const myTd = document.createElement('TD');
      myTd.style.width = "10px";
      myTd.style.border = "1px solid black";
      myTd.innerText = mX[mX.length - 1 - r][mX[0].length - 1 - c];
      myTr.appendChild(myTd);
    });
    myTbl.appendChild(myTr);
    document.getElementById('mutate8').appendChild(myTbl);
  });
}