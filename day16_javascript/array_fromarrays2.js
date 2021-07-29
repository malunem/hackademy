// 2. Scrivere una funzione che, a partire da da N array in ingresso, restituisca un unico array ottenuto unendo tutti gli N array forniti.

let arrays = [
    [1,2,3],
    [4,5,6],
    [7,8,9]    
]

console.log(getOneArray(arrays))

function getOneArray(arrayOfArrays) {
    
    let array = []

    arrayOfArrays.forEach((el, i) => {
        array.push(...el)
    })

    return array
}