//variabili e domande
const nome = prompt("Qual'è il tuo nome?");
console.log(nome);
const cognome = prompt("Qual'è il tuo cognome?");
console.log(cognome);
const colorePreferito = prompt("Qual'è il tuo colore preferito?");
console.log(colorePreferito);

// password
let password = document.getElementById('password');
password.innerHTML = 'La tua password é la seguente: ' + nome + cognome + colorePreferito + '17';
console.log(password);