// Definición y uso 
// ejecuta una función para cada elemento de matriz. 
// devuelve verdadero si la función devuelve verdadera para todos los elementos. 
// devuelve False si la función devuelve False por un elemento. 
// no ejecuta la función para elementos vacíos de matriz. 
// no cambia la matriz original.

const arr = [32, 33, 16, 40];

arr.every(check);

function check(item) {
  console.log(item);
}

function exe(argument) {

  // ---------------
  // Modifying items
  // ---------------
  let arr = [1, 2, 3, 4];
  arr.every((elem, index, arr) => {
    arr[index + 1] -= 1
    console.log(`[${arr}][${index}] -> ${elem}`)
    return elem < 2
  });

  // Loop runs for 3 iterations, but would
  // have run 2 iterations without any modification
  //
  // 1st iteration: [1,1,3,4][0] -> 1
  // 2nd iteration: [1,1,2,4][1] -> 1
  // 3rd iteration: [1,1,2,3][2] -> 2

  // ---------------
  // Appending items
  // ---------------
  arr = [1, 2, 3];
  arr.every((elem, index, arr) => {

    arr.push('new')

    console.log(`[${arr}][${index}] -> ${elem}`)
    return elem < 4
  });

  // Loop runs for 3 iterations, even after appending new items
  //
  // 1st iteration: [1, 2, 3, new][0] -> 1
  // 2nd iteration: [1, 2, 3, new, new][1] -> 2
  // 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

  // ---------------
  // Deleting items
  // ---------------
  arr = [1, 2, 3, 4];
  arr.every((elem, index, arr) => {
    arr.pop()
    console.log(`[${arr}][${index}] -> ${elem}`)
    return elem < 4
  });

  // Loop runs for 2 iterations only, as the remaining
  // items are `pop()`ed off
  //
  // 1st iteration: [1,2,3][0] -> 1
  // 2nd iteration: [1,2][1] -> 2

}

// exe();