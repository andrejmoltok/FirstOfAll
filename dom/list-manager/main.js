//variable definition section
var container = document.createElement('div');

var leftBox = document.createElement('div');
var buttonBox = document.createElement('div');
var rightBox = document.createElement('div');

//buttonUp
var buttonUp = document.createElement('input');
buttonUp.setAttribute('type','button');
buttonUp.value = "Up";

//buttonAdd
var buttonAdd = document.createElement('input');
buttonAdd.setAttribute('type','button');
buttonAdd.value = ">";

//buttonRemove
var buttonRemove = document.createElement('input');
buttonRemove.setAttribute('type','button');
buttonRemove.value = "X";

//buttonDown
var buttonDown = document.createElement('input');
buttonDown.setAttribute('type','button');
buttonDown.value = "Down";

//items
const items = ['bread','milk','orange','tomato'];

//isClicked empty string
var isClicked = "";


//appendChild section
document.body.appendChild(container);

container.appendChild(leftBox);
container.appendChild(buttonBox);
container.appendChild(rightBox);

buttonBox.appendChild(buttonUp);
buttonBox.appendChild(buttonAdd);
buttonBox.appendChild(buttonRemove);
buttonBox.appendChild(buttonDown);


//setAttribute section
container.setAttribute('id','container');
leftBox.setAttribute('id','leftBox');
buttonBox.setAttribute('id','buttonBox');
rightBox.setAttribute('id','rightBox');


//leftBox section
items.forEach((elem) => {
    var lBdiv = document.createElement('div');
    lBdiv.innerText = elem;
    lBdiv.setAttribute('id',elem + 'Left');
    lBdiv.style.width = "127px";
    lBdiv.style.height = "31.5px";
    leftBox.appendChild(lBdiv);
});

//id selector section
var breadLeft = document.getElementById('breadLeft');
var milkLeft = document.getElementById('milkLeft');
var orangeLeft = document.getElementById('orangeLeft');
var tomatoLeft = document.getElementById('tomatoLeft');

//eventlistener for leftBox
leftBox.addEventListener("click", function(event) {
    if (event.target && event.target.matches('#breadLeft')) {
        isClicked = "breadLeft";
        console.log("BreadLeft Clicked");
        breadLeft.style.backgroundColor = "lightgray";
        breadLeft.style.cursor = "default";
        milkLeft.style.backgroundColor = "white";
        orangeLeft.style.backgroundColor = "white";
        tomatoLeft.style.backgroundColor = "white";
        return isClicked;
    } else if (event.target && event.target.matches('#milkLeft')) {
        isClicked = "milkLeft";
        console.log("MilkLeft Clicked");
        milkLeft.style.backgroundColor = "lightgray";
        milkLeft.style.cursor = "default";
        breadLeft.style.backgroundColor = "white";
        orangeLeft.style.backgroundColor = "white";
        tomatoLeft.style.backgroundColor = "white";
        return isClicked;
    } else if (event.target && event.target.matches('#orangeLeft')) {
        isClicked = "orangeLeft";
        console.log("OrangeLeft Clicked");
        orangeLeft.style.backgroundColor = "lightgray";
        orangeLeft.style.cursor = "default";
        breadLeft.style.backgroundColor = "white";
        milkLeft.style.backgroundColor = "white";
        tomatoLeft.style.backgroundColor = "white";
        return isClicked;
    } else if (event.target && event.target.matches('#tomatoLeft')) {
        isClicked = "tomatoLeft";
        console.log("TomatoLeft Clicked");
        tomatoLeft.style.backgroundColor = "lightgray";
        tomatoLeft.style.cursor = "default";
        milkLeft.style.backgroundColor = "white";
        orangeLeft.style.backgroundColor = "white";
        breadLeft.style.backgroundColor = "white";
        return isClicked;
    }
});


//eventlistener for rightBox
rightBox.addEventListener("click", function(e) {
    if (e.target && e.target.matches("#breadRight")) {
        isClicked = "breadRight";
        console.log("BreadRight Clicked");
        breadRight.style.backgroundColor = "lightgray";
        breadRight.style.cursor = "default";
        milkRight.style.backgroundColor = "white";
        orangeRight.style.backgroundColor = "white";
        tomatoRight.style.backgroundColor = "white";
        return isClicked;
    } else if (e.target && e.target.matches("#milkRight")) {
        isClicked = "milkRight";
        console.log("MilkRight Clicked");
        milkRight.style.backgroundColor = "lightgray";
        milkRight.style.cursor = "default";
        breadRight.style.backgroundColor = "white";
        orangeRight.style.backgroundColor = "white";
        tomatoRight.style.backgroundColor = "white";
        return isClicked;
    } else if (e.target && e.target.matches("#orangeRight")) {
        isClicked = "orangeRight";
        console.log("OrangeRight Clicked");
        orangeRight.style.backgroundColor = "lightgray";
        orangeRight.style.cursor = "default";
        breadRight.style.backgroundColor = "white";
        milkRight.style.backgroundColor = "white";
        tomatoRight.style.backgroundColor = "white";
        return isClicked;
    } else if (e.target && e.target.matches("#tomatoRight")) {
        isClicked = "tomatoRight";
        console.log("TomatoRight Clicked");
        tomatoRight.style.backgroundColor = "lightgray";
        tomatoRight.style.cursor = "default";
        milkRight.style.backgroundColor = "white";
        orangeRight.style.backgroundColor = "white";
        breadRight.style.backgroundColor = "white";
        return isClicked;
    }
});

