// El método filter() crea una nueva matriz con todos 
// los elementos que pasan la prueba implementada 
// por la función proporcionada.

function isBigEnough(value) {
  return value >= 10
}

let filtered =
  [12, 5, 8, 130, 44].filter(isBigEnough);

// filtered is [12, 130, 44]

console.log(filtered);
let modal =
  document.getElementById("modal");
let cerrar =
  document.querySelector(".cerrar");

let agregar =
  document.querySelector(".agregar");

agregar.addEventListener("click", function(argument) {

  modal.style.display = "block";
});
cerrar.addEventListener("click", function(argument) {

  modal.style.display = "none";
});