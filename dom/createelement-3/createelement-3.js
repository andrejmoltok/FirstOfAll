const kids = [
    { 'petName': 'Wattled crane', 'owner': 'Bryant' },
    { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
    { 'petName': 'Mynah, common', 'owner': 'Nelie' },
    { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
    { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
    { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
    { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
    { 'petName': 'Bison, american', 'owner': 'Tommie' },
    { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
    { 'petName': 'Carpet snake', 'owner': 'Veda' },
    { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
  ];

  kids.forEach((elem) => {
    var main = document.getElementsByTagName('main')[0];
    var article = document.createElement('article');
    var h3 = document.createElement('h3');
    var p = document.createElement('p');

    h3.textContent = elem.owner;
    p.textContent = elem.petName;
    
    article.appendChild(h3);
    article.appendChild(p);
    main.appendChild(article);
});

// kids.forEach((elem) => console.log(elem.owner));
