function AsignaciónlógicaAND(argument) {

    let a = 1;
    let b = 0;

    a &&= 2;
    console.log(a);
    // expected output: 2

    b &&= 2;
    console.log(b);
    // expected output: 0
}

function AsignaciónlógicaOR(argument) {
    const a = {
        duration: 50,
        title: ''
    };

    a.duration ||= 10;
    console.log(a.duration);
    // expected output: 50

    a.title ||= 'title is empty.';
    console.log(a.title);
    // expected output: "title is empty"
}

// El operador de asignación lógica nula 
// (x ?? = y) solo asigna si x es nulo (nulo o indefinido).
function Asignaciónlógicanula(argument) {
    const a = {
        duration: 50
    };

    a.duration ??= 10;
    console.log(a.duration);
    // expected output: 50

    a.speed ??= 25;
    console.log(a.speed);
    // expected output: 25
}
// =================================================
// Valor de retorno y encadenamiento

// Como la mayoría de las expresiones, asignaciones 
// como x = y  tienen un valor de retorno.
// Se puede recuperar
 // p.Ej.asignando la expresión o registrándola:

// const z = (x = y); // O de forma equivalente: 
// const z = x = y;

// console.log(z); // Registra el valor de retorno 
// de la asignación x = y. console.log(x = y); // O 
// registre el valor de retorno directamente.

// El valor de retorno coincide con la expresión 
// a la derecha del signo = en la columna 'Significado' 
// de la tabla anterior. Eso significa que (x = y) 
// devuelve y, (x + = y) devuelve la suma resultante 
// x + y, (x ** = y) devuelve la potencia 
 // resultante x ** y, y así sucesivamente.

// En el caso de asignaciones lógicas, 
// (x && = y), (x || = y) y (x ?? = y),
 // el valor de retorno es el de la operación 
 // lógica sin la asignación, 
 // entonces x && y, x || y, y x ?? y, respectivamente.

// Tenga en cuenta que los valores devueltos 
// siempre se basan en los valores de los operandos 
// antes de la operación.

// Al encadenar estas expresiones, cada asignación se evalúa de 
// derecha a izquierda. Considere estos ejemplos:

//    w = z = x = y es equivalente 
// a w = (z = (x = y)) o x = y; z = y; w = y
//     z + = x * = y es equivalente 
// a z + = (x * = y) o tmp = x * y; x * = y; z + = 
// tmp (excepto sin tmp).

// =================================================
