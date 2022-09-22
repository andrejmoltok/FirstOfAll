var asteroids = document.getElementsByClassName('asteroids')[0];

var greenFox = document.createElement('li');
greenFox.innerHTML = "The Green Fox";
asteroids.appendChild(greenFox);

var lampLighter = document.createElement('li');
lampLighter.innerHTML = "The LampLighter";
asteroids.appendChild(lampLighter);

var container = document.getElementsByClassName('container')[0];
var heading = document.createElement('h1');
heading.textContent = "I can add elements to the DOM!";
container.appendChild(heading);

var sn = document.createElement('img');
sn.src = "https://pbs.twimg.com/profile_images/1483334272102858753/3KkgDgAI_400x400.jpg";
container.appendChild(sn);