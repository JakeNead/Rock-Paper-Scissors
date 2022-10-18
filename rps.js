let humanScore = 0;
let computerScore = 0;

function game(humanPlay) {
    let computerPlay = ''
    function computerSelection () {
        let rpsChoice = ['rock', 'paper', 'scissors']
        let randomNumber = Math.floor(Math.random()*3);
            if (randomNumber === 0) {
            return computerPlay = 'rock';
            } else if (randomNumber === 1) {
            return computerPlay = 'paper';
            } else  (randomNumber === 2) 
            return computerPlay = 'scissors';
            }  
    computerSelection()

    function win () {
        humanScore += 1;
        result.textContent = "Human won the round!"
        console.log('You won!');
    }
    function lose () {
        computerScore += 1
        result.textContent = "Computer won the round!"
        console.log('You lost...');
    }
    function tie () {
        result.textContent = "Tie!"
        console.log('You tied!');
    }

    if (humanPlay !== 'rock' && humanPlay !== 'paper' && humanPlay !== 'scissors') {
        alert('Try again!')
        game()
    }
    else if (humanPlay === 'rock' && computerPlay === 'paper' || 
        humanPlay === 'paper' && computerPlay === 'scissors' || 
        humanPlay ==='scissors' && computerPlay === 'rock') {;
        return lose();
    } else if (humanPlay === computerPlay) {
        return tie();
    } else {
        return win();
    }
}      

const rock = document.querySelector('.rock')
rock.addEventListener('click', () => {
    game('rock')
    score.textContent = `Human ${humanScore} - Computer ${computerScore}`
})

const paper = document.querySelector('.paper')
paper.addEventListener('click', () => {
    game('paper')
    score.textContent = `Human ${humanScore} - Computer ${computerScore}`
})

const scissors = document.querySelector('.scissors')
scissors.addEventListener('click', () => {
    game('scissors')
    score.textContent = `Human ${humanScore} - Computer ${computerScore}`
})


// const score = document.querySelector('.score')


// for (let i = 0; i < 5; i++) {
//     if (i < 4) {
//         game();
//     } else {
//         if (computerScore > humanScore) {
//             console.log('The computer wins the day!')
//         } else if (computerScore < humanScore) {
//             console.log('The Human won the day!')
//         } else  { 
//             console.log('It\'s a tie game. Try again!');
//         }
//         console.log(`Computer ${computerScore}, Human ${humanScore}`)
//     }
// }