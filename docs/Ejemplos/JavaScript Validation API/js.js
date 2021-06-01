// Seleccionamos  el elemento botón por su id 
let btn_aceptar = document.getElementById("btn_aceptar");

//  Agregamos el evento click  y una función anónima  como segundo 
// parámetro del método addEventListener
btn_aceptar.addEventListener("click", function(argument) {
    //  Seleccionamos el elemento d enterada
    let entrada_numero = document.getElementById("entrada_numero");

    // Empleamos el método checkValidity para validar 
    // si esta o no validar el elemento de entrada  por lo que empleamos el 
    // condicional if para tomar la decisión del mensaje que enviaremos el usuario 
    if (entrada_numero.checkValidity()) {

        document.getElementById("desplegar").innerHTML = "Perfecto, esta bine validado!";

    } else {

        document.getElementById("desplegar").innerHTML = entrada_numero.validationMessage;
    }
});

// Referencias 
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity