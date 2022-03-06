	$.ajax({
	   url: './xxxxxxxxx.php',
	   type: 'POST',
	   data: formData,
	   contentType: false,
	   cache: false,
	   processData: false,
	}).done(function() {

	}).fail(function(error) {

	   console.log(error);

	}).always(function(resultado) {

	   console.log(resultado);

	});