// 
// =================================================
//  Selecion de elementos 
// -------------------------------------------------

let myImage = document.getElementById('myImage');
let myImage2 = document.getElementById('myImage2');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

// =================================================

// =================================================
// Estado inicial de las etiquetas img
// -------------------------------------------------

myImage.src = "../../../img/001.png";
myImage2.src = "../../../img/002.png";

// =================================================

// =================================================
//  Eventos en los Botones 
// -------------------------------------------------

btn1.onclick = function() {
    cambiaImagen(1);
};

btn2.onclick = function() {
    cambiaImagen(2);
};

// =================================================
//  Funcion para cambiar las url 
// -------------------------------------------------

function cambiaImagen(argument) {

    //  Condicional para cambiar l;as url 

    if (argument == 1) {

        myImage.src = "../../../img/001.png";
        myImage2.src = "../../../img/002.png";

    } else if (argument == 2) {

        myImage.src = "../../../img/002.png";
        myImage2.src = "../../../img/001.png";
    }

    // console.log('ok ' + argument);
}