var x = 5;
var y = 6;
var z = x + y;

var price1 = 5;
var price2 = 6;
var total = price1 + price2;

x = x + 5;

var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';

var carName;

carName = "Volvo";

var carName = "Volvo";

var carName = "Volvo";
document.getElementById("demo").innerHTML = carName;

var person = "John Doe",
    carName = "Volvo",
    price = 200;

var person = "John Doe",
    carName = "Volvo",
    price = 200;

var carName;

var carName = "Volvo";
var carName;

var x = 5 + 2 + 3;

var x = "John" + " " + "Doe";

var x = "5" + 2 + 3;

var x = 2 + 3 + "5";

var $$$ = "Hello World";
var $ = 2;
var $myMoney = 5;

var _lastName = "Johnson";
var _x = 2;
var _100 = 5;

var carName = "Volvo";

// code here can use carName

function myFunction() {
    // code here can also use carName
}

// code here can NOT use carName

function myFunction() {
    var carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName 

{
    var x = 2;
}
// x CAN be used here 

{
    let x = 2;
}
// x can NOT be used here 

var x = 10;
// Here x is 10
{
    var x = 2;
    // Here x is 2
}
// Here x is 2

var x = 10;
// Here x is 10
{
    let x = 2;
    // Here x is 2
}
// Here x is 10 

var i = 5;
for (var i = 0; i < 10; i++) {
    // some statements
}
// Here i is 10 

let i = 5;
for (let i = 0; i < 10; i++) {
    // some statements
}
// Here i is 5 

function myFunction() {
    var carName = "Volvo"; // Function Scope
}

function myFunction() {
    let carName = "Volvo"; // Function Scope
}

var x = 2; // Global scope
let x = 2; // Global scope

var carName = "Volvo";
// code here can use window.carName 

let carName = "Volvo";
// code here cannot use window.carName 

var x = 2;

// Now x is 2

var x = 3;

// Now x is 3 

var x = 2; // Allowed
let x = 3; // Not allowed

{
    var x = 4; // Allowed
    let x = 5 // Not allowed
}

let x = 2; // Allowed
let x = 3; // Not allowed

{
    let x = 4; // Allowed
    let x = 5; // Not allowed
}

let x = 2; // Allowed
var x = 3; // Not allowed

{
    let x = 4; // Allowed
    var x = 5; // Not allowed
}

// 

let x = 2; // Allowed

{
    let x = 3; // Allowed
}

{
    let x = 4; // Allowed
}

// ====================

x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x; // Display x in the element

var x; // Declare x
Example 2
var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x; // Display x in the element

// ======================================================

var foo = function(a) {
    return a * 2;
}
var bar = foo(2);

foo = function(a) {
    return a / 2;
}

bar = foo(bar);
console.log(bar);