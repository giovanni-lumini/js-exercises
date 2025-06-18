/* 
Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

Your function should return true if the hand is a flush, false otherwise.

The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

Examples
["AS", "3S", "9S", "KS", "4S"]  ==> true

["AD", "4S", "7H", "KS", "10S"] ==> false
*/
let cards = ["AS", "3P", "10S", "KS", "4S"];

function isFlush(cards) {

    //array per inserire i segni
    let cardsSuits = [];
    //imposto flush su true
    let flush = true;

    //ciclare nell'array cards
    for (let i = 0; i<cards.length; i++){
        //per ogni elemento dell'array estrarre l'ultimo carattere
        let cardSplit = cards[i].split('');
        //ogni volta inserirlo in una array
        cardsSuits.push(cardSplit[cardSplit.length-1]);
    }
    console.log(cardsSuits);
    

    //ciclare nell'array cardsSuits
    for(let i = 0; i<cardsSuits.length; i++){
        //se il primo elemento è uguale agli altri
        if (cardsSuits[0] != cardsSuits[i]){
            flush = false;
            break;
        }
    }
    return flush;
}

console.log(isFlush(cards));
