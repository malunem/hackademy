// 2. Scrivere una funzione che, a partire da da N array in ingresso, restituisca un unico array ottenuto unendo tutti gli N array forniti.

let array1 = [1,2,3,4,5,6];
let array2 = ['a','b','c','d','e'];

console.log(getOneArray(array1, array2));

function getOneArray(array1, array2) {
    return [...array1, ...array2]
}