   // Asumiendo  que lo activaremos la función con el botón y desplegaremos el resultado  
   // Seleccionamos un botón y un elemento para desplegar el mensaje 
   var desplegar = document.getElementById("desplegar");
   var brn_precione = document.getElementBy
   Id("brn_precione");

   //  Agregamos un evento al botón  y le pasamos la función a  ejecutar en el  segundo 
   // parámetro  y en le primer parámetro el nombre del evento 

   brn_precione.addEventListener("click", optenLocalizacion);

   function optenLocalizacion() {
       //  Este condicional determina si fue ejecutada la  instrucción  (navigator.geolocation)
       //  de ejecutarse se realizara la constricción dentro del as primeras llaves , que a 
       // su vez llamara la función muestraPosicion para que realice su trabajo 
       if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(muestraPosicion);

       } else {
           //  Si  la primera condición no   se cumple lanzara este menaje usando 
           // el elemento  seleccionado arriba para despegarlo 
           desplegar.innerHTML = "Este navegador no admite la geolocalización.";
       }
   }
   //  la función getCurrentPosition llama a esta función  y de manera implícita ajora un valor al parámetro 
   function muestraPosicion(position) {

       // La siguiente instrucción  nos arroja la latitud y la longitud en la que se encuentra el usuario que ejecuta la función  
       desplegar.innerHTML = "Latitud: " + position.coords.latitude +
           "<br/>Longitud: " + position.coords.longitude;
   }

   // ===============================================================================
   //  El segundo ejemplo muestra otras opciones como parámetros lo cual son nocionales 
   var opciones = {
       //  Este parámetro indica habilitar la máxima precisión o no
       //  lo cual se usa true para que si se habilite  y false para no habilitarlo
       enableHighAccuracy: true,
       // En este parámetro indicamos el tiempo de espera antes de 
       // llamar la función de error lo cual es el segundo 
       // parámetro que se le pasa a la función getCurrentPosition
       timeout: 5000,
       //  Indica cual es el tiempo máximo que estar en la memoria 
       // cache la ubicación del usuario en el navegador 
       maximumAge: 0
   };

   //  Función en caso de éxito 
   function exito(pos) {

       var crd = pos.coords;
       // En esta sección mostramos en consola las coordenadas
       // ademas mostramos una distancia aproximada como margen 
       // de error a la posición real del usuario 
       console.log('Tu puesto actual es:');
       console.log(`Latitud : ${crd.latitude}`);
       console.log(`Longitud : ${crd.longitude}`);
       console.log(`Mas o menos a ${crd.accuracy} metros.`);
   }
   //  función en caso de error 
   function error(err) {
       console.warn(`ERROR(${err.code}): ${err.message}`);
   }

   //  Como vemos diferencia del primer ejemplo, acá se la pasan tres parámetros 
   //  algo que falta aquí es que no comprobamos su se ejecuto o no la función
   //  cosa que deberíamos haber hecho  usando un condicional tal 
   // y como se realizo en le primer ejemplo
   navigator.geolocation.getCurrentPosition(exito, error, opciones);