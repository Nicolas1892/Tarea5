function fibonacci(limite) {

    const arr_fib = [0, 1];
    for(let i = 2; i < limite; i++) {
            arr_fib[i] = arr_fib[i-1] + arr_fib[i-2];
    }

    return arr_fib;
}

const serie_fibonacci = fibonacci(100);

let mil_n = serie_fibonacci.filter(number => number < 1000);

console.log(mil_n);

let array_pares = serie_fibonacci.filter(function(numeros) {
    return numeros % 2 == 0;
})

let mil_pares = array_pares.filter(number => number < 1000);


console.log(mil_pares);


let array_impares = serie_fibonacci.filter(function(numeros) {
    return numeros % 2 != 0;
})
let mil_impares = array_impares.filter(number => number < 1000);

console.log(mil_impares);
