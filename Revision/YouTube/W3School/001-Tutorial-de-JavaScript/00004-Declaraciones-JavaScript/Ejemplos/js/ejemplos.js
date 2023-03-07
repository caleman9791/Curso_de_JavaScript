var x, y, z; // Statement 1

x = 5; // Statement 2

y = 6; // Statement 3

z = x + y; // Statement 4

document.getElementById("demo").innerHTML = "vhkbadhblddvjkb";

var a, b, c; // Declare 3 variables
a = 5; // Assign the value 5 to a
b = 6; // Assign the value 6 to b
c = a + b; // Assign the sum of a and b to c

a = 5;
b = 6;
c = a + b;

var person = "Hege";
var person = "Hege";

var x = y + z;

document.getElementById("demo").innerHTML =
    "Hello Dolly!" +
    "hdbvhjsdjk";

// =====================================================================

function myFunction() {

    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
}
// ====================================================================

if (true) {

    document.getElementById("demo1").innerHTML = "Hello Dolly!";

} else if (condition) {

    document.getElementById("demo1").innerHTML = "Hello Dolly!";

} else {

    document.getElementById("demo1").innerHTML = "Hello Dolly!";
}

// ====================================================================
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Apples':
        console.log('Apples are $0.32 a pound.');
        break;
    case 'Bananas':
        console.log('Bananas are $0.48 a pound.');
        break;
    case 'Cherries':
        console.log('Cherries are $3.00 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
    default:
        console.log('Sorry, we are out of ' + expr + '.');
}

console.log("Is there anything else you'd like?");

// =========================================================================
try {
    nonExistentFunction();

} catch (error) {

    console.error(error);

    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
}
// ==========================================================================

class Rectangle {

    constructor(height, width) {

        this.height = height;
        this.width = width;
    }
}

// ========================================================================

var n = 0;
var x = 0;

while (n < 3) {
    n++;
    x += n;
}