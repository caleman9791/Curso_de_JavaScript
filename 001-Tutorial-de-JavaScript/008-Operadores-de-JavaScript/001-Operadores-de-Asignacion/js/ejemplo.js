 const canvas =
     document.querySelector('canvas');

 const ctx =
     canvas.getContext('2d');

 ctx.fillStyle = 'white';

 ctx.fillRect(0, 0, 1000, 500);
 ctx.beginPath();
 ctx.lineWidth = "5";
 ctx.strokeStyle = "green"; // Green path
 ctx.moveTo(100, 200);
 ctx.lineTo(200, 100);
 ctx.stroke(); // Draw it

 ctx.beginPath();
 ctx.strokeStyle = "purple"; // Purple path
 ctx.moveTo(50, 0);
 ctx.lineTo(150, 130);

 ctx.stroke(); // Draw it
 ctx.beginPath();
 ctx.moveTo(20, 20);
 ctx.moveTo(50, 50);
 ctx.lineTo(20, 100);
 ctx.lineTo(150, 10);

 ctx.lineTo(250, 70);
 ctx.closePath();
 ctx.strokeStyle = "red";
 ctx.stroke();

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