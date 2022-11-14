let Mx4x2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
];
let Mx3x3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

//All the 8 possibilities to reverse && / || mirror && / || rotate a matrix:

function myMx(mX) {
    
  console.log(mX[0].map((col, c) => mX.map((row, r) => mX[r][c])));
  console.log(mX[0].map((col, c) => mX.map((row, r) => mX[mX.length - 1 - r][c])));
  console.log(mX[0].map((col, c) => mX.map((row, r) => mX[r][mX[0].length - 1 - c])));
  console.log(mX[0].map((col, c) => mX.map((row, r) => mX[mX.length - 1 - r][mX[0].length - 1 - c])));
  
  console.log(mX.map((row, r) => mX[0].map((col, c) => mX[r][c])));
  console.log(mX.map((row, r) => mX[0].map((col, c) => mX[mX.length - 1 - r][c])));
  console.log(mX.map((row, r) => mX[0].map((col, c) => mX[r][mX[0].length - 1 - c])));
  console.log(mX.map((row, r) => mX[0].map((col, c) => mX[mX.length - 1 - r][mX[0].length - 1 - c])));

  const container = document.getElementById('container');
  container.style.margin = "auto";
  container.style.width = "1000px";
  container.style.height = "200px";
  container.style.display = "flex";
  container.style.flexDirection = "row";

  const inBox = document.createElement('DIV');
  inBox.style.width = "100px";
  inBox.style.height = "200px";
  container.appendChild(inBox);

  const myTbl = document.createElement('TABLE');
  myTbl.style.width = "100px";
  myTbl.style.textAlign = "center";
  myTbl.style.borderCollapse = "separate";
  myTbl.style.border = "1px solid black";
  // const tblTH = document.createElement('P');
  // tblTH.style.width = "50px";
  // const text = document.createTextNode("Input Matrix");
  // tblTH.appendChild(text);
  // myTbl.appendChild(tblTH);
  inBox.appendChild(myTbl);

  
  for (let i = 0; i < mX.length; i++) {
    const myTR = document.createElement('TR');
    for (let j = 0; j < mX[i].length; j++) {
      const myTD = document.createElement('TD');
      myTD.style.width = "20px";
      myTD.style.border = "1px solid black";
      const data = document.createTextNode(`${mX[i][j]}`);
      myTD.appendChild(data);
      myTR.appendChild(myTD);
    }
    myTbl.appendChild(myTR);
  }
  

  for (let j = 1; j <= 8; j++) {
    const out = document.createElement('DIV');
    out.setAttribute('id', 'mutate'+j);
    out.style.width = "100px";
    out.style.height = "200px";
    container.appendChild(out);

    const myTbl2 = document.createElement('TABLE');
    myTbl2.style.textAlign = "center";
    myTbl2.innerText = "Mutate " + j;
    out.appendChild(myTbl2);
  }

  mX[0].map(function(col, c) {
    const myPara = document.createElement('P');
    myPara.style.textAlign = "center";
    myPara.innerText = mX.map((row, r) => mX[r][c]);
    document.getElementById('mutate1').appendChild(myPara);
  });
  
  mX[0].map(function(col, c) {
    const myPara = document.createElement('P');
    myPara.style.textAlign = "center";
    myPara.innerText = mX.map((row, r) => mX[mX.length - 1 - r][c]);
    document.getElementById('mutate2').appendChild(myPara);
  });

  mX[0].map(function(col, c) {
    const myPara = document.createElement('P');
    myPara.style.textAlign = "center";
    myPara.innerText = mX.map((row, r) => mX[r][mX[0].length - 1 - c]);
    document.getElementById('mutate3').appendChild(myPara);
  });

  mX[0].map(function(col, c) {
    const myPara = document.createElement('P');
    myPara.style.textAlign = "center";
    myPara.innerText = mX.map((row, r) => mX[mX.length - 1 - r][mX[0].length - 1 - c]);
    document.getElementById('mutate4').appendChild(myPara);
  });

  mX.map(function(row, r) {
    const myPara = document.createElement('P');
    myPara.style.textAlign = "center";
    myPara.innerText = mX[0].map((col, c) => mX[r][c]);
    document.getElementById('mutate5').appendChild(myPara);
  });

  mX.map(function(row, r) {
    const myPara = document.createElement('P');
    myPara.style.textAlign = "center";
    myPara.innerText = mX[0].map((col, c) => mX[mX.length - 1 - r][c]);
    document.getElementById('mutate6').appendChild(myPara);
  });

  mX.map(function(row, r) {
    const myPara = document.createElement('P');
    myPara.style.textAlign = "center";
    myPara.innerText = mX[0].map((col, c) => mX[r][mX[0].length - 1 - c]);
    document.getElementById('mutate7').appendChild(myPara);
  });

  mX.map(function(row, r) {
    const myPara = document.createElement('P');
    myPara.style.textAlign = "center";
    myPara.innerText = mX[0].map((col, c) => mX[mX.length - 1 - r][mX[0].length - 1 - c]);
    document.getElementById('mutate8').appendChild(myPara);
  });
}
