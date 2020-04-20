// Chiedere all'utente i chilometri da percorrere
var chilometri = prompt ('Quanti Km devi percorrere? NB: Inserisci solo dati numerici');
console.log (chilometri);
// Chiedere all'utente la sua età
var eta = prompt ('Quanti anni hai? NB: Inserisci solo dati numerici');
console.log (eta);
// Calcolare il Prezzo in base ai Chilometri da percorrere (0,21€/Km)
var prezzo = (0.21 * chilometri);
// Applicare sconto del 20% per minorenni
// Applicare sconto del 40% per over 65enni
if (eta < 18) {
    console.log (prezzo - ((prezzo * 20) / 100) + '€');
} else if (eta >= 65) {
    console.log (prezzo - ((prezzo * 40) / 100) + '€');
} else {
    console.log (prezzo + '€');
}
// Stampare il risultato finale e mostrarlo all'utente
