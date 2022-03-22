  // https://stackoverflow.com/questions/35774898/how-to-get-data-from-formdata-in-a-php-file
  function fun_enviar(data, url) {

    let datos = data;
    // NOTA: INSERTAR_ANUNCIO
    $.ajax({
      url: url,
      type: 'POST',
      data: datos,
      contentType: false,
      cache: false,
      processData: false,
    }).done(function() {

      // console.log("success");

    }).fail(function(error) {

      // console.log(error);

    }).always(function(resultado) {


      console.log(resultado);


    });

  }