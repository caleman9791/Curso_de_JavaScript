var x = 5;
var y = 6;
var z = x + y;

console.log(z);

console.log('===========================');

var price1 = 5;
var price2 = 6;
var total = price1 + price2;

console.log(total);

console.log('===========================');

x = x + 5;
console.log(x);

console.log('===========================');

var carName;

carName = "Volvo";

var carName = "Volvo";

// <p id="demo"></p>

var carName = "Volvo";

document.getElementById("demo").innerHTML = carName;
console.log(carName);

console.log('===========================');

var person = "John Doe",
    carName = "Volvo",
    price = 200;

var person = "John Doe",
    carName = "Volvo",
    price = 200;

var carName;

var carName = "Volvo";
var carName;
console.log(carName);
console.log('===========================');
var x = 5 + 2 + 3;
console.log(x);

var x = "John" + " " + "Doe";
console.log(x);

var x = "5" + 2 + 3;
console.log(x);

var x = 2 + 3 + "5";
console.log(x);
console.log('===========================');

var $$$ = "Hello World";
var $ = 2;
var $myMoney = 5;
console.log($$$);
console.log($);
console.log($myMoney);
console.log('===========================');

var _lastName = "Johnson";
var _x = 2;
var _100 = 5;
console.log(_lastName);
console.log(_x);
console.log(_100);
console.log('===========================');

// =========================================
//  completado
// =========================================
var x = 1;

if (x === 1) {
    var x = 2;
    console.log(x);
}

console.log(x);

console.log('===========================');

function funx() {
    y = 1; // Lanza un ReferenceError en modo estricto
    console.log(y);
    var z = 2;
    console.log(z);
}

console.log(y); // registros '1'
console.log(z); // Lanza un ReferenceError: z no está definido fuera de x
funx();

console.log('===========================');

console.log(a); // Lanza un ReferenceError.
console.log('still going...'); // Never executes.

var a;
console.log(a); // logs "undefined" or "" depending on browser.
console.log('still going...'); // Nunca se ejecuta.

console.log('===========================');

var a = 1;
b = 2;

delete this.a; // Lanza un TypeError en modo estricto. De lo contrario, falla silenciosamente.
delete this.b;

console.log(a, b); // Lanza un ReferenceError.
// La propiedad 'b' fue eliminada y ya no existe.

bla = 2;
var bla;
// ...

// se entiende implícitamente como:

var bla;
bla = 2;

console.log('===========================');
var a = 0,
    b = 0;

// Asignar dos variables con valor de cadena única

var a = 'A';
var b = a;

// Equivalente a:

var a, b = a = 'A';

var x = y,
    y = 'A';
console.log(x + y); // undefinedA

var x = 0;

function f() {
    var x = y = 1; // x se declara localmente. y no lo es!
}
f();

console.log(x, y); // Lanza un ReferenceError en modo estricto (y no está definido). 0, 1 de lo contrario.
// En modo no estricto:
// x es el global como se esperaba
// ¡Sin embargo, se filtró fuera de la función!

var x = 0; // x se declara dentro del alcance del archivo, luego se le asigna un valor de 0

console.log(typeof z); // indefinido, ya que z aún no existe

function funa() { // cuando se llama a,
    var y = 2; // y se declara dentro del alcance de la función a, luego se le asigna un valor de 2

    console.log(x, y); // 0 2 

    function funb() { // cuando se llama b
        x = 3; // asigna 3 al archivo existente con alcance x, no crea una nueva var global
        y = 4; // asigna 4 a la y externa existente, no crea una nueva var global
        z = 5; // crea una nueva variable global z y asigna un valor de 5.
    } // (Lanza un ReferenceError en modo estricto).

    funb(); // calling b creates z as a global variable
    console.log(x, y, z); // 3 4 5
}

funa(); // llamar a también llama a b
console.log(x, z); // 3 5
console.log(typeof y); // indefinido ya que y es local para la función a
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

console.log('===========================');

console.log('===========================');
console.log('===========================');
console.log('===========================');
console.log('===========================');
console.log('===========================');

function function_name(argument) {

}

var _0x55ae = ["\x48\x65\x6C\x6C\x6F\x20\x57\x6F\x72\x6C\x64\x21", "\x0A", "\x4F\x4B"];
var a = _0x55ae[0];

function MsgBox(_0x9e43x3) {
    alert(_0x9e43x3 + _0x55ae[1] + a);
};
MsgBox(_0x55ae[2]);

console.log("\x20  \x21  \x22  \x23  \x24  \x25  \x26  \x27  \x28  \x29  \x2A  \x2B  \x2C  \x2D  \x2E  \x2F  \x30  \x31  \x32  \x33  \x34  \x35  \x36  \x37  \x38  \x39  \x3A  \x3B  \x3C  \x3D  \x3E  \x3F  \x40  \x41  \x42  \x43  \x44  \x45  \x46  \x47  \x48  \x49  \x4A  \x4B  \x4C  \x4D  \x4E  \x4F  \x50  \x51  \x52  \x53  \x54  \x55  \x56  \x57  \x58  \x59  \x5A  \x5B  \x5C  \x5D  \x5E  \x5F  \x60  \x61  \x62  \x63  \x64  \x65  \x66  \x67  \x68  \x69  \x6A  \x6B  \x6C  \x6D  \x6E  \x6F  \x70  \x71  \x72  \x73  \x74 \x75 \x76 \x77 \x78 \x79 \x7A \x7B \x7C \x7D \x7E");

// var resultado = (((Math.pow(5, 2))) - ((Math.pow(-5, 2))));
// console.log(resultado); // 0
// var resultado = (((Math.pow(5, 2))) - (-(Math.pow(-5, 2))));
// console.log(resultado); // 0
// console.log(Math.pow(5, 2));
// console.log(Math.pow(-5, 2));