
const randomNumber = Math.floor(Math.random()*3);

function computerPlay () {
    if (randomNumber == 0) {
        return 'rock';
    } else if (randomNumber == 1) {
        return 'paper';
    } else  (randomNumber == 2) 
        return 'scissors';
    } 
    console.log(computerPlay())

const humanPlay = 'rock';
const win = 'You totally won!';
const lose = 'Bummer you lost...';
const tie = 'You tied! Try again!';


function playRound(humanPlay, computerPlay) {
    if (humanPlay == computerPlay) {
        return tie;
    } else if (humanPlay = 'rock' && computerPlay == 'paper' || 
    humanPlay == 'paper' && computerPlay == 'scissors' || 
    humanPlay =='scissors' && computerPlay == 'rock') {
        return lose;
    } else {
        return win;
    }
}

console.log(playRound())
// console.log(playRound('paper', 'scissors'))



//Unused code below here.

// const choice = ['rock', 'paper', 'scissors'];

// if ('rock', 'rock' || 'scissors', 'scissors' || 'paper', 'paper') 