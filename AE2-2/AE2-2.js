//Falta que sea capaz de devolver undefined, pero no se como

let dataArray = new Array (5,10,15,20,25);

function average(num) {
        return num.reduce((a, b) => ( a + b )) / num.length
}
console.log(average(dataArray))