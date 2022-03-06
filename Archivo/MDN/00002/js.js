// let texto = '';
// let parrafos = document.querySelectorAll('.texto>p');

// for (var i = 0; i < parrafos.length; i++) {
// 	texto += " " + parrafos[i].textContent.trim();
// }



// console.log(parrafos);
// responsiveVoice.speak(texto, "Spanish Female");



// let text = document.getElementById("article-container").textContent.trim();
// let text = "A la ahora de planificar la interfaz de tu aplicación web debes tomar en consideración, los colores, tamaños, tipos de letra, ubicación de los elementos, reacción de los elementos con los que el usuario puede interactuar, entre otros. También debemos pensar en los tamaños de los dispositivos que usarán los usuarios para visualizar el contenido de nuestra aplicación. Una vez tengamos todo esto definido. Podemos realizar un boceto a papel para previsualizar el contenido. En cuanto a los tipos de letra debemos encontrar la mejor alternativa, ya que existen un sinfín de tipos de letras solo que no todas serán cómodas para que el usuario pueda leer el contenido. Además deberás tomar en consideración la accesibilidad. En cuanto a los colores te recomiendo busques información sobre estos pues existen investigaciones sobre las reacciones humanas frente a interfaces y su relación con los colores. Aun que más adelante estaré publicando una entrada dedicada a los colores, donde hablaré sobre esto.";
// ¿Cómo se verá su sitio web? 
let voice = "Spanish Female";
let text = "En esta entrada hablaremos de los conceptos necesarios para trabajar su aplicación web. Como todos sabemos para la construcción de algo debemos tomar en consideración el hecho de planificación primero. Entonces comencemos. A la ahora de planificar la interfaz de tu aplicación web debes tomar en consideración los colores tamaños tipos de letra, ubicación de los elementos, reacción de los elementos con los que el usuario puede interactuar, entre otros. También debemos pensar en los tamaños de los dispositivos que usaran los usuarios para visualizar en contenido de nuestra aplicación. Una vez tengamos todo esto definido. Podemos realizar un boceto a papel para previsualizar el contenido. En cuanto a los tipos de letra debemos encontrar la mejor alternativa, ya que existen un sinfín de tipos de letras solo que no todas serán cómodas para que el usuario pueda leer el contenido. Además deberás tomar en consideración la accesibilidad. En cuanto a los colores te recomiendo busques información sobre estos pues existen investigaciones sobre las reacciones humanas frente a interfaces y su relación con los colores. Aun que más adelante estaré publicando una entrada dedicada a los colores, donde hablaré sobre esto. Lo que se intenta con él UI es que el sistema sea lo más claro, conciso, coherente, flexible y atractivo visualmente posible. Ya que tenemos clara la planificación debo mencionar que hay dos conceptos importantes que debes conocer, lo cual son la interfaz de usuario y la experiencia del usuario. ¿Cuál es la diferencia entre la interfaz del usuario y la experiencia de usuario?La experiencia de usuario (user experience, UX) y la interfaz del usuario (UI) son conceptos que están muy relacionados. Sin embargo, no son lo mismo. La UX es la sensación que tiene un usuario al usar un determinado servicio, tanto físico como digital. En el caso de la UX, los desarrolladores se fijan más en que a los usuarios les guste más el sistema por su funcionalidad. En el caso de la UI, el objetivo es estético. Por tanto, el desarrollador se preocupa más de que el usuario sienta que el sistema es bonito e intuitivo. En la siguiente tabla se muestran las diferencias entre UX y UI UN ejemplo es él sé que trabajamos en una aplicación donde se debe hacer énfasis a los resultados estadísticos y será usado por empleados de una empresa que provee servicios. Estas interfaces por lo general carecen de colores y efectos, pues se busca obtener resultados basados en estadísticas y usualmente se generan reportes limpios. Sin embargo la interfaz enfocada al atractivo visual puede ser al panel de compra de la misma empresa solo que esté lo usaran los consumidores de servicios o productos. Estos no verán estadísticas de compras solo verán una interfaz de consumo lo que se entiende que deberá ser visualmente atractiva para que el usuario con suma más y le guste estar consumiendo. También debemos considerar que los consumidores no tendrán una capacitación para trabajar con la interfaz y los empleados de la empresa sí. Por lo que la interfaz de usuarios consumidores debe ser lo más sencilla posible e intuitiva para el usuario";


let leer = document.getElementById("leer");

leer.addEventListener("click", function(argument) {
	responsiveVoice.speak(text, voice, {
		onstart: function(argument) {
			console.log('start');
		},
		onend: function(argument) {
			console.log('end');
			var voicelist = responsiveVoice.getVoices();
			let resultado = '';
			for (var i = voicelist.length - 1; i >= 0; i--) {
				// console.log(voicelist[i].name);
				resultado += " ** " + voicelist[i].name;
			}
			console.log(resultado);
		}
	});

});



// console.log(voicelist);