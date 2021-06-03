// ==========================================================================
// ===================================================================================
//  Selección de botones  puede ser por id  por clases e incluso hacerlo desde le html 
var textbox = document.querySelectorAll("[type=text]");
var btn = document.getElementById('btn');
// ===================================================================================

for (var i = 0; i < textbox.length; i++) {
    console.log(textbox[i]);
}

// ======================================================================================
// ======================================================================================
// ======================================================================================
// ======================================================================================

btn.onclick = function() {

    // Los parámetros son los valores de los input del html
    validaform(textbox[0].value, textbox[1].value, textbox[2].value, textbox[3].value);
}
// =====================================================================================

function validaform(idu, edad, corru, contru) {
    // si algún campo esta vació entrara en este if
    if (idu === "" || edad === "" || corru === "" || contru === "" || idu === null || edad === null || corru === null || contru === null) {

        console.log('Algo esta vacío');
        return false;

    } else {

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //  las condiciones dentro se deben cumplir 
        if ((idu.length >= 5 && idu.length <= 20) && (edad.length == 2 && Number.isInteger(parseInt(edad)) == true) && (contru.length >= 5 && contru.length <= 20) && (corru.match(mailformat))) {

            console.log('Éxito');
            return false;
        } else {

            console.log('Algo mal');
            return false;
        }

    }

}

// ======================================================================================
// ======================================================================================
// ======================================================================================
// ======================================================================================

// ======================================================================
// las mimas condicionales de arriba pero separadas para entenderás mejor 
// =====================================================================
if ((idu.length >= 5 && idu.length <= 20)) {
    console.log('id >> true');

}
// ----------------------------------------------
// Number.isInteger(parseInt(edad)) == true)
// Esta función { Number.isInteger() } verifica si es un entero el valor de la edad cuando lo pasamos a entero
// parseInt();
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
// https://www.w3schools.com/jsref/jsref_parseInt.asp

// ----------------------------------------------
if ((edad.length == 2 && Number.isInteger(parseInt(edad)) == true)) {
    console.log('edad >> true');

}
//  url especificando esta validación de correo 
if ((corru.match(mailformat))) {
    console.log('mail >> true');

}
if ((contru.length >= 5 && contru.length <= 20)) {
    console.log('pass >> true');

}
// ======================================================================
// =====================================================================

// var inputText = "coreo@lol.com";

// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if (inputText.match(mailformat)) {
//     console.log('si')
// } else {
//     console.log('no')
// }
// ==========================================================================

// function vRegistro(idu, edad, corru, contru) {
// var idu, edad, corru, contru;
// var patron = "/\/";

// idu = document.getElelementById("id_usuario").value;
// edad = document.getElementById("Edad").value;
// corru = document.getElelementById("Correo_usuario").value;
// contru = document.getElelementById("Contraseña_usuario").value;

//     if (idu === "" || edad === "" || corru === "" || contru === "" || idu === null || edad === null || corru === null || contru === null) {

//         console.log("Rellene los campos vacios");
//         return false;

//     } else if (edad.length > 2) {

//         console.log("La edad debe tener solo dos caracteres");
//         return false;
//     } else if (idu.length > 20 || idu.length < 5) {

//         console.log("El usuario debe tener entre 5 a 20 caracteres");

//         return false;
//     } else if (isNaN(edad)) {
//         console.log("La edad debe ser un numero, master");
//         return false;
//     }
//     return false;
// }

// vRegistro("idull", 10, "corru", "contru");

// ============================================================================================