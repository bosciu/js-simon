/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma. */

/* FUNCTIONS */
/**
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns Number with extrem both
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 
 * @param {*} element 
 * @param {Array} array
 * @returns true if the element is in array 
 */
function isInArray(element, array) {
    for (var i = 0; i < array.length; i++) {
        if (element == array[i]) {
            return true;
        }
    }
}

/* FUNCTIONS */
var numeriCasuali = [];
var numeriGiusti = [];
var score = 0;

/* Un alert espone 5 numeri generati casualmente. da 1 a 100*/
while (numeriCasuali.length < 5) {
    var numeroCasuale = getRandomNumber(1, 100);
    if (!isInArray(numeroCasuale, numeriCasuali)) {
        numeriCasuali.push(numeroCasuale);
    }
}
alert("NUMERI CASUALI: " + numeriCasuali);

setTimeout(function() {
    for (var i = 0; i < 5; i++) {
        var numeroInserito = parseInt(prompt("Inserisci un numero di Simon e premi invio!"));
        if (isInArray(numeroInserito, numeriCasuali)) {
            numeriGiusti.push(numeroInserito);
            score++
        }
    }
    alert("I numeri casuali erano: " + numeriCasuali + "\nI numeri che ti sei ricordato sono: " + numeriGiusti + "\nHai totalizzato: " + score + " punti.");
}, 30000)