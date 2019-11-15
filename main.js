// Esercitazione 2 => repo: js-dadi
// Generare un numero casuale tra 1 e 6.
// Attraverso un prompt chiedere all'utente un numero tra 1 e 6.
// Stampare un messaggio per dire all'utente se ha vinto oppure no (il numero più alto vince).
// -----------------------------------------------------------------------------

// prompt per chiedere all'utente un numero tra 1 e 6
var userDice = parseInt(prompt("Inserisci un numero da 1 a 6"));

// controllo che l'input utente sia un numero compreso tra 1 e 6
if (!isNaN(userDice) && (userDice > 0) && (userDice < 7)) {
    // input in range
    // genero un numero random tra 1 e 6
    var min = 1;
    max = 6;
    randomDice = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log("computer: ", randomDice);
    console.log("utente: ", userDice);

    // confronto i numeri e stabilisco chi ha vinto
    if (randomDice > userDice) {
        // ha vinto il computer
        console.log("Il computer vince");
    } else if (randomDice < userDice) {
        // ha vinto l'utente
        console.log("L'utente vince");
    } else {
        // la partita è in parità
        console.log("Parità.");

    }
} else {
    // input fuori range
    console.log("input utente non corretto");
}