//buttonBox section

//buttonAdd
buttonAdd.addEventListener('click',function() {    
    if (isClicked === "breadLeft") {
        breadLeft.remove();
        var breadDiv = document.createElement('div');
        leftBox.style.justifyContent = "flex-start";
        breadDiv.innerText = "bread";
        breadDiv.setAttribute('id', "breadRight");
        breadDiv.style.width = "127px";
        breadDiv.style.height = "31.5px";
        rightBox.appendChild(breadDiv);
        isClicked = "";
        console.log("bread added to rightBox");
    } else if (isClicked === "milkLeft") {
        milkLeft.remove();
        var milkDiv = document.createElement('div');
        leftBox.style.justifyContent = "flex-start";
        milkDiv.innerText = "milk";
        milkDiv.setAttribute('id', "milkRight");
        milkDiv.style.width = "127px";
        milkDiv.style.height = "31.5px";
        rightBox.appendChild(milkDiv);
        isClicked = "";
        console.log("milk added to rightBox");
    } else if (isClicked === "orangeLeft") {
        orangeLeft.remove();
        var orangeDiv = document.createElement('div');
        leftBox.style.justifyContent = "flex-start";
        orangeDiv.innerText = "orange";
        orangeDiv.setAttribute('id', "orangeRight");
        orangeDiv.style.width = "127px";
        orangeDiv.style.height = "31.5px";
        rightBox.appendChild(orangeDiv);
        isClicked = "";
        console.log("orange added to rightBox");
    } else if (isClicked === "tomatoLeft") {
        tomatoLeft.remove();
        var tomatoDiv = document.createElement('div');
        leftBox.style.justifyContent = "flex-start";
        tomatoDiv.innerText = "tomato";
        tomatoDiv.setAttribute('id', "tomatoRight");
        tomatoDiv.style.width = "127px";
        tomatoDiv.style.height = "31.5px";
        rightBox.appendChild(tomatoDiv);
        isClicked = "";
        console.log("tomato added to rightBox");
    }
});

//buttonRemove
buttonRemove.addEventListener('click',function() {    
    if (isClicked === "breadRight") {
        breadRight.remove();
        var breadDiv = document.createElement('div');
        rightBox.style.justifyContent = "flex-start";
        breadDiv.innerText = "milk";
        breadDiv.setAttribute('id', "milkLeft");
        breadDiv.style.width = "127px";
        breadDiv.style.height = "31.5px";
        leftBox.appendChild(breadDiv);
        isClicked = "";
        console.log("bread removed from rightBox");
    } else if (isClicked === "milkRight") {
        milkRight.remove();
        var milkDiv = document.createElement('div');
        rightBox.style.justifyContent = "flex-start";
        milkDiv.innerText = "milk";
        milkDiv.setAttribute('id', "milkLeft");
        milkDiv.style.width = "127px";
        milkDiv.style.height = "31.5px";
        leftBox.appendChild(milkDiv);
        isClicked = "";
        console.log("milk removed from rightBox");
    } else if (isClicked === "orangeRight") {
        orangeRight.remove();
        var orangeDiv = document.createElement('div');
        rightBox.style.justifyContent = "flex-start";
        orangeDiv.innerText = "orange";
        orangeDiv.setAttribute('id', "orangeLeft");
        orangeDiv.style.width = "127px";
        orangeDiv.style.height = "31.5px";
        leftBox.appendChild(orangeDiv);
        isClicked = "";
        console.log("orange removed from rightBox");
    } else if (isClicked === "tomatoRight") {
        tomatoRight.remove();
        var tomatoDiv = document.createElement('div');
        rightBox.style.justifyContent = "flex-start";
        tomatoDiv.innerText = "tomato";
        tomatoDiv.setAttribute('id', "tomatoLeft");
        tomatoDiv.style.width = "127px";
        tomatoDiv.style.height = "31.5px";
        leftBox.appendChild(tomatoDiv);
        isClicked = "";
        console.log("tomato removed from rightBox");
    }
});

// buttonDown.addEventListener("click", function() {
//     if (isClicked == "breadRight") {
//         breadRight.parentNode.insertBefore(breadRight, breadRight.nextSibling);
//     }
// });