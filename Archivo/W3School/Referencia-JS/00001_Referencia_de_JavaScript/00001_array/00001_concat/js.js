// Array.prototype.concat()

// Definición y uso

// concat () concatena (une) dos o más matrices.

// concat () devuelve una nueva matriz, que contiene las matrices unidas.

// concat () no cambia las matrices existentes.

// /////////////////////////////////////////////////////
// El método concat () se utiliza para fusionar dos o más matrices. 
// Este método no cambia las matrices existentes, sino que devuelve una nueva matriz.

function concadeda_Matriz(argument) {
	let array1 = ["array1 1", "array1 2"];
	let array2 = ["array2 1", "array2 2", "array2 3"];
	let array3 = ["array3 1", "array3 2", "array3 3"];
	let array4 = ["array4 1", "array4 2", "array4 3"];
	let resultado = array1.concat(array2, array3, array4);

	console.log(resultado);
}

// -----------------
concadeda_Matriz();
// -----------------

// /////////////////////////////////////////////////////

// ///////////////////////////////////////////////////

function concadeda_Mariz_Numeros_Letras(argument) {
	const letters = ['a', 'b', 'c'];
	const numbers = [1, 2, 3];

	console.log(letters.concat(numbers));
	// result in ['a', 'b', 'c', 1, 2, 3]
}

// ------------------------------
concadeda_Mariz_Numeros_Letras();
// ------------------------------

// ///////////////////////////////////////////////////

// ///////////////////////////////////////////////////

function concadeda_Numeros(argument) {
	const num1 = [1, 2, 3];
	const num2 = [4, 5, 6];
	const num3 = [7, 8, 9];

	const numbers = num1.concat(num2, num3);

	console.log(numbers);
	// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

// ------------------
concadeda_Numeros();
// ------------------

// ///////////////////////////////////////////////////

// //////////////////////////////////////////////////
function concadeda_Matiz_Dentro_De_Matriz(argument) {

	const letters = ['a', 'b', 'c'];

	const alphaNumeric = letters.concat(1, [2, 3]);

	console.log(alphaNumeric);
	// results in ['a', 'b', 'c', 1, 2, 3]
}

// --------------------------------
concadeda_Matiz_Dentro_De_Matriz();
// --------------------------------

// //////////////////////////////////////////////////

// //////////////////////////////////////////////////

function matriz_Dentro_Dematriz_Avanzado(argument) {
	const num1 = [
		[1]
	];
	const num2 = [2, [3],
		["Hola", "Mundo", [{
				nombre: "Carlos"
			}],
			[function() {
				console.log('Mensake en consola');
			}]
		]
	];

	const numbers = num1.concat(num2);

	console.log(numbers);
	// results in [[1], 2, [3]]
	const soyMatriz = [
		[{
			clave: "valor"
		}], "Rexto", [{
			numero: 1
		}]
	]

	// modify the first element of num1
	num1[0].push(4);

	console.log(numbers);
	// results in [[1, 4], 2, [3]]
	numbers.push(soyMatriz);
	console.log(numbers);
	console.log('////////////////');

	for (var i = 0; i < numbers.length; i++) {
		console.log(numbers[i]);
	}
	console.log(num2);
	console.log(num2[2][3][0]);
	console.log(numbers[3][3][0]);
	numbers[3][3][0]();
	console.log("/////////");
	num2[2][3][0]();
	// console.log(numbers);
	// console.log(numbers);
	// console.log(numbers);
}

// -------------------------------
matriz_Dentro_Dematriz_Avanzado();
// -------------------------------

// //////////////////////////////////////////////////