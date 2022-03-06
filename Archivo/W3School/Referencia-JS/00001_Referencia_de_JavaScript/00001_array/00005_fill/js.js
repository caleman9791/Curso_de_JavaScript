// El método de fill() cambia todos los elementos 
// en una matriz a un valor estático, desde un índice de 
// inicio (predeterminado 0) a un índice de extremo 
// (Array predeterminado. Longitud). Devuelve la matriz modificada.
// 

let arr = [
	"elemento 1",
	"elemento 2",
	"elemento 3",
	"elemento 4"
];
arr.fill("Nuevo elemento", 0, 2);

console.log(arr);