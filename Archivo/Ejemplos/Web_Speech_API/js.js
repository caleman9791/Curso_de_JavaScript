let utterance = new SpeechSynthesisUtterance("Hello world!");
// speechSynthesis.speak(utterance);


// var lang = window.navigator.languages ? window.navigator.languages[0] : null;
// lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
// if (lang.indexOf('-') !== -1)
// 	lang = lang.split('-')[0];
// if (lang.indexOf('_') !== -1)
// 	lang = lang.split('_')[0];
// console.log(lang);
// var say = 'Hello';
// var voice = 'UK English Female';
// switch (lang) {
// 	case 'en':
// 		say = "Hello";
// 		voice = "UK English Female";
// 		break;
// 	case 'es':
// 		say = "Hola";
// 		voice = "Spanish Female";
// 		break;
// 	case 'fr':
// 		say = "Bonjour";
// 		voice = "French Female";
// 		break;
// 	default:
// 		say = "Hello";
// 		voice = "UK English Female";
// 		break;
// }
let voice = "Spanish Female";

// let text = document.getElementById("article-container").textContent.trim();
let text = "A la ahora de planificar la interfaz de tu aplicación web debes  tomar en consideración, los colores, tamaños, tipos de letra, ubicación de los elementos, reacción de los elementos  con los que el usuario puede interactuar, entre otros. También debemos pensar en los tamaños  de los dispositivos que usarán los usuarios para visualizar el contenido de nuestra aplicación. Una vez tengamos todo esto definido. Podemos realizar un boceto a papel para previsualizar el contenido. En cuanto a los tipos de letra debemos encontrar la mejor alternativa, ya que existen un sinfín de tipos de letras solo que no todas serán cómodas  para que el usuario pueda leer el contenido. Además deberás tomar en consideración la accesibilidad. En cuanto a los colores te recomiendo  busques información sobre estos  pues existen investigaciones sobre  las reacciones  humanas frente a interfaces  y su relación con los colores. Aun que más adelante estaré publicando una entrada dedicada a los colores, donde hablaré sobre esto.";

// responsiveVoice.speak(document.getElementById("article-container").textContent);

// responsiveVoice.speak(document.getElementById("article-container").textContent, "Spanish Female");
// console.log(element);



responsiveVoice.speak(text, voice, {
	onstart: function(argument) {
		console.log('start');
	},
	onend: function(argument) {
		console.log('end');
	}
});