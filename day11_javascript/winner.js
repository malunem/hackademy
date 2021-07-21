// Dato 1 array formato da ulteriori array così composti ["nome", [punteggi]], calcolare la media dei punteggi di ogni giocatore e restituire il nome del vincitore.

let scores = [
    ["Alan", [20, 18, 56, 3, 98]],
    ["Bob", [38, 76, 11]],
    ["Charlie", [8, 90, 65, 71, 47, 66]]
]

console.log(isWinner(scores))

function isWinner(scores) {
    
    return(
        // 1. per ogni array-giocatore restituisce: il primo elemento (nome) e il risultato di queste operazioni sul secondo elemento (array punteggi):
            // 1.a Con reduce somma tutti i punteggi
            // 1.b Dividendo per la lunghezza dell'array calcola la media
        // 2. Con sort ordina i giocatori con punteggi decrescenti
        // 3. Con gli indici finali seleziona il nome del primo giocatore
        
        scores.map((el) => [el[0], el[1].reduce((t, n) => t + n) / el[1].length])
        .sort((a, b) => b[1] - a[1])[0][0]
    )
}