console.log("Hola mundo");

//Primer ejercicio
var alertMessage = "Soy el primer script";
const ALERT_MESSAGE = " y estoy funcionando sobre "+ navigator.appName;
alert(alertMessage + ALERT_MESSAGE);

//Segundo ejercicio
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","octubre","Noviembre","Diciembre"];

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

console.table(meses);

//Tercer ejercicio
const values = [true, false, 5, "hola", [1,2,3], {age: 2, gender: 'male'}];

for (let i = 0; i < values.length; i++) {
    console.log(typeof values[i]);
}

//Cuarto ejercicio
var numero1 = 5;
var numero2 = 8

if (numero2 > numero1) {
    console.log("numero1 no es mayor que numero 2");
}
if (numero2 > 0) {
    console.log("numero 2 es positivo");
}
if (numero1 - 6 < 0) {
    console.log("numero1 es negativo o distinto de cero");
}
if (numero1 + 1 < numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

//Quinto ejercicio
function factorial(n) {
    if (n === 0) 
    {
        return 1;
    } else {
        return n * factorial(n-1);
    }

  }
  
  console.log("El factorial de 15 es: " + factorial(15) );


//Sexto ejercicio
function pedir() {
	var valor = prompt ("Escribe un número");
	return valor;
}

var valor = pedir();

if (valor % 2) {
    console.log(valor + " es un numero impar");
} else {
    console.log(valor + " es un numero par");
}

//Séptimo ejercicio
let parametro= prompt("Escribe un número");

function absoluto() {
    parametro = Math.abs(parametro);
}
console.log("El valor absoluto de "+ parametro + " es: " + Math.abs(parametro));

//Octavo ejercicio
let tirada= Math.floor(Math.random()* (13-1));;

var rutina = prompt("Escribe un número del 1 al 12");
    if (rutina > 12 || rutina < 0) {
        alert("El número no es valido");
        rutina = prompt("Escribe un número del 1 al 12");
    }
function dado() {
    tirada = Math.floor(Math.random()* (13-1));
}
console.log("Has introducido el número: " + rutina);
console.log("Ha salido un: " + tirada);

if (tirada == rutina) {
    console.log("Felicidades");
} else {
    console.log("No tantas felicidades");
}