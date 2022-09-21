//Írasd ki az img url-jét a konzolra.
console.log(document.querySelector('img').src);

//Cseréld le a képet egy képre a kedvenc állatodról.
document.querySelector('img').src = "https://www.azenkutyam.hu/wp-content/uploads/2020/06/gettyimages-487563270-1200x800.jpg";

//A link mutasson a Green Fox Academy honlapjára.
document.querySelector('a').href = "https://www.greenfoxacademy.com/";

//Állítsd át a második gombot, hogy ne legyen kattintható. (disable)
//Cseréld le a szövegét erre: 'Ne kattints ide!'
document.querySelectorAll('button')[1].disabled = true;
document.querySelectorAll('button')[1].innerText = "Ne kattints ide!";