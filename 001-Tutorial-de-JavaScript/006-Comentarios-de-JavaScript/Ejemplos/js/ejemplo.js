// ====================================================================
// @abstract (synonyms: @virtual)
//  Abstracción

// -------------------------------------------------------------------------
class Person {
    function Person(first, last, age, eye, altura) { // vhasdflvjbj
        this.firstName = first; //@this  = nom,bre del la parsona el programa tiene un personalje 
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
        this.altura = altura;
    }
}
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
// ===========================================================================
// @access
// Acceso 
var greeter = "hey hi";
var times = 5;
if (times > 3) {
    var greeter = "Say Hello JavaTpoint";
}
console.log(greeter) //Output: Say Hello JavaTpoint

// ------------------------------------------------------
let greeter = "hey hi";
let times = 5;
if (times > 3) {
    let hello = "Say Hello JavaTpoint";
    console.log(hello) // Output: Say Hello JavaTpoint  
}
console.log(hello) // Compile error: greeter is not defined  

let x = 1;

if (x === 1) {
    let x = 2;

    console.log(x);
    // expected output: 2
}

console.log(x);
// expected output: 1

function varTest() {
    var x = 1; {
        var x = 2; // same variable!
        console.log(x); // 2
    }
    console.log(x); // 2
}

function letTest() {
    let x = 1; {
        let x = 2; // different variable
        console.log(x); // 2
    }
    console.log(x); // 1
}
// -----------------------------------------------
var a = 1;
var b = 2;

if (a === 1) {
    var a = 11; // the scope is global
    let b = 22; // the scope is inside the if-block

    console.log(a); // 11
    console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
// ===========================================================================
// @alias
//  Alias 
// declare an object with property x
var obj = {
    x: 1
};
var aliasToObj = obj;
aliasToObj.x++;
alert(obj.x); // displays 2

// ========================================================================
// @async
// asíncrono
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
}

asyncCall();
// ==========================================================================
// @augments (sinónimos: @extends)
//  Argumentos 
function func1(a, b, c) {
    console.log(arguments[0]);
    // expected output: 1

    console.log(arguments[1]);
    // expected output: 2

    console.log(arguments[2]);
    // expected output: 3
}

func1(1, 2, 3);

// ==========================================================================
// @autor
// @autor
// Descripción del autor sencillo redes sociales correos e información relevante
// ===========================================================================
// borrows  
// pedir prestado

// tomar prestado

// tomar a préstamo

// apropiarse

// emprestar

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Square extends Polygon {
    constructor(sideLength) {
        //  llama al constructor padre 
        super(sideLength, sideLength);
    }
    get area() {
        return this.height * this.width;
    }
    set sideLength(newLength) {
        this.height = newLength;
        this.width = newLength;
    }
}

var square = new Square(2);

// ===========================================================================
// @callback
// @llamar de vuelta
function greeting(name) {
    alert('Hello ' + name);
}

function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(greeting);

// ====================================================================
// @class (synonyms: @constructor)
// @clase (sinónimos: @constructor)

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// ====================================================================

// @classdesc
// Usa el siguiente texto para describir a toda la clase.
// ==================================================================

// @constant (sinónimos: 
// @const)
// Documentar un objeto como una constante.

// ===================================================================

// @constructs
// Este miembro de la función será el constructor de la clase anterior.

// =================================================================

// @copyright
// @derechos de autor
// Documentar cierta información de copyright.

// ================================================================

// @default (sinónimos: 
// @defaultvalue)
// Documentar el valor predeterminado.

// ==============================================================
// @deprecated
// @obsoleto
// Documente que esta ya no es la forma preferida.

// ===============================================================

// @description (sinónimos: 
// @desc)
// Describe un símbolo.
// @description (synonyms: @desc)

// ===============================================================

// @enum
// Documentar una colección de propiedades relacionadas.

// ==============================================================

// @event
// @evento
// Documentar un evento.

// ===============================================================

// @ejemplo
// Proporcione un ejemplo de cómo usar un artículo documentado.

