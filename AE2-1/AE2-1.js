let valores =  ["Ana", 2, "Javi", 5, "Roberto",7,"Vanessa", 10];

console.log(valores.filter(function(texto){
    return typeof texto == "string";
}))

console.log(valores.filter(function(numero){
    return  numero % 2 == 0;
}))

