 const canvas =
     document.querySelector('canvas');

 const ctx =
     canvas.getContext('2d');

 ctx.fillStyle = 'white';

 ctx.fillRect(0, 0, 1000, 500);

 var btn =
     document.querySelectorAll('.botones img'),
     bonbilla =
     document.querySelectorAll('.bombilla img');

 for (var i = 0; i < btn.length; i++) {
     btn[i].style.backgroundColor = "green"
     btn[i].addEventListener('click',
         cambiacolor);

 }

 function cambiacolor(argument) {

     console.log(this.style.backgroundColor);

     if (this.style.backgroundColor == "red") {

         this
             .style.backgroundColor = "green";
         bonbilla[0]
             .src = 'img/pic_bulboff.gif';

     } else if (

         this
         .style
         .backgroundColor ==
         "green") {

         this.style.backgroundColor = "red";
         bonbilla[0].src = 'img/pic_bulbon.gif';
     }
 }