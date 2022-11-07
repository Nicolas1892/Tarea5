function fibonacci(limite) {

    const arr_fib = [0, 1];
    for(let i = 2; i < limite; i++) {
            arr_fib[i] = arr_fib[i-1] + arr_fib[i-2];
    }

    return arr_fib;
}

const serie_fibonacci = fibonacci(1000);

console.log(serie_fibonacci);

let array_pares = serie_fibonacci.filter(function(numeros) {
    return numeros % 2 == 0;
})

console.log(array_pares);


let array_impares = serie_fibonacci.filter(function(numeros) {
    return numeros % 3 == 0;
})

console.log(array_impares);
