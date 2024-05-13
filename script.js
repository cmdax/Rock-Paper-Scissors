function getHumanChoice(){
    return prompt('Choose between rock (r), paper (p) or scissors (s)').slice(0).toLowerCase();
}

function getMachineChoice(){
    choice = Math.random();
    if (choice < 0.33) {
        return 'r';
    } else if (choice < 0.66) {
        return 'p';
    } else {
        return 's';
    }
}

function compareResults(machineChoice, playerChoice) {
    let playerWin;

    if (machineChoice != playerChoice) {
        if (machineChoice == 'r' && playerChoice == 's'){
            playerWin = false;
        } else if (machineChoice == 's' && playerChoice == 'p') {
            playerWin = false;
        } else if (machineChoice == 'p' && playerChoice == 'r') {
            playerWin = false;
        } else { 
            playerWin = true;
        }
    }
    console.log(`playerWin = ${playerWin}`);

    if (playerWin) {
        playerScore++;
        console.log('You win!');
    } else if (playerWin == undefined) {
        console.log('You tied.');
    } else {
        machineScore++;
        console.log('You loose!');
    }
}
//  CREATE a value for the player score
let playerScore;

//  CREATE a value for the machine score
let machineScore;

//  FOR 5 rounds play the game
for (nbPartie = 0; nbPartie < 6; nbPartie++){

//      ASK the player for a choice
    let playerChoice = getHumanChoice();
    console.log(playerChoice);
//      ASK the machine for a choice
    let machineChoice = getMachineChoice();
    console.log(machineChoice); 

//      COMPARE the result
//      INCREASE the score of the winner
    compareResults(machineChoice, playerChoice);
}
//  SAY it is over and show the score
if (playerScore > machineScore){
    console.log('You win the match!');
} else if (playerScore < machineScore) {
    console.log('You lose the match!');
} else {
    console.log('You tied the match!');
}