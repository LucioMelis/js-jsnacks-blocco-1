console.log('Js OK');
/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/


const guestList = ["Ciro", "Luca", "Erick", "Stefano", "Lucio", "Giova"];
const nameUser = prompt('Inserisci il nome');

let trovato = false;

for (let i = 0; i < guestList.length && trovato === false; i++) {

    if (guestList[i] === nameUser.trim()) {
        trovato = true;
    }
}

if (trovato === true) {
    console.log('Puoi partecipare alla festa');
} else {
    console.log('Non puoi partecipare alla festa');
}


