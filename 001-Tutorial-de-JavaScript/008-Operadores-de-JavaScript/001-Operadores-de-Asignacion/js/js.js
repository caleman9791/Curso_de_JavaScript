function Asignacion(argument) {

    let x = 2;
    const y = 3;

    console.log(x);
    // expected output: 2

    console.log(x = y + 1); // 3 + 1
    // expected output: 4

    console.log(x = x * y); // 4 * 3
    // expected output: 12
}

function AsignacionDeAdicion(argument) {

    let a = 2;
    let b = 'hello';
    let c = 'world';
    a = a + 3;
    // console.log(a);
    // console.log(a += 3);
    // addition
    // expected output: 5
    c += b;
    console.log(c);
    // console.log(b += ' world'); 
    // concatenation
    // expected output: "hello world"

}
// =========================================
function AsignacionDeResta(argument) {

    let a = 2;

    let texto1 = "hola";
    let texto2 = " mundo";

    texto1 -= texto2;

    console.log(texto1);

    // --------------------
    console.log(a -= 3);
    // expected output: -1

    console.log(a -= 'Hello');
    // expected output: NaN
    // --------------------

    console.log("hola" + " :)  " + "Mundo");
}
// =========================================
function AsignacionDeMultiplicacion(argument) {

    let a = 2;

    console.log(a *= 3);
    // 2 * 3
    // expected output: 6

    console.log(a *= 'hello');
    // expected output: NaN

}

function Asignaciondedivision(argument) {

    let a = 3;

    // console.log(a /= 2);
    a = ((10 / 3));
    console.log(a);
    // expected output: 1.5

    // console.log(a /= 0);
    // expected output: Infinity

    // console.log(a /= 'hello');
    // expected output: NaN
}

function Asignacionrestante(argument) {

    let a = ((10 / 3));
    console.log(a);
    // console.log(a %= 2);
    // expected output: 1

    var modulo = 10 % 3;
    console.log(modulo);

    // console.log(a %= 0);
    // expected output: NaN

    // console.log(a %= 'hello');
    // expected output: NaN
}

// ===========================================
// ***** Pendiente *****
function Asignaciondeexponenciacion(argument) {

    let a = 3;
    let b = 5;
    console.log(b **= 2);

    console.log(a **= 2);
    // expected output: 9

    console.log(a **= 0);
    // expected output: 1

    console.log(a **= 'hello');
    // expected output: NaN

}

// ==============================================
// ==============================================
// https://www.disfrutalasmatematicas.com/numeros/binarios-digitos.html
// https://www.disfrutalasmatematicas.com/numeros/binarios-numeros-sistema.html
// https://es.wikihow.com/convertir-de-decimal-a-binario
// https://es.wikihow.com/convertir-binario-a-decimal
// https://www.youtube.com/playlist?list=PL46-B5QR6sHleyaafOF3Vp1ZpiUEtHJ40
// https://www.youtube.com/channel/UCq5YfKN6SfUHKBoIxhnAhgQ

function Asignaciondeturnoizquierdo(argument) {

    let a = 5;

    // 00000000000000000000000000000101

    a <<= 2;

    // 00000000000000000000000000010100

    console.log(a);
    // expected output: 20

}

function Asignaciondeturnoaladerecha(argument) {

    let a = 5;
    //  00000000000000000000000000000101

    a >>= 2;
    //  00000000000000000000000000000001
    console.log(a);
    // expected output: 1

    let b = -5;
    // -00000000000000000000000000000101

    b >>= 2;
    // -00000000000000000000000000000010
    console.log(b);
    // expected output: -2
}

function Asignaciondeturnoaladerechasinfirmar(argument) {

    // https: //devdocs.io/javascript/operators/bitwise_operators#Unsigned_right_shift

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift

    let a = 5;
    //  00000000000000000000000000000101

    a >>>= 2;
    //  00000000000000000000000000000001
    console.log(a);
    // expected output: 1

    let b = -5;
    // -00000000000000000000000000000101

    b >>>= 2;
    //  00111111111111111111111111111110
    console.log(b);
    // expected output: 1073741822
}

// ================================================
// https://en.wikipedia.org/wiki/Bitwise_operation
// El operador de asignacion AND bit a bit (& =) usa la representacion binaria de ambos operandos, realiza una operacion AND bit a bit en ellos y asigna el resultado a la variable.

function AsignacionANDbitabit(argument) {
    // https://devdocs.io/javascript/operators/assignment_operators#Bitwise_AND_assignment

    let a = 5;
    // 00000000000000000000000000000101
    a &= 3;
    // 00000000000000000000000000000011

    console.log(a);
    // 00000000000000000000000000000001
    // expected output: 1
}

// https://es.wikipedia.org/wiki/Conectiva_l%C3%B3gica
// https://es.wikipedia.org/wiki/Tabla_de_verdad

function AsignacionXORbitabit(argument) {
    // https://devdocs.io/javascript/operators/assignment_operators#Bitwise_XOR_assignment

    let a = 5;
    // 00000000000000000000000000000101
    a ^= 3;
    // 00000000000000000000000000000011

    console.log(a);
    // 00000000000000000000000000000110
    // expected output: 6
}

function AsignacionORbitabit(argument) {
    // https://devdocs.io/javascript/operators/assignment_operators#Bitwise_OR_assignment
    let a = 5; // 00000000000000000000000000000101
    a |= 3; // 00000000000000000000000000000011

    console.log(a); // 00000000000000000000000000000111
    // expected output: 7
}

// https://espaciotecnologico.co/electronica-digital-logica-digital/

// =============================================
// https://www.w3schools.com/js/js_bitwise.asp
//  function dec2bin(dec){
//   return (dec >>> 0).toString(2);
// }

// function bin2dec(bin){
//   return parseInt(bin, 2).toString(10);
// }