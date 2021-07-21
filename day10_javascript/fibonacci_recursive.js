//Calcola l'n-esimo numero della sequenza di fibonacci
//Usare una funzione RICORSIVA

let n = 12

console.log(`Il ${n}° numero di Fibonacci è ${fibonacci(n)}`)

function fibonacci(n){
    let fib = 1
    
    if (n == 1 || n == 2) {
        return 1
    } else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}
