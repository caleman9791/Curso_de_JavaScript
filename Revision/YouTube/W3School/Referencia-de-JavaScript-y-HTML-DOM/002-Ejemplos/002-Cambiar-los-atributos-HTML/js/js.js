// 

let img = document.querySelectorAll(".img img");
let centralimg = document.querySelectorAll(".grande img");

let srcimg1 = centralimg[0].src;
let srcimg2 = centralimg[1].src;

for (var i = img.length - 1; i >= 0; i--) {

    img[i].onclick = function(argument) {

        for (var i = centralimg.length - 1; i >= 0; i--) {

            centralimg[i].src = this.src;
        }

    }
}

for (var i = centralimg.length - 1; i >= 0; i--) {

    centralimg[i].onclick = function(argument) {

        for (var i = centralimg.length - 1; i >= 0; i--) {

            if (i == 0) {

                centralimg[i].src = srcimg1;

            } else {
                centralimg[i].src = srcimg2;
            }

        }

    }
}