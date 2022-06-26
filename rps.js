let humanScore = 0;
let computerScore = 0;

function game() {
    const humanResponse = prompt('Choose rock, paper or scissors')
    const humanPlay = humanResponse.toLowerCase();
    const randomNumber = Math.floor(Math.random()*3);
 
    function computerPlay () {
        if (randomNumber == 0) {
        return 'rock';
        } else if (randomNumber == 1) {
        return 'paper';
        } else  (randomNumber == 2) 
        return 'scissors';
        }  

    function win () {
        humanScore += 1;
        console.log('You won!');
    }
    function lose () {
        computerScore += 1;
        console.log('You lost...');
    }
    function tie () {
        console.log('You tied!');
    }
     
        if (humanPlay == 'rock' && computerPlay() == 'paper' || 
            humanPlay == 'paper' && computerPlay() == 'scissors' || 
            humanPlay =='scissors' && computerPlay() == 'rock') {;
        return lose();
        } else if (humanPlay === computerPlay()) {
        return tie();
        } else {
        return win();
        }
    }      
 
for (let i = 0; i < 5; i++) {
    if (i < 4) {
        game();
    } else {
        game()
        if (computerScore > humanScore) {
            console.log('The computer wins the day!')
        } else if (computerScore < humanScore) {
            console.log('The Human won the day!')
        } else  { 
            console.log('It\'s a tie game. Try again!');
    }
        console.log(`Computer ${computerScore}, Human ${humanScore}`)
    }
        
}