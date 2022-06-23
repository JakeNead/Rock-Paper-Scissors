
const randomNumber = Math.floor(Math.random()*3);

function computerPlay () {
    if (randomNumber == 0) {
        return 'rock';
    } else if (randomNumber == 1) {
        return 'paper';
    } else  (randomNumber == 2) 
        return 'scissors';
    } 
   
    
let humanResponse = prompt('Let\'s play! Choose rock, paper or scissors');
let humanPlay = humanResponse.toLowerCase();
// if (humanPlay == 'scissors' || 'rock' || 'paper') {}

console.log(computerPlay())
console.log(humanPlay)

const win = 'You totally won!';
const lose = 'Bummer you lost...';
const tie = 'You tied! Try again!';


function playRound(human, computer) {
    if (humanPlay == 'rock' && computerPlay() == 'paper' || 
    humanPlay == 'paper' && computerPlay() == 'scissors' || 
    humanPlay =='scissors' && computerPlay() == 'rock') {
        return lose;
    } else if (humanPlay === computerPlay()) {
        return tie;
    } else {
        return win;
    }
}
console.log(playRound(humanPlay, computerPlay()))


// The code below will run multiple turns in the game

const game =  ()

for (let i = 0; i < 5; i++) {
    if (i < 5) {

    }

}




//Unused code below here.

// const choice = ['rock', 'paper', 'scissors'];

// if ('rock', 'rock' || 'scissors', 'scissors' || 'paper', 'paper') 