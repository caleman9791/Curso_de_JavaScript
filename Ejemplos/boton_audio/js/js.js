// responsiveVoice.speak("hello world");
let texto =
  "Se estima que la economía digital tiene un crecimiento anual de 15% y que anualmente 7,000 tiendas cierran sus operaciones físicas anualmente. Podríamos decir que el Covid-19 ha exponenciado estas estadísticas y que la economía digital sobrepasará este año la tasa de crecimiento regular. Desde la compra y venta de productos, realización de pagos y transacciones, hasta teleconferencias para reuniones del trabajo y personales, webinars y el uso de plataformas de educación virtual, la digitalización de los procesos ha pasado a ser un aspecto principal de la vida cotidiana globalmente.  Es por esto que los maestros empresariales deben agarrar esta oportunidad y educar a los estudiantes sobre la economía digital. La economía digital se refiere a las actividades comerciales que se realizan por la conexión en línea entre las personas, negocios, equipos electrónicos, data y procesos. El término fue difundido en el año 1995 por Don Tapscott en su best-seller The Digital Economy: Promise and Peril in the Age of Networked Intelligence, uno de los primeros libros que muestra cómo el Internet cambiaría la forma en que se realizan las actividades comerciales.  Algunas ideas empresariales que los estudiantes pueden realizar bajo el tema de economía digital son:  Ventas en línea – en esta área pueden considerar la venta de artículos deportivos; tarjetas de juegos como Pokemon o Yugioh; venta de artículos de moda que ellos confeccionen como T-Shirts o joyería; hasta piezas de arte. Ebay, Amazon, Shopify y Etsy son algunas plataformas de comercio electrónico que pueden utilizar para crear su primera tienda en línea. Creadores de Contenido – si disfrutan consumir contenido, ¿porqué no invitarlos a producir su contenido? Teniendo en cuenta su pasatiempo o algún tema de interés por el que sientan pasión, pueden crear un blog, vlog o videos en You Tube. Páginas de Internet Especializadas – aquí no estamos hablando de una página web tradicional, sino una dirigida a algún nicho de mercado.  Para educar a los estudiantes a crear y desarrollar empresas digitales recomendamos que utilice una plataforma digital que permita el trabajo en equipo y colaboración. Además aprovechar el uso de las videoconferencias para conectar con empresarios del patio e internacionales.  Por: Rosaleé Córdova, cofundadora";
let boton = document.querySelector(".boton");
console.log(boton);
// let equalizador = document.querySelector(".equalizador");
let video = document.querySelector(".video");
video.pause();
// responsiveVoice.pause();
let play = false;
let pause = false;
boton.addEventListener("click", function(arguments) {
  console.log('ok');
  if (!play) {
    video.play();
    boton.src = "https://yeespr.net/st2/elementosboton/stop-icon.png";
    // equalizador.src = "https://gifyu.com/image/SwStK";
    responsiveVoice.speak(texto, "Spanish Female");
    play = true;
    console.log('play');

  } else {
    video.pause();
    responsiveVoice.pause();
    boton.src = "https://yeespr.net/st2/elementosboton/play-icon.png";
    // equalizador.src = "https://gifyu.com/image/SwSrr";
    play = false;
    console.log('pause');
  }

});