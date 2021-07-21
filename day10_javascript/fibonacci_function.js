//Calcola l'n-esimo numero della sequenza di fibonacci
//Usare una funzione

let n = 12

console.log(`Il ${n}° numero di Fibonacci è ${fibonacci(n)}`)

function fibonacci(n){
    let fibonacci = 1
    
    if (n == 1 || n == 2) {
        return 1
    } else {
        let f1 = 1
        let f2 = 1
        
        for (let i = 3; i <= n; i++) {
            fibonacci = f1 + f2
            f1 = f2
            f2 = fibonacci  
        }
        
        return fibonacci
    }
}
