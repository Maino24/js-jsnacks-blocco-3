/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

//creo un array vuoto 
const array = []


//creo un ciclo for che chiede di inserire 5 numeri
for(i = 0; i < 5; i++){

    let inputNumero = parseInt(prompt(`inserisci un numero`))
    //i numeri li inerisco nell'array 
    array.push(inputNumero)

}

console.log(array)