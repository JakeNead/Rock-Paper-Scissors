
const choice = ['rock', 'paper', 'scissors'];
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