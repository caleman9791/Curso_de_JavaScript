var nodos = document.querySelectorAll("div");
var input = document.querySelectorAll('[type="number"]');

console.log(input[0]);

input[0].addEventListener("input", function(argument) {
    exe(this.value);
})

var parrafo = [];

for (var i = 0; i < nodos[0].childNodes.length; i++) {

    if (nodos[0].childNodes[i].nodeName == "P") {
        parrafo.push(nodos[0].childNodes[i]);
    }

}
console.log(nodos[0].childNodes.length);

console.log(parrafo.length);
console.log(parrafo);

function exe(argument) {
    var newparr = document.createElement("P");

    newparr.innerHTML = "Nuevo parrafo numero " + argument;

    nodos[0].insertBefore(newparr, nodos[0].childNodes[argument]);
}