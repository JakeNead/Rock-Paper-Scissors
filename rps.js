function computerPlay () {
    const action = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * action.length);
    if (randomNumber == 0) {
        return 'rock';
    }else if (randomNumber == 1) {
        return 'paper';
    } else if (randomNumber == 2) {
        return 'scissors';
    }
    }
// const random = Math.floor(Math.random() *3)
 

// console.log(random)