// =============================================================
var matrixconcar1 = ["Cecilie", "Lone"];
var matrixconcar2 = ["Emil", "Tobias", "Linus"];

document.getElementById('display1').innerHTML = matrixconcar1 + "<br/>" + matrixconcar2;

function concarFun() {

    var newmatrixconcat = matrixconcar1.concat(matrixconcar2);
    document.getElementById("demo1").innerHTML = newmatrixconcat;
}
// =============================================================

var matrixcopyWithin1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var matrixcopyWithin2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var matrixcopyWithin3 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var matrixcopyWithin4 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var matrixcopyWithin5 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var matrixcopyWithin6 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var matrixcopyWithin7 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var matrixcopyWithin8 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var matrixcopyWithin9 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var matrixcopyWithin10 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var matrixcopyWithin11 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var matrixcopyWithin12 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var matrixcopyWithin13 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var matrixcopyWithin14 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var matrixcopyWithin15 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var matrixcopyWithin16 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

document.getElementById("demo2").innerHTML = matrixcopyWithin1;

function copyWithinFun() {

    document.getElementById("demo3").innerHTML = "Observa los resultados en la consola";
    // ===========================================================
    console.log('matrixcopyWithin1.copyWithin(1, 0);');
    console.log(matrixcopyWithin1.copyWithin(1, 0));
    console.log('matrixcopyWithin5.copyWithin(1, 1);');
    console.log(matrixcopyWithin5.copyWithin(1, 2));
    console.log('matrixcopyWithin5.copyWithin(1, 0, 2)');
    console.log(matrixcopyWithin9.copyWithin(1, 2, 2));
    console.log('matrixcopyWithin5.copyWithin(1, 3, 2)');
    console.log(matrixcopyWithin10.copyWithin(1, 3, 2));
    console.log('============================================');
    // ===========================================================
    console.log('matrixcopyWithin2.copyWithin(2, 0);');
    console.log(matrixcopyWithin2.copyWithin(2, 0));
    console.log('matrixcopyWithin5.copyWithin(2, 1);');
    console.log(matrixcopyWithin6.copyWithin(2, 2));
    console.log('matrixcopyWithin5.copyWithin(2, 1, 1)');
    console.log(matrixcopyWithin11.copyWithin(2, 1, 1));
    console.log('matrixcopyWithin5.copyWithin(2, 2, 4)');
    console.log(matrixcopyWithin12.copyWithin(2, 0, 4));
    console.log('============================================');
    // ===========================================================
    console.log('matrixcopyWithin3.copyWithin(3, 0);');
    console.log(matrixcopyWithin3.copyWithin(3, 0));
    console.log('matrixcopyWithin6.copyWithin(3, 1);');
    console.log(matrixcopyWithin7.copyWithin(3, 2));
    console.log('============================================');
    // ===========================================================
    console.log('matrixcopyWithin4.copyWithin(4, 0);');
    console.log(matrixcopyWithin4.copyWithin(4, 0));
    console.log('matrixcopyWithin7.copyWithin(4, 1);');
    console.log(matrixcopyWithin8.copyWithin(4, 2));
    console.log('============================================');
    // ===========================================================
    // fruits.copyWithin(2,0,2);

}

// ==========================================================