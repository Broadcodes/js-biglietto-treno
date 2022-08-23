const PREZZO_UNITARIO_BIGLIETTO = 0.21;
const SCONTO_MINORENNI = 20;
const SCONTO_OVER65 = 40;

var kilometri = parseInt(prompt("Quanti kilometri vuoi percorrere con il treno oggi?"));
var anni = parseInt(prompt("Quanti anni hai?"));

if(!isNaN(kilometri) || !isNaN(anni)){
    var risultatoMomentaneo = (`${kilometri} e ${anni}`);



    document.getElementById("calcoloPrezzo").innerHTML = risultatoMomentaneo;
} else {
    alert("ATTENZIONE: Il valore inserito non è corretto, aggiornare la pagina");
}