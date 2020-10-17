/*
//Este era el primer intento, no funciona. 
//La función devuelve el número 10 en lugar del 4. supongo que poorque 4 es mayor que 1 y que 0.
let values = [91,4,56,10,39]

function findMinimum(num) {
    num.sort();
    return num[0];
}
console.log(findMinimum(values));
*/

var values = [91,4,56,10,39];
values.sort(function findMinimum(a, b) {
  return a - b;
});
console.log(values[0]);