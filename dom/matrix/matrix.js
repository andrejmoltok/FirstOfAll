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

  const myPara = document.createElement('P');
  myPara.style.textAlign = "center";
  myPara.innerText = "Input Matrix";
  inBox.appendChild(myPara);

  for (let i = 0; i < mX.length; i++) {
    const myPara = document.createElement('P');
    myPara.style.textAlign = "center";
    if (i == 0) {
      myPara.innerText += "[[" + mX[i] + "],";
    }
    else if (i > 0 && i < mX.length-1) {
      myPara.innerText += "[" + mX[i] + "],";
    }
    else if (i == mX.length-1) {
      myPara.innerText += "[" + mX[i] + "]]";
    }
    
    inBox.appendChild(myPara);
  }

  for (let j = 1; j <= 8; j++) {
    const out = document.createElement('DIV');
    out.setAttribute('id', 'mutate'+j);
    out.style.width = "100px";
    out.style.height = "200px";
    container.appendChild(out);

    const myPara2 = document.createElement('P');
    myPara2.style.textAlign = "center";
    myPara2.innerText = "Mutate " + j;
    out.appendChild(myPara2);
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
