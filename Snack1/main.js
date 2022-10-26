/*Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.*/

//creo array vuoto
const arrayVuoto = []

//chiedo di inserire il primo numero
let inputNumero = parseInt(prompt(`inserisci un numero`));

//inserisco primo numero nell'array
arrayVuoto.push(inputNumero)
console.log(arrayVuoto)

sommaArray = 0
sommaArray = sommaArray + inputNumero

while(sommaArray < 50){

    let inputNumero = parseInt(prompt(`inserisci un numero`));
    arrayVuoto.push(inputNumero)
    sommaArray = sommaArray + inputNumero

    sommaArray > 50
}
console.log(arrayVuoto)
console.log(sommaArray)