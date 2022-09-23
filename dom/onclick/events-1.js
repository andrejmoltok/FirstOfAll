var myDIV = document.getElementsByTagName('div')[0];

function party() {
     
    if (myDIV.className == "") {
        myDIV.setAttribute("class","party");
    } else {
        myDIV.removeAttribute("class");
    }
    console.log(myDIV.className);
}

console.log(myDIV.className);
