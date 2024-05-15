const btnPlay = document.querySelector('#play-button');
const btnAdd = document.querySelector('#add-button');
const btnRemove = document.querySelector('#remove-button');
const btnsDiv = document.querySelector('#buttons');

const btnRock = document.createElement('button');
btnRock.classList.add('choice-button');
btnRock.textContent = 'Rock';

const btnScissors = document.createElement('button');
btnScissors.classList.add('choice-button');
btnScissors.textContent = 'Scissors';

const btnPaper = document.createElement('button');
btnPaper.classList.add('choice-button');
btnPaper.textContent = 'Paper';

btnPlay.addEventListener('click', () => {
    btnPlay.remove();
    playGame();
})

function playGame() {
    btnsDiv.appendChild(btnRock);
    btnsDiv.appendChild(btnPaper);
    btnsDiv.appendChild(btnScissors);
}