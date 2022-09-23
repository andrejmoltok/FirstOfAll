var king = document.getElementById('b325').innerHTML;
console.log(king);

var businessLamp = document.getElementsByClassName('big');
console.log(businessLamp[0].innerHTML);
console.log(businessLamp[1].innerHTML);

var conceitedKing = document.getElementsByClassName('container')[0].getElementsByClassName('asteroid');
alert(conceitedKing[0].innerHTML);
alert(conceitedKing[1].innerHTML);

var noBusiness = document.body.getElementsByClassName('asteroid');
console.log("Asteroid ",noBusiness[0].innerHTML);
console.log("Asteroid ",noBusiness[1].innerHTML);
console.log("Asteroid ",noBusiness[2].innerHTML);