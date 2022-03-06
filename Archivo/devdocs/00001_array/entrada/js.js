// class Card {
//   constructor(xxx, xxx) {
//     this.nombr
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area); // 100

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
document.getElementById("mySidebar").style.display = "block";
document.getElementById("mySidebar").style.width = "0%";
// document.querySelector(".controls").style.display = "block";
var nIntervId;
var ancho = 0;

function w3_open() {
  let div = document.querySelector(".w3-sidebar");
  // div.classList.add("ancho_nuevo");
  document.getElementById("mySidebar").style.display = "block";
  nIntervId = setInterval(openWhith, 15);

}

function w3_close() {

  nIntervId = setInterval(closeWhith, 10);
}

function openWhith(argument) {
  console.log('ok');
  console.log(ancho);
  ancho = ancho + 1;
  if (ancho >= 50) {
    clearInterval(nIntervId);
  }
  document.getElementById("mySidebar").style.width = ancho + "%";

}

function closeWhith(argument) {
  // console.log('ok');
  // console.log(ancho);
  ancho = ancho - 1;
  document.getElementById("mySidebar").style.width = ancho + "%";

  if (ancho <= 0) {
    clearInterval(nIntervId);
  }
}

function seleccion(argument) {
  var card__image = document.querySelectorAll(".card__image");
  var codefuncode = document.querySelector(".codefuncode");
  var tutorweb = document.querySelector(".tutorweb");
  var caleman9791 = document.querySelector(".caleman9791");
  var btn_codefuncode = document.querySelector(".btn_codefuncode");
  var btn_tutorweb = document.querySelector(".btn_tutorweb");
  var btn_caleman9791 = document.querySelector(".btn_caleman9791");
  var div_codefuncode = document.querySelector(".div_codefuncode");
  var div_tutorweb = document.querySelector(".div_tutorweb");
  var div_caleman9791 = document.querySelector(".div_caleman9791");
  for (var i = 0; i < card__image.length; i++) {
    card__image[i].addEventListener("click", function(argument) {
      // console.log(this.classList);

      if (this.classList.contains("codefuncode")) {

        console.log("codefuncode");
        btn_codefuncode.click();

      } else if (this.classList.contains("caleman9791")) {

        console.log("caleman9791");
        btn_caleman9791.click();

      } else if (this.classList.contains("tutorweb")) {

        console.log("tutorweb");
        btn_tutorweb.click();
      }

    }, false);
  }
  btn_codefuncode.addEventListener("change", function(argument) {
    console.log(this);

    const img = document.createElement("img");
    img.classList.add("card__image");
    img.classList.add("codefuncode");
    img.src = URL.createObjectURL(this.files[0]);

    img.onload = function() {
      URL.revokeObjectURL(this.src);
      removeAllChildNodes(div_codefuncode);
      div_codefuncode.appendChild(img);
      seleccion();
      // console.log(img.src);

    }

  }, false);
  btn_caleman9791.addEventListener("change", function(argument) {
    console.log(this);
    const img = document.createElement("img");
    img.classList.add("card__image");
    img.classList.add("caleman9791");
    img.src = URL.createObjectURL(this.files[0]);

    img.onload = function() {
      URL.revokeObjectURL(this.src);
      removeAllChildNodes(div_caleman9791);
      div_caleman9791.appendChild(img);
      seleccion();
      // console.log(img.src);

    }
  }, false);
  btn_tutorweb.addEventListener("change", function(argument) {
    console.log(this);
    const img = document.createElement("img");
    img.classList.add("card__image");
    img.classList.add("tutorweb");
    img.src = URL.createObjectURL(this.files[0]);

    img.onload = function() {
      URL.revokeObjectURL(this.src);
      removeAllChildNodes(div_tutorweb);
      div_tutorweb.appendChild(img);
      seleccion();
      // console.log(img.src);

    }
  }, false);
}
seleccion();