// const matriz = ['a', 'b', 'c'];

// const literable_matriz =
//   matriz[Symbol.iterator]();

// const resultado_caracter =
//   document.getElementById('resultado_caracter');

// // Su navegador debe ser compatible con for..of loop
// // y variables de alcance permitido en bucles for
// // también se pueden usar const y var

// for (let caracter of literable_matriz) {

//   const lista = document.createElement('li');

//   lista.textContent = caracter;

//   resultado_caracter.appendChild(lista);

// }


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function iteraddor_modal(argument) {


  const matriz = argument;

  const literable_matriz =
    matriz[Symbol.iterator]();

  const resultado_caracter =
    document.querySelector('#resultado_caracter ol');

  removeAllChildNodes(resultado_caracter);

  // Su navegador debe ser compatible con for..of loop
  // y variables de alcance permitido en bucles for
  // también se pueden usar const y var

  for (let caracter of literable_matriz) {

    const lista = document.createElement('li');

    lista.textContent = caracter;

    resultado_caracter.appendChild(lista);

  }

}


var arr = ['a', 'b', 'c', 'd', 'e'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // a
console.log(eArr.next().value); // b
console.log(eArr.next().value); // c
console.log(eArr.next().value); // d
console.log(eArr.next().value); // e


function logIterable(it) {
  if (!(Symbol.iterator in Object.getPrototypeOf(it)
      /* or "Symbol.iterator in Object.__proto__"
         or "it[Symbol.iterator]" */
    )) {
    console.log(it, ' is not an iterable object...');
    return;
  }

  var iterator = it[Symbol.iterator]();
  // your browser must support for..of loop
  // and let-scoped variables in for loops
  // const and var could also be used
  for (let letter of iterator) {
    console.log(letter);
  }
}

// Array
logIterable(['a', 'b', 'c']);
// a
// b
// c

// string
logIterable('abc');
// a
// b
// c

logIterable(123);
// 123 " is not an iterable object..."