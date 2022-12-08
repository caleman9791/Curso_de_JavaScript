// concat()
// concat(value0)
// concat(value0, value1)
// concat(value0, value1, ... , valueN)

function ejemplo1(arguments) {
  // Podemos concatenar los valores de una matriz con otra. 
  // Los valores se agregan después que terminan los de 
  // la matriz a la que se le aplica la función concat();
  console.log('Ejemplo 1');
  const letras = ['a', 'b', 'c'];
  const numeros = [1, 2, 3];
  const children = letras.concat(numeros);
  // const alfa_numerico = letras.concat(numeros);
  console.log(children);
  // results in ['a', 'b', 'c', 1, 2, 3]
}
// ejemplo1();

function ejemplo2(arguments) {

  console.log('Ejemplo 2');
  const num1 = [1, 2, 3];
  const num2 = [4, 5, 6];
  const num3 = [7, 8, 9];

  const numbers = num1.concat(num2, num3);

  console.log(numbers);
  // results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
}
// ejemplo2();

function ejemplo3(arguments) {
  console.log('Ejemplo 3');
  let enlace = document.querySelector(".enlace");
  let matiz1 = [enlace];
  const letters = [enlace, 'b', 'c'];

  let matiz2 = [2, 3, [1, 2, 3, 4]];
  // let mattiz1 = [];
  // let mattiz1 = [];
  // const alphaNumeric = letters.concat(1, [2, 3]);
  const alphaNumeric = letters.concat(matiz1, matiz2);

  console.log(alphaNumeric);
  // results in ['a', 'b', 'c', 1, 2, 3]

}
// ejemplo3();

function ejemplo4(arguments) {
  console.log('Ejemplo 4');
  const num1 = [
    [1]
  ];
  const num2 = [2, [3]];

  const numbers = num1.concat(num2);

  console.log(numbers);
  // results in [[1], 2, [3]]

  // modify the first element of num1
  num1[0].push(4);
  // num2[1].push("nuevo valor");
  console.log(numbers);
  // results in [[1, 4], 2, [3]]

}
ejemplo4();
// ejemplo1();
// ejemplo2();
// ejemplo3();
// ejemplo4();