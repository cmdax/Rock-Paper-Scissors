// assign HTML element to an variable
const btnPlay = document.querySelector('#play-button');
const btnsDiv = document.querySelector('#buttons');

// create the rock button
const btnRock = document.createElement('button');
btnRock.classList.add('choice-button');
btnRock.textContent = 'Rock';
btnRock.setAttribute('id', 'rock');

// create the scissors button
const btnScissors = document.createElement('button');
btnScissors.classList.add('choice-button');
btnScissors.textContent = 'Scissors';
btnScissors.setAttribute('id', 'scissors');

// create the paper button
const btnPaper = document.createElement('button');
btnPaper.classList.add('choice-button');
btnPaper.textContent = 'Paper';
btnPaper.setAttribute('id', 'paper');

// clicking make game start
btnPlay.addEventListener('click', () => {
    btnPlay.remove();
    playGame();
})

// Create the choice button and play n rounds
function playGame() {
    btnsDiv.appendChild(btnRock);
    btnsDiv.appendChild(btnPaper);
    btnsDiv.appendChild(btnScissors);

    for (let roundCount = 0; roundCount < 5; roundCount++) {
        playRound();
    }
}

// Ask player for choice, make machine choice
function playRound () {

}