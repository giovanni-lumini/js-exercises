/* 
EXERCISE 1
In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors

Task
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".
*/

//oggetto con chiavi che vincono contro i valori (array di stringhe)
const win = {
    scissors: ["paper", "lizard"],
    paper: ["rock", "spock"],
    rock: ["lizard", "scissors"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"]
  };
  
//funzione con casi di pareggio, vittoria e sconfitta
function rpsls(pl1,pl2){
  if(pl1 === pl2){
    return "Draw!";
  } else if (win[pl1].includes(pl2)){
    return "Player 1 Won!";
  } else {
    return "Player 2 Won!";
  }
    
}

//risultato salvato nell variabile
const resultRpsls = rpsls("paper", "lizard");

//prendo l'elemento della dom da aggiornare
const domElement = document.getElementById("rpsls");

//aggiorno l'elemento della dom
domElement.textContent = resultRpsls;
  