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
    document.write('Poiché hai meno di 18 anni, verrà applicato uno sconto del 20%. Totale: ' + (prezzo - ((prezzo * 20) / 100) + '€'));
} else if (eta >= 65) {
    console.log (prezzo - ((prezzo * 40) / 100) + '€');
    document.write('Poiché sei un over 65, verrà applicato uno sconto del 40%. Totale: ' + (prezzo - ((prezzo * 40) / 100) + '€'));
} else {
    console.log ('Totale: ' + (prezzo + '€'));
}
// Stampare il risultato finale e mostrarlo all'utente
