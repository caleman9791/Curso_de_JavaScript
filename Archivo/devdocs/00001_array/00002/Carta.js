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
    this.columna.setAttribute("class", "w3-col s3 w3-margin-top");
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

let carta = new Carta("texto aqui");
let carta2 = new Carta("texto aqui 2");

let contenedor_cartas = document.querySelector(".contenedor_cartas");
contenedor_cartas.appendChild(carta.getCarta);
contenedor_cartas.appendChild(carta2.getCarta);

console.log(carta.getCarta);