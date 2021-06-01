function ejempplo1(argument) {

    let btn = document.getElementById('btn1');

    btn.onclick = function() {
        let parr = document.getElementById('parr1');
        // console.log(parr);
        parr.innerHTML = "Parrafo modificado 1";

    };

}

function ejempplo2(argument) {

    let btn = document.getElementById('btn3');

    btn.addEventListener("click", myScript3);

    function myScript3(argument) {

        let parr = document.getElementById('parr3');
        // console.log(this);
        parr.innerHTML = "Parrafo modificado 3";
    }
}

function ejempplo3(argument) {

    let btn = document.getElementById('btn4');

    btn.addEventListener(
        "click",
        function(argument) {

            let parr = document.getElementById('parr4');
            // console.log(this);
            parr.innerHTML = "Parrafo modificado 4";
        });

}

ejempplo1();
ejempplo2();
ejempplo3();