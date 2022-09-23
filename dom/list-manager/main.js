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
    lBdiv.setAttribute('id',elem);
    lBdiv.style.width = "127px";
    lBdiv.style.height = "31.5px";
    leftBox.appendChild(lBdiv);
});

var bread = document.getElementById('bread');
var milk = document.getElementById('milk');
var orange = document.getElementById('orange');
var tomato = document.getElementById('tomato');



//functions used in eventlisteners
function breadClick() {
    isClicked += "bread";
    console.log("Bread Clicked");
    bread.style.backgroundColor = "lightgray";
    bread.style.cursor = "default";
    milk.style.backgroundColor = "white";
    orange.style.backgroundColor = "white";
    tomato.style.backgroundColor = "white";
    return isClicked;
}

function milkClick() {
    isClicked += "milk";
    console.log("Milk Clicked");
    milk.style.backgroundColor = "lightgray";
    milk.style.cursor = "default";
    bread.style.backgroundColor = "white";
    orange.style.backgroundColor = "white";
    tomato.style.backgroundColor = "white";
    return isClicked;
}

function orangeClick() {
    isClicked += "orange";
    console.log("Orange Clicked");
    orange.style.backgroundColor = "lightgray";
    orange.style.cursor = "default";
    bread.style.backgroundColor = "white";
    milk.style.backgroundColor = "white";
    tomato.style.backgroundColor = "white";
    return isClicked;
}

function tomatoClick() {
    isClicked += "tomato";
    console.log("Tomato Clicked");
    tomato.style.backgroundColor = "lightgray";
    tomato.style.cursor = "default";
    milk.style.backgroundColor = "white";
    orange.style.backgroundColor = "white";
    bread.style.backgroundColor = "white";
    return isClicked;
}


//buttonBox section

//buttonAdd
buttonAdd.addEventListener('click',() => {    
    if (isClicked === "bread") {
        bread.remove();
        var breadDiv = document.createElement('div');
        leftBox.style.justifyContent = "flex-start";
        breadDiv.innerText = "bread";
        breadDiv.setAttribute('id', "bread");
        breadDiv.style.width = "127px";
        breadDiv.style.height = "31.5px";
        rightBox.appendChild(breadDiv);
        isClicked = "";
        console.log("bread added to rightBox");
    } else if (isClicked === "milk") {
        var milkDiv = document.createElement('div');
        milk.remove();
        leftBox.style.justifyContent = "flex-start";
        milkDiv.innerText = "milk";
        milkDiv.setAttribute('id', "milk");
        milkDiv.style.width = "127px";
        milkDiv.style.height = "31.5px";
        rightBox.appendChild(milkDiv);
        isClicked = "";
        console.log("milk added to rightBox");
    } else if (isClicked === "orange") {
        var orangeDiv = document.createElement('div');
        orange.remove();
        leftBox.style.justifyContent = "flex-start";
        orangeDiv.innerText = "orange";
        orangeDiv.setAttribute('id', "orange");
        orangeDiv.style.width = "127px";
        orangeDiv.style.height = "31.5px";
        rightBox.appendChild(orangeDiv);
        isClicked = "";
        console.log("orange added to rightBox");
    } else if (isClicked === "tomato") {
        var tomatoDiv = document.createElement('div');
        tomato.remove();
        leftBox.style.justifyContent = "flex-start";
        tomatoDiv.innerText = "tomato";
        tomatoDiv.setAttribute('id', "tomato");
        tomatoDiv.style.width = "127px";
        tomatoDiv.style.height = "31.5px";
        rightBox.appendChild(tomatoDiv);
        isClicked = "";
        console.log("tomato added to rightBox");
    }
});

//buttonRemove
buttonRemove.addEventListener('click',() => {    
    if (isClicked === "bread") {
        bread.remove();
        var breadDiv = document.createElement('div');
        rightBox.style.justifyContent = "flex-start";
        breadDiv.innerText = "bread";
        breadDiv.setAttribute('id', "bread");
        breadDiv.style.width = "127px";
        breadDiv.style.height = "31.5px";
        leftBox.appendChild(breadDiv);
        isClicked = "";
        console.log("bread removed from rightBox");
    } else if (isClicked === "milk") {
        var milkDiv = document.createElement('div');
        milk.remove();
        rightBox.style.justifyContent = "flex-start";
        milkDiv.innerText = "milk";
        milkDiv.setAttribute('id', "milk");
        milkDiv.style.width = "127px";
        milkDiv.style.height = "31.5px";
        leftBox.appendChild(milkDiv);
        isClicked = "";
        console.log("milk removed from rightBox");
    } else if (isClicked === "orange") {
        var orangeDiv = document.createElement('div');
        orange.remove();
        rightBox.style.justifyContent = "flex-start";
        orangeDiv.innerText = "orange";
        orangeDiv.setAttribute('id', "orange");
        orangeDiv.style.width = "127px";
        orangeDiv.style.height = "31.5px";
        leftBox.appendChild(orangeDiv);
        isClicked = "";
        console.log("orange removed from rightBox");
    } else if (isClicked === "tomato") {
        var tomatoDiv = document.createElement('div');
        tomato.remove();
        rightBox.style.justifyContent = "flex-start";
        tomatoDiv.innerText = "tomato";
        tomatoDiv.setAttribute('id', "tomato");
        tomatoDiv.style.width = "127px";
        tomatoDiv.style.height = "31.5px";
        leftBox.appendChild(tomatoDiv);
        isClicked = "";
        console.log("tomato removed from rightBox");
    }
});

//eventlisteners
bread.addEventListener('click', breadClick);
milk.addEventListener('click', milkClick);
orange.addEventListener('click', orangeClick);
tomato.addEventListener('click', tomatoClick);