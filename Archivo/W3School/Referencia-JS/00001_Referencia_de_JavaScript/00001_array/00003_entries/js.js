// El método Entradas () devuelve un nuevo objeto ITERATOR de matriz 
// que contiene los pares de clave/valor para cada índice en la matriz.

const matriz = ["elemento 1", "elemento 2", "elemento 3", "elemento 4"];

const iterador = matriz.entries();

console.log(iterador); // Array Iterator {  }

for (let elemento of iterador) {

	console.log(elemento);
}
// Salida :

// Array [ 0, "elemento 1" ]

// Array [ 1, "elemento 2" ]

// Array [ 2, "elemento 3" ]

// Array [ 3, "elemento 4" ]