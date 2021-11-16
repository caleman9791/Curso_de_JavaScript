 const canvas =
     document.querySelector('canvas');

 const ctx =
     canvas.getContext('2d');

 ctx.fillStyle = 'white';

 ctx.fillRect(0, 0, 1000, 500);
 // ctx.beginPath();
 ctx.lineWidth = "3";

 // ctx.strokeStyle = "green"; // Green path
 // ctx.moveTo(100, 200);
 // ctx.lineTo(200, 100);
 // ctx.stroke(); // Draw it

 // ctx.beginPath();
 // ctx.strokeStyle = "purple"; // Purple path
 // ctx.moveTo(50, 0);
 // ctx.lineTo(150, 130);
 // ctx.stroke(); // Draw it

 ctx.beginPath();
 ctx.moveTo(160, 210);
 // ctx.moveTo(50, 50);
 ctx.lineTo(300, 210);
 ctx.lineTo(300, 75);
 ctx.lineTo(900, 75);
 ctx.lineTo(900, 210);
 ctx.lineTo(500, 210);
 ctx.lineTo(500, 350);
 ctx.lineTo(400, 350);
 // ctx.closePath();
 ctx.strokeStyle = "red";
 ctx.stroke();

 ctx.beginPath();
 ctx.moveTo(140, 210);
 // ctx.moveTo(50, 50);
 ctx.lineTo(140, 350);
 ctx.lineTo(240, 350);
 // ctx.lineTo(300, 75);
 // ctx.lineTo(900, 75);
 // ctx.lineTo(900, 210);
 // ctx.lineTo(500, 210);
 // ctx.lineTo(500, 400);
 // ctx.closePath();
 ctx.strokeStyle = "blue";
 ctx.stroke();

 // ctx.beginPath();
 // ctx.strokeStyle = "blue"; // Purple path
 // ctx.moveTo(100, 300);
 // ctx.lineTo(50, 0);
 // ctx.moveTo(100, 300);
 // ctx.lineTo(300, 90);
 // ctx.stroke(); // Draw it

 var btn =
     document.querySelectorAll('.botones img'),
     bonbilla =
     document.querySelectorAll('.bombilla img');

 for (var i = 0; i < btn.length; i++) {
     btn[i].style.backgroundColor = "red"
     btn[i].addEventListener('click',
         cambiacolor);

 }

 function cambiacolor(argument) {

     // console.log(this);

     if (this.style.backgroundColor == "red") {

         this.style.backgroundColor = "green";

     } else if (this.style.backgroundColor == "green") {

         this.style.backgroundColor = "red";

     }
     for (var i = btn.length - 1; i >= 0; i--) {

         if ((btn[0].style.backgroundColor == "green") && (btn[1].style.backgroundColor == "green")) {
             bonbilla[0].src = 'img/pic_bulbon.gif';
         } else {
             bonbilla[0]
                 .src = 'img/pic_bulboff.gif';
         }
     }
 }