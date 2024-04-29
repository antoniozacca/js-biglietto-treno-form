'use strict'
const btnGenerate = document.getElementById("btn-1");
const inputKm = document.getElementById("km-da-percorrere");
const nameUser = document.getElementById("nome-utente");
const etaUser = document.getElementById("eta");
// console.log(inputKm);

// click
btnGenerate.addEventListener('click', function(e) {
    e.preventDefault();


    //leggere nome da input
    const name = nameUser.value;
    document.getElementById("nome-passeggero").innerHTML = name;
    

    //leggere valore da input
    const kmPercorrenza = parseInt(inputKm.value);
    console.log("Percorrerà:",kmPercorrenza,"km");

    if(isNaN(kmPercorrenza)) {
        alert('Formato km non valido');
    }
    if (kmPercorrenza<=0){
        alert('Formato km non valido')
    }


    //controllo eta
    const eta = etaUser.value;
    console.log("La sua età è:",eta,"anni");
    if(isNaN(kmPercorrenza)) {
        alert('Formato età non valido');
    }
    if (kmPercorrenza<=0){
        alert('Formato età non valido')
    }

    //calcolo prezzo totale del passeggero
    let prezzoKm = 0.21 * kmPercorrenza;
    if (eta<18) {
        prezzoKm= prezzoKm - [(20/100)*prezzoKm];
     } else if (eta>65){
         prezzoKm= prezzoKm - [(40/100)*prezzoKm];
     }
     prezzoKm= prezzoKm.toFixed(2)
     document.getElementById("prezzo-biglietto").innerHTML = prezzoKm;

    
    //numero carrozza
    const numberCarrozza = Math.floor(Math.random()*10)+1;
    document.getElementById("number-carrozza").innerHTML = numberCarrozza;

    //numero cp
    const numberCp = Math.floor(Math.random()*10000);
    document.getElementById("number-cp").innerHTML = numberCp;

    



});
 
