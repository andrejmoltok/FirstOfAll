const planetData = [
    {
      category: 'inhabited',
      content: 'Foxes',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Whales and Rabbits',
      asteroid: true,
    },
    {
      category: 'uninhabited',
      content: 'Baobabs and Roses',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Giant monsters',
      asteroid: false,
    },
    {
      category: 'inhabited',
      content: 'Sheep',
      asteroid: true,
    },
];

var asteroids = document.getElementsByClassName('asteroids')[0];
console.log(asteroids);

var king = document.getElementsByTagName('li')[0].remove();

for (let i = 0; i < planetData.length; i++) {
    if (planetData[i].asteroid === true) {
        var myLI = document.createElement('li');
        myLI.setAttribute('class', planetData[i].category)
        myLI.innerHTML = planetData[i].content;
        asteroids.appendChild(myLI);
    }
}

console.log(asteroids.children);