//============================================================== 
// @exports
// Identifique el miembro que exporta un módulo JavaScript.

// In childModule1.js
let myFunction = ...; // assign something useful to myFunction
let myVariable = ...; // assign something useful to myVariable
export {
    myFunction,
    myVariable
};

// In childModule2.js
let myClass = ...; // assign something useful to myClass
export myClass;

// In parentModule.js
// Only aggregating the exports from childModule1 and childModule2
// to re-export them
export {
    myFunction,
    myVariable
}
from 'childModule1.js';
export {
    myClass
}
from 'childModule2.js';

// In top-level module
// We can consume the exports from a single module since parentModule
// "collected"/"bundled" them in a single source
import {
    myFunction,
    myVariable,
    myClass
} from 'parentModule.js';

// ===================================================================

// @external (sinónimos: 
// @host)
// Identifica una clase externa, espacio de nombres o módulo.

// ===================================================================

// @file (sinónimos: @fileoverview,  @overview)
// Describe un archivo.

// ==================================================================

// @fires (sinónimos: @emits)
// Describa los eventos que puede desencadenar este método.

// ==================================================================

// @function (sinónimos: @func, @method)
// Describe una función o método.

// ===================================================================

// @generador
// Indique que una función es una función generadora.

function* idMaker() {
    var index = 0;
    while (index < 3)
        yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
// ...

//

// ======================================================================
// @global
// @global
// Documentar un objeto global.

// make current user information global, to let all scripts access it
window.currentUser = {
    name: "John"
};

// somewhere else in code
alert(currentUser.name); // John

// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
alert(window.currentUser.name); // John

// ======================================================================
// @hideconstructor
// Indica que el constructor no debe mostrarse.
var Score = (function() {
    var initializing = false;

    var Score = function(score, hasPassed) {
        if (!initializing) {
            throw new Error('The constructor is private, please use mkNewScore.');
        }

        initializing = false;
        this.score = score;
        this.hasPassed = hasPassed;
    };

    Score.mkNewScore = function(score) {
        intializing = true;
        return new Score(score, score >= 33);
    };

    return Score;
})();

// ======================================================================
// @ignore
// @ignorar
// Omita un símbolo de la documentación.

// ======================================================================

// @implements
// @implementos
//     Este símbolo implementa una interfaz.
// http://help.dottoro.com/lagstsiq.php
// https://devdocs.io/dom/

// ====================================================================

// @inheritdoc
// @inheritdoc
//     Indique que un símbolo debe heredar la documentación de su padre.

// ====================================================================
// @inner
// @interior
//     Documentar un objeto interno.

// ====================================================================
// @instance
// @ejemplo
//     Documentar un miembro de instancia.

// ====================================================================
// @interface
// @interfaz
//     Este símbolo es una interfaz que otros pueden implementar.

// ====================================================================
// @kind
// @tipo
// ¿Qué tipo de símbolo es este?

// ====================================================================
// @lends
// @literal
// Documente las propiedades en un objeto literal como 
// si pertenecieran a un símbolo con un nombre dado.

var student = {
    name: "Suresy",
    name: "Rayy",
    No: 12
};

// =================================================================

// @license
// @licencia
//     Identifique la licencia que se aplica a este código.

// ================================================================

// @listens
// Enumere los eventos que escucha un símbolo.

// ===============================================================

// @member (sinónimos: @var)
// Documentar a un miembro.

// ==============================================================

// @miembro de
// Este símbolo pertenece a un símbolo principal.

// ============================================================

// @mezclas
// Este objeto se mezcla en todos los miembros de otro objeto.

// ===========================================================
// @mezcla
// @mixin
//     Documentar un objeto mixin.

// =========================================================
// @module
// @módulo
//     Documentar un módulo de JavaScript.

var moduleName = (function() {

    var privateMethod = function() {
        // code here
    };

    var myMethod = function() {
        // code here
    };

    var anotherMethod = function() {
        // code here
    };

    return {
        myMethod: myMethod,
        anotherMethod: anotherMethod
    };
}());

// ============================================================
// @name
// @nombre
//     Documentar el nombre de un objeto.

// ==========================================================

// @ namespace
//     Documentar un objeto de espacio de nombres.
// https://www.codeproject.com/Tips/830074/Namespaces-in-JavaScript-2

// http://js.dokry.com/javascript-cmo-recorrer-todos-los-elementos-dom-en-una-pgina.html

// ========================================================

// @override
// @anular
//     Indica que un símbolo anula a su padre.

// ========================================================

// @package
// @paquete
//     Este símbolo está destinado a ser un paquete privado.

// ==========================================================

// @param (sinónimos: @arg, @argument)
//     Documente el parámetro en una función.

// ==============================================================

// @privado
//     Este símbolo está destinado a ser privado.

//================================================================

// @property (sinónimos: @prop)
//     Documentar una propiedad de un objeto.

// ================================================================

// @protegido
//     Este símbolo está destinado a ser protegido.

// https://javascript.info/private-protected-properties-methods

// ================================================================

// @public
// @público
//     Este símbolo está destinado a ser público.

// ===============================================================
// @readonly
// @solo lectura
// Este símbolo está destinado a ser de solo lectura.

const PI = 3.141592653589793;
PI = 3.14; // This will give an error
PI = PI + 10; // This will also give an error 

// =============================================

// @requires
//     Este archivo requiere un módulo JavaScript.

// =======================================================

// @returns (sinónimos: @return)
//     Documentar el valor de retorno de una función.

// ==========================================================

// @see
// @ver
// Consulte alguna otra documentación para obtener más información.

// ===========================================================

// @since
// @ya que
//     ¿Cuándo se agregó esta característica?

// ========================================================

// @estático
// Documentar un miembro estático.

class ClassWithStaticMethod {
    static staticMethod() {
        return 'static method has been called.';
    }
}

console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."
// -------------------------------------------
class Triple {
    static triple(n = 1) {
        return n * 3;
    }
}

class BiggerTriple extends Triple {
    static triple(n) {
        return super.triple(n) * super.triple(n);
    }
}

console.log(Triple.triple()); // 3
console.log(Triple.triple(6)); // 18

var tp = new Triple();

console.log(BiggerTriple.triple(3));
// 81 (not affected by parent's instantiation)

console.log(tp.triple());
// 'tp.triple is not a function'.

// ============================================================

// @summary
// @resumen
//     Una versión más corta de la descripción completa.

// ==========================================================

// @this
// @esta
//     ¿A qué se refiere la palabra clave 'this' aquí?

// ========================================================

// @throws (sinónimos: @exception)
//     Describa qué errores podrían ser arrojados.

// =====================================================

// @todo
// @que hacer
//     Documentar las tareas a completar.

// ======================================================

// @tutorial
//     Inserte un enlace a un archivo tutorial incluido.

// ======================================================

// @type
// @tipo
//     Documentar el tipo de un objeto.

// https://flaviocopes.com/how-to-list-object-methods-javascript/

// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // Despite being "Not-A-Number"
typeof Number(1) === 'number'; // but never use this form!

// Strings
typeof "" === 'string';
typeof "bla" === 'string';
typeof(typeof 1) === 'string'; // typeof always returns a string
typeof String("abc") === 'string'; // but never use this form!

// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // but never use this form!

// Symbols
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';

// Objects
typeof {
    a: 1
} === 'object';

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';

// The following is confusing. Don't use!
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String("abc") === 'object';

// Functions
typeof

function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';

// =======================================================

// @typedef
// Documentar un tipo personalizado.

// =====================================================

// @variation
// @variación
// Distinguir diferentes objetos con el mismo nombre.

// ===================================================

// @versión
//     Documenta el número de versión de un elemento.

// =====================================================

// @yields (sinónimos: @yield)
/* 
    Documente el valor producido por una función generadora.
*/

// ==========================================================

// {@link} (sinónimos: {@linkcode}, {@linkplain})
// Enlace a otro elemento en la documentación.
// {@tutorial}
// Enlace a un tutorial.