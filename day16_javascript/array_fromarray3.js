// 2. Scrivere una funzione che, a partire da da N array in ingresso, restituisca un unico array ottenuto unendo tutti gli N array forniti.

console.log(getArray([1,2,3, [99, 101, [33, 44]]], [4,5,6], [7,8,9]))

function getArray(...names) {
    
    return names.flat(Infinity)
}