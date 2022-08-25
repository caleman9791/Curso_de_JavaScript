var x = document.getElementById("myDIV");

// Start the animation with JavaScript
x.onclick = myFunction;

function myFunction() {
  x.style.WebkitAnimation = "mymove 2s 4"; // Code for Chrome, Safari and Opera
  x.style.animation = "mymove 2s 4"; // Standard syntax
}

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationStart", myStartFunction);
x.addEventListener("webkitAnimationIteration", myRepeatFunction);
x.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
// x.addEventListener("animationstart", myStartFunction);
// x.addEventListener("animationiteration", myRepeatFunction);
// x.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  this.innerHTML = "animationstart event occured - The animation has started";
  this.style.backgroundColor = "red";
}

function myRepeatFunction() {
  this.innerHTML = "animationiteration event occured - The animation was played again";
  this.style.backgroundColor = "blue";
}

function myEndFunction() {
  this.innerHTML = "animationend event occured - The animation has completed";
  this.style.backgroundColor = "black";
}