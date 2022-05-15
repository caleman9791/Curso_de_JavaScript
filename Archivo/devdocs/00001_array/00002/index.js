class ObjetoIterador {
  constructor(iiterador) {
    this.iiterador = iiterador[Symbol.iterator]();
    this.llamada = 0;
  }

  getNextvalue() {
    return this.iiterador.next().value;
  }

}

let prueba = false;

function llamada(argument) {

  return prueba.getNextvalue();

}

function removeAllChildNodes(parent) {

  while (parent.firstChild) {

    parent.removeChild(parent.firstChild);

  }

}
let resultado_caracter =
  document.querySelector('#resultado_caracter ol');

let btn_model_iterador =
  document.querySelector('.btn_model_iterador');
let btn_model_carta =
  document.querySelector('.btn_model_carta');

btn_model_iterador.addEventListener("click", function(argument) {
  removeAllChildNodes(resultado_caracter);
  document.getElementById('modal_001').style.display = 'block';
});

btn_model_carta.addEventListener("click", function(argument) {
  removeAllChildNodes(resultado_caracter);
  document.getElementById('modal_002').style.display = 'block';
});

function iteraddor_modal(argument) {

  const matriz = argument;

  const literable_matriz =
    matriz[Symbol.iterator]();

  removeAllChildNodes(resultado_caracter);

  for (let caracter of literable_matriz) {

    let lista = document.createElement('li');

    lista.textContent = caracter;

    resultado_caracter.appendChild(lista);

  }

}

let btn_iterar = document.querySelector(".btn_iterar");

btn_iterar.addEventListener("click", function(argument) {
  let txt_cadena = document.querySelector(".txt_cadena");
  let tipo = document.querySelectorAll(".tipo");

  let seleccion = "";

  for (var i = 0; i < tipo.length; i++) {

    if (tipo[i].checked) {
      seleccion = tipo[i].value;
    }

  }

  if (seleccion == "normal") {

    iteraddor_modal(txt_cadena.value);

  } else {

    if (prueba == false) {
      prueba = new ObjetoIterador(txt_cadena.value);
    } else {

    }

    let lista = document.createElement('li');

    lista.textContent = llamada();

    resultado_caracter.appendChild(lista);

  }

});

// let carta3 = new Carta("texto aqui 3");
// // let carta2 = new Carta("texto aqui 2");

// // let contenedor_cartas = document.querySelector(".contenedor_cartas");
// // contenedor_cartas.appendChild(carta.getCarta);
// contenedor_cartas.appendChild(carta3.getCarta);