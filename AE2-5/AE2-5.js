let values = [1,3,5,7,9];

function multipleFactorial(x) {

    return x.map( function factorial(y) {
        if (y === 0) 
    {
        return 1;
    } else {
        return y * factorial(y-1);
    }
        }
    )
}
    
console.log(multipleFactorial(values))