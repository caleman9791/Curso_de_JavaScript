// 
// =================================================
//  Seleccione de elementos 
// -------------------------------------------------
//  Seleccionamos los elementos HTML por su id
let imagen = document.getElementById('imagen');
let boton = document.getElementById('boton');

//  Clocamos algo de CSS al botón 
boton.style.backgroundColor = "green";
boton.style.borderRadius = "75px";

//  Creamos el evento  para que cuando 
// el usuario haga click con el ratón 
// se dispare la función 
boton.onclick = function() {

    cambiaImagen(this); // Llamada ala función 
};

//  Creamos la función que debemos llamar en el evento 
function cambiaImagen(btn_parametro) {
    // Declaramos una variable y le pasamos el valor del parámetro
    let btn = btn_parametro;

    //  Disparamos el argumento en consola para saber si todo va bien 
    console.log(btn);
    //  Aplicamos condiciones 

    // En este condicional buscamos si el color de fondo del botón es rojo 
    // entones se realizaran las instrucciones dentro de las llaves 
    if (btn.style.backgroundColor == "red") {

        //  Instrucciones si el color de fondo del botón es rojo 
        btn.style.backgroundColor = "green";

        //  Cambiamos la imagen para que parezca que bombilla esta apagada 
        imagen.src = "img/pic_bulboff.gif";

    }
    //  Si la primera condición no se cumple entones 
    // verificamos si el color de fondo del botón en verde 
    //  entonces se realizara  lo que hay dentro de las llaves 
    else if (btn.style.backgroundColor == "green") {

        //  Aplicamos color de fondo rojo al botón 
        btn.style.backgroundColor = "red";

        // Cambiamos la imagen para quier parezca prendida la bombilla 
        imagen.src = "img/pic_bulbon.gif";
    }
}