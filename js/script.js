var kilometri = parseInt(prompt("Quanti kilometri vuoi percorrere con il treno oggi?"));
var anni = parseInt(prompt("Quanti anni hai?"));

if(!isNaN(kilometri) || !isNaN(anni)){
    console.log(`${kilometri} e ${anni}`);
} else {
    alert("ATTENZIONE: Il valore inserito non è corretto, aggiornare la pagina");
}