/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
Interrompi il ciclo appena il nome è stato trovato.
*/


let nomiArray = [ `gabriele`, `giacomo`, `pippo`];
let nomeInput = parseInt(prompt(`inserisci il nome`));

let i = 0
let variabileS = false;

while(i < nomiArray[i]){

    if(nomeInput === nomiArray.length){
        console.log(`sei invitato`)
        break;
    }
    i++
    if(nomeInput !== nomiArray[i]){
        console.log(`non sei presente`)
    }
}

