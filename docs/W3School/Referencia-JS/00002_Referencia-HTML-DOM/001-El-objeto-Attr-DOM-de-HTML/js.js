function myFunction() {
    var btn = document.getElementsByTagName("BUTTON")[0];

    for (var i = 0; i < btn.attributes.length; i++) {
        console.log(btn.attributes[i].name);
    }

}

myFunction();