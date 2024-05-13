//  CREATE a value for the player score
let playerScore;

//  CREATE a value for the machine score
let machineScore;

//  FOR 5 rounds play the game
for (nbPartie = 0; nbPartie < 6; nbPartie++){

//      ASK the player for a choice
    let playerChoice = getHumanChoice();

//      ASK the machine for a choice
    let machineChoice = getMachineChoice();
    
//      COMPARE the result
//      INCREASE the score of the winner
    if (machineChoice > playerChoice) {
        machineScore++;
    } else if (machineChoice < playerChoice) {
        playerChoice++;
    }
}
//  SAY it is over and show the score
if (playerScore > machineScore){
    console.log('You win the match!');
} else if (playerScore < machineScore) {
    console.log('You lose the match!');
} else {
    console.log('You tied the match!');
}