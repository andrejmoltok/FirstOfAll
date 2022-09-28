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
        isClicked = "bread";
        console.log("Bread Clicked");
        breadLeft.style.backgroundColor = "lightgray";
        breadLeft.style.cursor = "default";
        milkLeft.style.backgroundColor = "white";
        orangeLeft.style.backgroundColor = "white";
        tomatoLeft.style.backgroundColor = "white";
        return isClicked;
    } else if (event.target && event.target.matches('#milkLeft')) {
        isClicked = "milk";
        console.log("Milk Clicked");
        milkLeft.style.backgroundColor = "lightgray";
        milkLeft.style.cursor = "default";
        breadLeft.style.backgroundColor = "white";
        orangeLeft.style.backgroundColor = "white";
        tomatoLeft.style.backgroundColor = "white";
        return isClicked;
    } else if (event.target && event.target.matches('#orangeLeft')) {
        isClicked = "orange";
        console.log("Orange Clicked");
        orangeLeft.style.backgroundColor = "lightgray";
        orangeLeft.style.cursor = "default";
        breadLeft.style.backgroundColor = "white";
        milkLeft.style.backgroundColor = "white";
        tomatoLeft.style.backgroundColor = "white";
        return isClicked;
    } else if (event.target && event.target.matches('#tomatoLeft')) {
        isClicked = "tomato";
        console.log("Tomato Left Clicked");
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
        isClicked = "bread";
        console.log("Bread Clicked");
        breadRight.style.backgroundColor = "lightgray";
        breadRight.style.cursor = "default";
        milkRight.style.backgroundColor = "white";
        orangeRight.style.backgroundColor = "white";
        tomatoRight.style.backgroundColor = "white";
        return isClicked;
    } else if (e.target && e.target.matches("#milkRight")) {
        isClicked = "milk";
        console.log("Milk Clicked");
        milkRight.style.backgroundColor = "lightgray";
        milkRight.style.cursor = "default";
        breadRight.style.backgroundColor = "white";
        orangeRight.style.backgroundColor = "white";
        tomatoRight.style.backgroundColor = "white";
        return isClicked;
    } else if (e.target && e.target.matches("#orangeRight")) {
        isClicked = "orange";
        console.log("Orange Right Clicked");
        orangeRight.style.backgroundColor = "lightgray";
        orangeRight.style.cursor = "default";
        breadRight.style.backgroundColor = "white";
        milkRight.style.backgroundColor = "white";
        tomatoRight.style.backgroundColor = "white";
        return isClicked;
    } else if (e.target && e.target.matches("#tomatoRight")) {
        isClicked = "tomato";
        console.log("Tomato Right Clicked");
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
    if (isClicked === "bread") {
        var breadDiv = document.createElement('div');
        breadLeft.remove();
        leftBox.style.justifyContent = "flex-start";
        breadDiv.innerText = "bread";
        breadDiv.setAttribute('id', "breadRight");
        breadDiv.style.width = "127px";
        breadDiv.style.height = "31.5px";
        rightBox.appendChild(breadDiv);
        isClicked = "";
        console.log("bread added to rightBox");
    } else if (isClicked === "milk") {
        var milkDiv = document.createElement('div');
        milkLeft.remove();
        leftBox.style.justifyContent = "flex-start";
        milkDiv.innerText = "milk";
        milkDiv.setAttribute('id', "milkRight");
        milkDiv.style.width = "127px";
        milkDiv.style.height = "31.5px";
        rightBox.appendChild(milkDiv);
        isClicked = "";
        console.log("milk added to rightBox");
    } else if (isClicked === "orange") {
        var orangeDiv = document.createElement('div');
        orangeLeft.remove();
        leftBox.style.justifyContent = "flex-start";
        orangeDiv.innerText = "orange";
        orangeDiv.setAttribute('id', "orangeRight");
        orangeDiv.style.width = "127px";
        orangeDiv.style.height = "31.5px";
        rightBox.appendChild(orangeDiv);
        isClicked = "";
        console.log("orange added to rightBox");
    } else if (isClicked === "tomato") {
        var tomatoDiv = document.createElement('div');
        tomatoLeft.remove();
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
    if (isClicked === "bread") {
        var breadDiv = document.createElement('div');
        breadRight.remove();
        rightBox.style.justifyContent = "flex-start";
        breadDiv.innerText = "milk";
        breadDiv.setAttribute('id', "milkLeft");
        breadDiv.style.width = "127px";
        breadDiv.style.height = "31.5px";
        leftBox.appendChild(breadDiv);
        isClicked = "";
        console.log("bread removed from rightBox");
    } else if (isClicked === "milk") {
        var milkDiv = document.createElement('div');
        milkRight.remove();
        rightBox.style.justifyContent = "flex-start";
        milkDiv.innerText = "milk";
        milkDiv.setAttribute('id', "milkLeft");
        milkDiv.style.width = "127px";
        milkDiv.style.height = "31.5px";
        leftBox.appendChild(milkDiv);
        isClicked = "";
        console.log("milk removed from rightBox");
    } else if (isClicked === "orange") {
        var orangeDiv = document.createElement('div');
        orangeRight.remove();
        rightBox.style.justifyContent = "flex-start";
        orangeDiv.innerText = "orange";
        orangeDiv.setAttribute('id', "orangeLeft");
        orangeDiv.style.width = "127px";
        orangeDiv.style.height = "31.5px";
        leftBox.appendChild(orangeDiv);
        isClicked = "";
        console.log("orange removed from rightBox");
    } else if (isClicked === "tomato") {
        var tomatoDiv = document.createElement('div');
        tomatoRight.remove();
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

buttonDown.addEventListener("click", function() {

});