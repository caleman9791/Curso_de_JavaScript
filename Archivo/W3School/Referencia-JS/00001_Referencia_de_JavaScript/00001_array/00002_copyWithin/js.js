// El método CopyWithin () poca parte de una serie 
// de una matriz a otra ubicación en la misma matriz y 
// la devuelve sin modificar su longitud.

const matriz_1 = ["elemento 1", "elemento 2", "elemento 3", "elemento 4"];

matriz_1.copyWithin(2, 0);

console.log(matriz_1);

const matriz_2 =
	[
		"elemento 1",
		"elemento 2",
		"elemento 3",
		"elemento 4",
		"elemento 5",
		"elemento 6",
		"elemento 7",
		"elemento 8",
		"elemento 9",
		"elemento 10"
	];
matriz_2.copyWithin(5, 2, 5);
console.log(matriz_2);
// copyWithin(target)
// copyWithin(target, start)
// copyWithin(target, start, end)