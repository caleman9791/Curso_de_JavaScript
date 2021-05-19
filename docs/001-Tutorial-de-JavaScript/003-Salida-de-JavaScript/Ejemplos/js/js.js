var btninput = document.createElement("input");
var btnbutton = document.createElement("button");
var atttype = document.createAttribute("type");

atttype.value = "button";
btninput.setAttributeNode(atttype);
btninput.value = "input creado";
btnbutton.innerHTML = "Boton creado";

document.body.appendChild(btnbutton);
document.body.appendChild(btninput);

var botones = document.querySelectorAll("input");

for (var i = 0; i < botones.length; i++) {
    console.log(botones[i]);
}

// =======================================================
// document.getElementById("demo").innerHTML = 5 + 6;

// document.write(5 + 6);

function ejecutaalerta(argument) {
    window.alert(5 + 6);
}

// console.log(5 + 6);
// window.print()

function myFunction() {

    var myWindow = window.open("", "MsgWindow", "width=500,height=300");
    myWindow.document.write("<p> Escribimos un parafo dentro de una ventana nueva </p>");
    myWindow.document.body.appendChild(btninput);
}