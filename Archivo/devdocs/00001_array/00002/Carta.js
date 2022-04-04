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

  }
  // Getter
  get getCarta() {
    this.crearCarta();
    return this.columna;

  }
  // Method
  crearCarta() {
    this.columna.setAttribute("class", "w3-col s12 m4 l3 w3-margin-top");
    this.carta.setAttribute("class", "w3-card-4");
    this.imagen.setAttribute("src", "https://www.w3schools.com/w3css/img_snowtops.jpg");
    this.imagen.setAttribute("class", "w3-image");
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
let carta = new Carta("texto aqui");
let carta2 = new Carta("texto aqui 2");

let contenedor_cartas = document.querySelector(".contenedor_cartas");
contenedor_cartas.appendChild(carta.getCarta);
contenedor_cartas.appendChild(carta2.getCarta);

console.log(carta.getCarta);