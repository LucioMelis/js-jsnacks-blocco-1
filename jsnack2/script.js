console.log('Js OK');
/*
Crea un array vuoto.Chiedi per 6 volte all’utente di inserire un numero,
    se è dispari inseriscilo nell’array.
*/

const containerNumberOdd = [];

for (i = 0; i < 6; i++) {
    let userNumber = parseInt(prompt('Inserisci un numero'));
    if (userNumber % 2 === 0) {
        console.log('Hai inserito un numero pari');
    } else {
        console.log('Hai inserito un numero dispari');
        containerNumberOdd.push(userNumber);
        console.log(containerNumberOdd);
    }
}