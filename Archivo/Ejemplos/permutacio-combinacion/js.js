let txt = document.querySelectorAll("input");
let btn = document.querySelector("button");
let resultado = document.querySelector(".resultado ol");


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
// ///////////////////////////////////////////////

function allPermutations(items) {
  // allPermutations () : return a list of all possible permutations
  // Credits: https://stackoverflow.com/questions/9960908/permutations-in-javascript
  // PARAM items : array of items

  let results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];
    for (let i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  permute(items);
  return results;
}
// ///////////////////////////////////////////////

// var fruits = ["Apple", "Banana", "Coconut"];
// var permutated = allPermutations(fruits);
// console.log(permutated);


btn.addEventListener("click", function(argument) {

  // alert("HolA COLMO ESTA");

  let matriz = [];

  for (var i = 0; i < txt.length; i++) {

    if (txt[i].value.length >= 1) {
      matriz.push(txt[i].value);
    }

  }

  var permutated = allPermutations(matriz);


  console.log(permutated);
  let resultado = document.querySelector(".resultado ol");

  removeAllChildNodes(resultado);
  let lista = [];
  for (var i = 0; i < permutated.length; i++) {
    lista.push(document.createElement("li"));
    let text = permutated[i].toString();
    lista[i].textContent = text;
    resultado.appendChild(lista[i]);
  }

});