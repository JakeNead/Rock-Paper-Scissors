let humanScore = 0;
let computerScore = 0;

function game(humanPlay) {

    let rpsChoice = ['rock', 'paper', 'scissors']
    let computerPlay = rpsChoice[Math.floor(Math.random()*3)];

    if (humanPlay !== 'rock' && humanPlay !== 'paper' && humanPlay !== 'scissors') {
        alert('Try again!')
        game()
    }
    else if (humanPlay === 'rock' && computerPlay === 'paper' || 
        humanPlay === 'paper' && computerPlay === 'scissors' || 
        humanPlay ==='scissors' && computerPlay === 'rock') {;
            computerScore += 1
            result.textContent = "Computer won the round!"
            return announceWinner()
    } else if (humanPlay === computerPlay) {
        return result.textContent = "Tie!"
    } else {
        humanScore += 1;
        result.textContent = "Human won the round!"
        return announceWinner()
    }
}      

function announceWinner () {
    if (humanScore === 3) {
        declareWinner.textContent = 'You won the game!'
        disableButtons()
    } else if (computerScore === 3) {
        disableButtons()
        return declareWinner.textContent = 'The computer won the game!'
    }
}
const declareWinner = document.querySelector('.declareWinner')

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

const buttons = document.querySelectorAll('button')
function disableButtons () {
    buttons.forEach(button => {
        button.disabled = true
    });
}