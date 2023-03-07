// let tabla1 = document.createElement("table");
// let tabla2 = document.createElement("table");

// function crearfila(matriz) {

//   let fila = document.createElement("tr");

//   for (var i = 0; i < matriz.length; i++) {
//     let campo = document.createElement("td");
//     let txt_input = document.createElement("input");
//     txt_input.setAttribute("type", "text");
//     campo.appendChild(txt_input)
//     fila.appendChild(campo);

//   }
//   return fila;
// }

// let btn_fila = document.querySelector(".fila");

// btn_fila.addEventListener("change",function (arguments) {

// });
let matriz1 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
]
let matriz2 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
]

function suma(indice, valor1, valor2) {

  let resultado = parseInt(valor1) + parseInt(valor2);
  console.log("la sume del indice : " + indice + " es " + resultado);
}

function sunma_matriz(matriz1, matriz2) {
  if (matriz1.length == matriz2.length) {
    console.log('igulales');

    for (var i = 0; i < matriz1.length; i++) {
      console.log('=============================== Sumatoria para el  inidice ' + i);
      for (var j = 0; j < matriz1[i].length; j++) {
        suma(i, matriz1[i][j], matriz2[i][j]);
      }
      console.log('=============================== Fin de la Sumatoria para el  inidice ' + i);
    }
  } else {
    console.log('No son iguales');
  }
}
sunma_matriz(matriz1, matriz2);