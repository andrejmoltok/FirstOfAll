var allPara = Array.from(document.getElementsByTagName('p'));
console.log(allPara[3].hasAttribute("dolphin"));
if (allPara[3].hasAttribute("dolphin")) {
    for (let i = 0; i < allPara.length; i++) {
        if (allPara[i].className == "apple") {
            allPara[i].textContent = "pear";
        }
    }
}
console.log(allPara[0].className == "apple");
if (allPara[0].classname == "apple") {
    for (let i = 0; i < allPara.length; i++) {
        if (allPara[i].className == "cat") {
            allPara[i].textContent = "dog";
        }
    }
}

console.log(document.getElementsByClassName('cat')[0]);

document.getElementsByClassName('apple')[0].setAttribute("class","red");

console.log(allPara);

document.getElementsByClassName('balloon')[0].setAttribute("style","border-radius:20%;");

console.log(allPara);