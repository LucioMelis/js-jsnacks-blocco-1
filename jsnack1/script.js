console.log('Js OK');
/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/


const guestList = ["Ciro", "Luca", "Erick", "Stefano", "Lucio", "Giova"];
const button = document.getElementById('btn');
let nameUser = document.getElementById('nome-invitato');
let result = document.querySelector('.result');
let trovato = false;

button.addEventListener('click', function () {
    for (let i = 0; i < guestList.length && trovato === false; i++) {

        if (guestList[i] === nameUser.value.trim()) {
            trovato = true;
        }
    }

    if (trovato === true) {
        result.innerHTML = 'Puoi partecipare alla festa';
    } else {
        result.innerHTML = 'Non puoi partecipare alla festa';
    }
})

document.getElementById('btn-reset').addEventListener('click', function () {
    result.innerText = '';
    nameUser.value = '';
})

