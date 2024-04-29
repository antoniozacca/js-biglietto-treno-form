'use strict'
const kmDaPercorrere = prompt("quanti km vuoi percorrere?");
console.log(kmDaPercorrere);

const etaPasseggero = prompt("quanti anni hai?");
console.log(etaPasseggero);

let prezzoKm = 0.21 * kmDaPercorrere;

if (etaPasseggero<18) {
   prezzoKm= prezzoKm - [(20/100)*prezzoKm];
} else if (etaPasseggero>65){
    prezzoKm= prezzoKm - [(40/100)*prezzoKm];
}
prezzoKm= prezzoKm.toFixed(2)
console.log(prezzoKm);