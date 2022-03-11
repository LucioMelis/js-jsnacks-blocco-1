/*
Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero. 
(questo potrebbe richiedere un minimo di ricerca)
*/
console.log('Js Ok');

let number = prompt('Inserisci il numero').split('');
let sum = 0;
console.log(number);

for (let i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
}

console.log(sum);

/*
// correzzione esercizio 
let numeroUtente;
while (isNaN(parseInt(numeroUtente)) || numeroUtente.length !== 4) {
    numeroUtente = prompt('Inserisci un numero di 4 cifre');
}
let sommaCifre = 0;
for (let i = 0; i < numeroUtente.length; i++) {
    const carattere = numeroUtente[i];
    sommaCifre += parseInt(carattere);
}
console.log(`La somma delle cifre del numero ${numeroUtente} è: ${sommaCifre}`);
*/