const inventario = [{
	nombre: 'elemento 1',
	cantidad: 2
}, {
	nombre: 'elemento 2',
	cantidad: 0
}, {
	nombre: 'elemento 3',
	cantidad: 5
}];

function encuentra(item) {
	return item.nombre === 'elemento 3';
}

console.log(inventario.find(encuentra));

window.addEventListener('afterprint', (event) => {
	console.log('After print');
});

window.addEventListener("afterprint", function(event) {

	alert("apunto d eimprimir")
});
// window.onafterprint = function(event) { ... };

window.addEventListener("print", function(event) {
	event.preventDefault();
});