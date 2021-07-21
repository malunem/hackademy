/* Scrivere un programma che stampa in console tutti i numeri da 1 a 100 (inclusi), ma: 
- se il numero è multiplo di 3, stampa "Java" invece del numero
- se il numero è multiplo di 5, stampa "Script" invece del numero
- se il numero è multiplo di 15, stampa "JavaScript" invece del numero
- altrimenti stampa il numero

*/

for (let i = 1; i <= 100; i++){
    if (i % 15 == 0) {
        console.log("JavaScript");
    } else if (i % 3 == 0) {
        console.log("Java");
    } else if (i % 5 == 0) {
        console.log("Script");
    } else {
        console.log(i);
    }
}
