/*function Fibonacci () {
    const fib = [0, 1];
    for(let i = 2; i < 1001; i++){
        fib[i] = fib[i-1] + [i-2];
    }
    return fib;
}
const Secuencia_Fibonacci = Fibonacci ();

console.log(Secuencia_Fibonacci);
*/

/*
var fib = function(n) {
    const sol = [0, 1];

    for (let i = 2; i<= n; i++) {
        sol[i] = sol[i -1] + sol[i - 2];
    }

    return sol[n];
};
console.log();
*/

/*var fib = function(n) {
    const sol = [0, 1];

    for (let i = 2; i<= 1001; i++) {
        sol[i] = sol[i -1] + sol[i - 2];
    }

    return sol[n];
};
console.log(); */

/*var fib = function(n) {
    if (n <= 1) return n;

    return fib(n-1) + fib(n-2);
}
console.log(fib);*/

/*


const fib = [0, 1];

for (i = 2; i <= 1000; i++) {
 
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib);
}*/



var Fibonacci = [i];
for (var i = 0; i<=1000; i++) {
    n +=i;
    Fibonacci(n);
};
console.log(Fibonacci);

