var allPara = Array.from(document.getElementsByTagName('p'));
//console.log(allPara);

// 1.
for (let i = 0; i < allPara.length-1; i++) {
    var lastElemmContent = allPara[allPara.length-1].textContent;
    allPara[i].textContent = lastElemmContent;
}

// 2.
var lastElemmContent = allPara[allPara.length-1].innerHTML;
allPara.forEach((elem) => {elem.innerHTML = lastElemmContent;});

