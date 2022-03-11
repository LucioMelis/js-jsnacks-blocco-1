console.log('Js OK');
/*
Crea un array vuoto.Chiedi per 6 volte all’utente di inserire un numero,
    se è dispari inseriscilo nell’array.
*/

const containerNumberOdd = [];

for (i = 0; i < 6; i++) {
    let userNumber = parseInt(prompt('Inserisci un numero'));
    if (userNumber % 2 === 1) /*if (userNumber % 2 !== 0) meglio*/ {
        containerNumberOdd.push(userNumber);
    } else {
        console.log('hai inserito un numero pari');
    }
}
console.log(containerNumberOdd);


// versione corretta e completa -->

/*
const arrayNumeri = [];

for (let i = 0; i < 6; i++) {
    let nuovoNumero;
    while (isNaN(nuovoNumero)) {
        nuovoNumero = parseInt(prompt(`${i +} Inserisci un nuovo numero`));
    }
    if (nuovoNumero % 2 !== 0) {
        arrayNumeri.push(nuovoNumero);
    }
}

console.log('I numeri dispari che hai inserito sono: ' + arrayNumeri);
*/