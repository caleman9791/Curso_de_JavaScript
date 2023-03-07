// alert("ok");
// Importante element.style.['-webkit-text-stock'];

// let elemento = document.querySelector(".elemento");
// // elemento.style.['background-color'] = "red";
// // console.log(document.links);
// console.log(elemento.style);



// Interesante 
const obj1 = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
};
const obj2 = {
  0: "2.1",
  1: "2.2",
  2: "2.3",
  length: 3,
  // [Symbol.isConcatSpreadable]: true
};
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]