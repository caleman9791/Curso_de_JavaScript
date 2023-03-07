const matriz =
  ['0', '1', '2', '3', '4'];

// // Copiar para index 0 el elemento en el índice 3
// console.log(matriz.copyWithin(0, 3, 4));
// // Array ["d", "b", "c", "d", "e"]

// // Copiar al índice 1 Todos los elementos 
// // desde el índice 3 hasta el final
// console.log(matriz.copyWithin(1, 3));
// // Array ["d", "d", "e", "d", "e"]

let btn = document.querySelector(".btn_ver");
let txt_param1 = document.querySelector(".param1");
let txt_param2 = document.querySelector(".param2");
let txt_param3 = document.querySelector(".param3");

btn.addEventListener("click", function(arguments) {

  let temp_param = [];
  let param = [];
  param1 = txt_param1.value;
  param2 = txt_param2.value;
  param3 = txt_param3.value;
  temp_param = [param1, param2, param3];
  console.log(temp_param);
  for (var i = 0; i < temp_param.length; i++) {
    if (temp_param[i]) {
      param.push(temp_param[i]);
    }

  }
  console.log(param);

  console.log(matriz.copyWithin(...param));
});