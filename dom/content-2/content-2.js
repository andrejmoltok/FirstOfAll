var myUL = Array.from(document.body.getElementsByTagName('ul'))[0];
var myLI = Array.from(myUL.children);

console.log(myLI);

var arr = ['apple', 'banana', 'cat', 'dog'];

for (let i = 0; i < myLI.length; i++) {
    myLI[i].textContent = arr[i]; // innerHTML works as well
}

document.getElementsByClassName('limegreen')[0].style.backgroundColor = "limegreen";