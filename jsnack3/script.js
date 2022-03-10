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