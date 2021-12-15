function ejemplo_1(argument) {
	console.log('ejemplo_1 ========');
	// Ejemplo 1
	var arr = ['a', 'b', 'c', 'd', 'e'];
	var iterator = arr.values();
	console.log(iterator.next());
	// Object { value: "a", done: false }
	console.log(iterator.next().value);
	// "b"
	console.log(iterator.next()["value"]);
	// "c"
	console.log(iterator.next());
	// Object { value: "d", done: false }
	console.log(iterator.next());
	// Object { value: "e", done: false }
	console.log(iterator.next());
	// Object { value: undefined, done: true }
	// iteraror.next().value; // undefined
	console.log('ejemplo_1 ========');
}

// El valor inicial dado por los values() iterador. 
// De forma predeterminada, el uso de ARR [Symbol.Eritator] devolverá la función values().

function ejemplo_2(argument) {
	console.log('ejemplo_2 ========');
	// Ejemplo 2
	var arr = ['a', 'b', 'c', 'd', 'e'];
	var eArr = arr[Symbol.iterator]();
	console.log(eArr.next());
	// Object { value: "a", done: false }
	console.log(eArr.next().value);
	// b
	console.log(eArr.next()["value"]);
	// c
	console.log(eArr.next());
	// Object { value: "d", done: false }
	console.log(eArr.next());
	// Object { value: "e", done: false }
	console.log(eArr.next());
	// Object { value: undefined, done: true }

	console.log('ejemplo_2 ========');
}

function ejemplo_3(argument) {
	console.log('ejemplo_3 ========');
	// Ejemplo 3
	const someString =
		'Lorem ipsum dolor';

	console.log([...someString]);

	function Test_literator(data) {

		var ejemplo = data[Symbol.iterator]();

		for (let valor of ejemplo) {

			console.log(valor);
		}

	}

	Test_literator([...someString]);
	console.log('ejemplo_3 ========');
}

function ejemplo_4(argument) {
	console.log('ejemplo_4 ========');
	// Ejemplo 4
	var matriz = ['a', 'b', 'c', 'd', 'e'].values();

	// for (let valor of matriz) {

	// 	console.log(valor);
	// }

	console.log(matriz.next().value);
	console.log(matriz.next()["value"]);
	console.log(matriz.next().value);
	console.log(matriz.next().value);
	console.log(matriz.next().value);
	console.log('ejemplo_4 ========');
}

function ejemplo_5(argument) {
	console.log('ejemplo_5 ========');
	// Ejemplo 5
	var matriz = ['a', 'b', 'c', 'd', 'e'].values();

	for (let valor of matriz) {

		console.log(valor);
	}

	// console.log(matriz.next().value);
	// console.log(matriz.next()["value"]);
	// console.log(matriz.next().value);
	// console.log(matriz.next().value);
	// console.log(matriz.next().value);
	console.log('ejemplo_5 ========');
}

function ejemplo_6(argument) {
	console.log('ejemplo_6 ========');
	// Ejemplo 6

	function* gen() {
		yield 1;
		yield 2;
		yield 3;
	}

	const g = gen(); // "Generator { }"
	console.log(g.next()); // "Object { value: 1, done: false }"
	console.log(g.next()); // "Object { value: 2, done: false }"
	console.log(g.next()); // "Object { value: 3, done: false }"
	console.log(g.next()); // "Object { value: undefined, done: true }"

	console.log('ejemplo_6 ========');
}

function ejemplo_7(argument) {
	console.log('ejemplo_7 ========');

	function* countAppleSales() {
		let saleList = [3, 7, 5]
		for (let i = 0; i < saleList.length; i++) {
			yield saleList[i]
		}
	}

	let appleStore = countAppleSales() // Generator { }
	console.log(appleStore.next()) // { value: 3, done: false }
	console.log(appleStore.next()) // { value: 7, done: false }
	console.log(appleStore.next()) // { value: 5, done: false }
	console.log(appleStore.next()) // { value: undefined, done: true }

	console.log('ejemplo_7 ========');

}

function ejemplo_8(argument) {
	function logIterable(it) {
		if (!(Symbol.iterator in Object.getPrototypeOf(it)
				/* or "Symbol.iterator in Object.__proto__"
				   or "it[Symbol.iterator]" */
			)) {
			console.log(it, ' is not an iterable object...');
			return;
		}

		var iterator = it[Symbol.iterator]();
		// Su navegador debe soportar para ... de bucle
		// y las variables de alcopleado para los bucles
		// También se podría utilizar Const and Var
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

}

ejemplo_1();
ejemplo_2();
ejemplo_3();
ejemplo_4();
ejemplo_5();
ejemplo_6();
ejemplo_7();
ejemplo_8();