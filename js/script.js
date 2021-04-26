// 1. Chiedi all'utente il suo nome

// 2. poi chiedi il suo cognome

// 3. poi chiedi il suo colore preferito

// 4. Infine scrivi sulla pagina nomecognomecolorepreferito21

// .1
var userName = prompt('Come ti chiami?');
// console.log(userName);

// .2
var userSurname = prompt('Il tuo cognome?');
// console.log(userSurname);

// .3
var favoriteColor = prompt('Il tuo colore preferito?');
// console.log(favoriteColor);

// .bonus
const password = userName + userSurname + favoriteColor + 21;
// console.log(password);

// .4
document.getElementById('password').innerHTML = password.toLowerCase();
// console.log(document.getElementById('password'));