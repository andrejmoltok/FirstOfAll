function h1Changer() {

    var allHeading1 = document.querySelectorAll('h1');

    // for (let i = 0; i < allHeading1.length; i++) {
    //     allHeading1[i].textContent = "Green Fox Academy Conquers the World";
    // }
    
    allHeading1.forEach((elem) => {elem.textContent = "Green Fox Academy Conquers the World"})
}

function anyH1Changer() {

    var anyHeading1 = window.document.querySelectorAll('h1');

    for (let j = 0; j < anyHeading1.length; j++) {
        anyHeading1[j].textContent = "Green Fox Academy Conquers the World";
    }

}