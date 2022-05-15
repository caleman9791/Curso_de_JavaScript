class Carta {

  constructor(texto) {

    this.columna =
      document.createElement("div");
    this.carta =
      document.createElement("div");
    this.imagen =
      document.createElement("img");
    this.contenedor_texto =
      document.createElement("div");
    this.parrafo =
      document.createElement("p");
    this.texto = texto;
    this.url = "";

  }
  // Getter
  get getCarta() {
    this.crearCarta();
    return this.columna;

  }

  setImagen(url_img) {
    this.url = url_img;
    this.imagen.src = this.url;

  }
  // Method
  crearCarta() {
    this.columna.setAttribute("class", "w3-col s12 m4 l3 w3-margin-top");
    this.carta.setAttribute("class", "w3-card-4");
    this.imagen.setAttribute("src", "https://www.w3schools.com/w3css/img_snowtops.jpg");
    this.imagen.setAttribute("class", "w3-image");
    this.imagen.style.height = "100px";
    this.imagen.style.width = "100%";
    this.contenedor_texto.setAttribute("class", "w3-container w3-center");
    this.columna.appendChild(this.carta);
    this.carta.appendChild(this.imagen);
    this.carta.appendChild(this.contenedor_texto);
    this.contenedor_texto.appendChild(this.parrafo);
    this.parrafo.textContent = this.texto;

  }
}

let urlimagen = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._MTmNC3WdZXD2NWsdqT_3wHaDp%26pid%3DApi&f=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XNUZX-GXCg1TfVoPhSntmgHaE4%26pid%3DApi&f=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5NXDSVdHTeVdOQ_juwsTCwHaD4%26pid%3DApi&f=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.cWK4G9GIBy_sb9JMTaeksQHaEK%26pid%3DApi&f=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Cn9XK8FqreFA7888qEXQuAHaHa%26pid%3DApi&f=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.mypuNp4YOZX7O_aPoP8kjAHaEG%26pid%3DApi&f=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Fvlkg9xUsG_E1FfqUQ7TXgHaEo%26pid%3DApi&f=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zCwWPoP__KkHN0UKtY6GuAHaE6%26pid%3DApi&f=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eqgdRl_ojsdEgt4Tc19kQgHaEK%26pid%3DApi&f=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Pff38JR9tRuWSgQu9gdyCAHaE7%26pid%3DApi&f=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.OlaNMyLTClNv88RW9HhCJwHaEK%26pid%3DApi&f=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3Ackw8PaIQA3FRS9Clf9aAHaEw%26pid%3DApi&f=1",
  // "xxxxxxxxxxx",
  // "xxxxxxxxxxx",
  // "xxxxxxxxxxx",
  // "xxxxxxxxxxx",
  // "xxxxxxxxxxx",
  // "xxxxxxxxxxx",
  // "xxxxxxxxxxx",
  // "xxxxxxxxxxx",
  // "xxxxxxxxxxx",
  // "xxxxxxxxxxx",
];

let selecion_img = document.querySelectorAll(".selecion_img img");
let targeta_muestrra = document.querySelector(".targeta_muestrra");
let btn_texto_crear = document.querySelector(".btn_texto_crear");
let texto_aqui = document.querySelector(".texto_aqui");
let btn_crear = document.querySelector(".btn_crear");
targeta_muestrra.style.height = "200px";
for (var i = 0; i < selecion_img.length; i++) {

  selecion_img[i].src = urlimagen[i];
  selecion_img[i].style.height = "50px";
  selecion_img[i].style.width = "100%";
}
for (var i = 0; i < selecion_img.length; i++) {
  selecion_img[i].addEventListener("click", function(arguments) {
    targeta_muestrra.src = this.src;
  });
}
let carta = [];
// carta.push(new Carta("texto aqui"));
// carta.push(new Carta("texto aqui 2"));

for (var i = 0; i < 10; i++) {
  carta.push(new Carta("texto aqui " + i));
}

let contenedor_cartas = document.querySelector(".contenedor_cartas");

for (var i = 0; i < carta.length; i++) {

  contenedor_cartas.appendChild(carta[i].getCarta);
  carta[i].setImagen(urlimagen[i]);
}
// contenedor_cartas.appendChild(carta[0].getCarta);
// contenedor_cartas.appendChild(carta[1].getCarta);

console.log(carta);

btn_texto_crear.addEventListener("keyup", function(arguments) {
  console.log(this.value);

  if (this.value.length <= 20) {
    if (this.value == "") {
      texto_aqui.textContent = "Escribe titulo aquí ...";
    } else {
      texto_aqui.textContent = this.value;
    }
  } else {
    this.value = texto_aqui.textContent;
  }

  // texto_aqui.textContent = this.value;
});

btn_crear.addEventListener("click", function(arguments) {
  let temp_card = new Carta(texto_aqui.textContent);
  temp_card.setImagen(targeta_muestrra.src);
  carta.push(temp_card);
  contenedor_cartas.appendChild(temp_card.getCarta);

});