
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

const userFirstName = prompt("Insert your first name");
const userLastName = prompt('Insert your last name');
const userColor = prompt('Insert your favourite color');
const userNumber = parseInt(prompt('Insert a random number'));

// § è uguale a:  document.getElementById('password-content').innerHTML = document.getElementById('password-content').innerHTML + userFirstName + userLastName + userColor + (userNumber + 23);
document.getElementById('password-content').innerHTML += userFirstName + userLastName + userColor + (userNumber + 23);

// let stringa = "ciao";
// stringa = stringa + ' amiche';  // ciao amiche
// stringa += ' e amici'; // ciao amiche e amici

// let numero = 10;

// numero = numero + 5;
// numero += 5;

// numero = numero * 5
// numero *= 5;

// numero = numero - 5;
// numero -= 5;

// numero = numero / 5;
// numero /= 5;