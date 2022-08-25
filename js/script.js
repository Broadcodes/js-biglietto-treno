const PREZZO_UNITARIO_BIGLIETTO = 0.21;
const ETA_MINIMA = 18;
const ETA_MASSIMA = 65;
const SCONTO_MINORENNI = 20;
const SCONTO_OVER65 = 40;

// variabili necessarie a memorizzare i dati chiesti all'utente
const kilometri = parseInt(prompt("Quanti kilometri vuoi percorrere con il treno oggi?"));
const anni = parseInt(prompt("Quanti anni hai?"));

// condizione per verificare se il dato inserito sia realmente un numero e non una stringa.
// in caso di errore mostra un messaggio all'utente
if(!(isNaN(kilometri) || isNaN(anni))){
    // calcolo il prezzo del biglietto per i km inseriti dall'utente
    let prezzoBigliettoDaAcquistare = PREZZO_UNITARIO_BIGLIETTO * kilometri;
    // dichiaro una variabile che conterrà il prezzo finale del biglietto
    let prezzoBigliettoFinale;

    // condizione che permette di applicare lo sconto in base all'età dell'utente
    if(anni < ETA_MINIMA){
        prezzoBigliettoFinale = prezzoBigliettoDaAcquistare - ((prezzoBigliettoDaAcquistare * SCONTO_MINORENNI) / 100);
    } else if(anni > ETA_MASSIMA){
        prezzoBigliettoFinale = prezzoBigliettoDaAcquistare - ((prezzoBigliettoDaAcquistare * SCONTO_OVER65) / 100);
    } else {
        prezzoBigliettoFinale = prezzoBigliettoDaAcquistare;
    }

    // mostra a schermo il risultato finale in base all'età
    if(anni < ETA_MINIMA){
        document.getElementById("calcoloPrezzo").innerHTML = `Il prezzo del biglietto per un minorenne, con km ${kilometri}, ammonta a € ${parseFloat(prezzoBigliettoFinale).toFixed(2)}`;
    } else if(anni > ETA_MASSIMA){
        document.getElementById("calcoloPrezzo").innerHTML = `Il prezzo del biglietto per un over 65, con km ${kilometri}, ammonta a € ${parseFloat(prezzoBigliettoFinale).toFixed(2)}`;
    } else {
        document.getElementById("calcoloPrezzo").innerHTML = `Il prezzo del biglietto per km ${kilometri}, ammonta a € ${parseFloat(prezzoBigliettoFinale).toFixed(2)}`;
    }
} else {
    alert("ATTENZIONE: Il valore inserito non è corretto, aggiornare la pagina");
}