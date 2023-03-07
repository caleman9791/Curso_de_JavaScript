var arrancar = document.querySelector(".arrancar");
var i = 0;
arrancar.addEventListener("click", function(arguments) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = .01;
    var id = setInterval(frame, 1);

    function frame() {
      if (width >= 85) {
        clearInterval(id);
        i = 0;
      } else {
        width = (width + .05);
        elem.style.width = width + "%";
      }

      console.log(width);
    }
  }
});

function move() {

}
// var ultimaVez = 32800;
// var cambioAceite = 7500;
// var x = 0;
// // for (var ultimaVez = 32800; ultimaVez > 7500; ultimaVez -= 7500) {
// //   console.log(++x);
// // }

// for (var i = 7500; i < 32800; i += 7500) {
//   console.log(i);
// }