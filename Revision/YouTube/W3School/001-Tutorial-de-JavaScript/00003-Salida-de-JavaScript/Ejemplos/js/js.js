let print = document.querySelector(".print");
let nueva_ventana = document.querySelector(".nueva_ventana");
let alerta = document.querySelector(".alerta");
let escribe_documento = document.querySelector(".escribe_documento");

print.addEventListener("click", function(argument) {
    window.print();
});

nueva_ventana.addEventListener("click", function(argument) {
    myFunction();
});

alerta.addEventListener("click", function(argument) {
    window.alert("ESto es una alerta");
});

escribe_documento.addEventListener("click", function(argument) {
    document.write("Escribieendoe en el documento");
});

// console.log(5 + 6);
// window.print()

function myFunction() {

    let myWindow = window.open("", "MsgWindow", "width=500,height=300");
    // myWindow.document.write("<p> Escribimos un parafo dentro de una ventana nueva </p>");

    console.log("hola");

    console.log(myWindow);
    let btninput = document.createElement("input");
    let btnbutton = document.createElement("button");
    let atttype = document.createAttribute("type");

    atttype.value = "button";
    btninput.setAttributeNode(atttype);
    btninput.value = "input creado";
    btnbutton.innerHTML = "Boton creado";

    myWindow.document.body.appendChild(btnbutton);
    myWindow.document.body.appendChild(btninput);

}