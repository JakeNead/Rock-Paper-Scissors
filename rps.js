
// const randomNumber = Math.floor(Math.random()*3);

// function computerPlay () {
//     if (randomNumber == 0) {
//         return 'rock';
//     } else if (randomNumber == 1) {
//         return 'paper';
//     } else  (randomNumber == 2) 
//         return 'scissors';
//     } 
   
    
// I could add an error allert if the input is null
// if (humanPlay == 'scissors' || 'rock' || 'paper') {}

// console.log(computerPlay())
// console.log(humanPlay)

const win = 'You totally won!';
const lose = 'Bummer you lost...';
const tie = 'You tied! Try again!';



// The code below will run multiple turns in the game

    const game = () =>{
    for (let i = 0; i < 5; i++) {
    let humanResponse = prompt('Let\'s play! Choose rock, paper or scissors');
    let humanPlay = humanResponse.toLowerCase();

    const randomNumber = Math.floor(Math.random()*3);
    function computerPlay () {
    if (randomNumber == 0) {
        return 'rock';
    } else if (randomNumber == 1) {
        return 'paper';
    } else  (randomNumber == 2) 
        return 'scissors';
    } 

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
        console.log(computerPlay())
        console.log(humanPlay)
        console.log(playRound(humanPlay, computerPlay()))
    }
}
// let hScore = 0 ;
// let cScore = 0 ;

// if (win) {
//     let hScore = hScore++
// } else if (lose); {
//     let cScore = cScore++
// }

game ();

//Unused code below here.

// const choice = ['rock', 'paper', 'scissors'];

// if ('rock', 'rock' || 'scissors', 'scissors' || 'paper', 'paper') 