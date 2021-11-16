// =====================================================================
// Ejemplo de uso del constructor 
function myFunction1() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo1").innerHTML = fruits.constructor;
    console.log(fruits.constructor);
}
// =====================================================================

// ==============================================================
//  Ejemplo de usso de la propiedad length 

function myFunction2() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo2").innerHTML = fruits.length;
}
// ==============================================================

// ===============================================================
//  Ejemplo de uso del prototipo
Array.prototype.myUcase = function() {

    var i;

    for (i = 0; i < this.length; i++) {

        this[i] = this[i].toUpperCase();
    }
};

function myFunction3() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.myUcase();
    document.getElementById("demo3").innerHTML = fruits;
}
// ===============================================================