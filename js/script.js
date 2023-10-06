

 let divPassword = document.getElementById('newPassword');

 let nome= prompt('Qual è il tuo nome?' );
let cognome = prompt('Qual è il tuo cognome?');
let colore = prompt('Qual è il tuo colore preferito?');
const numero = 21;


 let newPassword = nome + cognome + colore + numero;

 divPassword.innerHTML = newPassword;

let divNome = document.getElementById('nome');

divNome.innerHTML = nome;

let divCognome = document.getElementById('cognome');
 
divCognome.innerHTML = cognome;

let divColore = document.getElementById('colore');

divColore.innerHTML = colore;