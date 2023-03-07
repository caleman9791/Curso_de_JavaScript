document.getElementById("boton1").addEventListener("click", () => agregar());

function agregar() {
  let fd = new FormData();
  fd.append("foto", document.getElementById("foto").files[0]);
  fetch('php.php', {
      method: 'POST',
      body: fd
    })
    .then(response => response.json())
    .then(datos => {
      if (datos.resultado == "Ok") {
        console.log(datos);
        document.getElementById("imagen").setAttribute("src", document.getElementById("foto").files[0].name);
      }

    });
}