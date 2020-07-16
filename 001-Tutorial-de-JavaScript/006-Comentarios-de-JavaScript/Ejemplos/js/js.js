// Change heading:
document.getElementById("myH").innerHTML = "My First Page";

// Change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph.";
var x = 5; // Declare x, give it the value of 5
var y = x + 2; // Declare y, give it the value of x + 2

/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";

//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";

/*
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
*/

var myElement = document.getElementById("intro");

var x = document.getElementsByTagName("p");

// ==========================================
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
// ==========================================

var x = document.getElementsByClassName("intro");

var x = document.querySelectorAll("p.intro");

// <h2>A h2 element</h2>
// <h3>A h3 element</h3>

document.querySelector("h2, h3").style.backgroundColor = "red";