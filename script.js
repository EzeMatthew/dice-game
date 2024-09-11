'use strict';
// selecting elements
const prayer0El = document.querySelector('.player--0')
const prayer1El = document.querySelector('.player--1')
const score0El  = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')

let score, currentScore, activePlayer, playings;

// staring conditions
const init = function (){
     score = [0,0]
     currentScore = 0;
     activePlayer = 0
     playings = true

    score0El.textContent = 0
    score1El.textContent = 0
    current0El.textContent = 0
    current1El.textContent = 0
    diceEl.classList.add('hidden')
    prayer0El.classList.remove('player--winner')
    prayer1El.classList.remove('player--winner')
    prayer0El.classList.add('player--active')
    prayer1El.classList.remove('player--active')
}
init()
const switchplayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0
        activePlayer = activePlayer === 0 ? 1 : 0
        currentScore = 0
        prayer0El.classList.toggle("player--active")
        prayer1El.classList.toggle("player--active")
        
}
// rolling dice functionality
btnRoll.addEventListener('click', function() {
    // 1. Generating a random dice roll
if(playings) {
    const dice = Math.trunc(Math.random() *6) + 1;
    console.log(dice);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. check for roled 1: if true, switch to next player
    if(dice !== 1) {
        // Add dice to current score
        currentScore += dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
        console.log(currentScore);
    }else{
        switchplayer()
    }
}
    
})
btnHold.addEventListener("click", function(){
   
    // Add current score to active plauer's score
if(playings) {
    score[activePlayer] += currentScore
    console.log(score[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]

    if(score[activePlayer] >= 100) {
        playings = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
       
    } else{
        switchplayer() 
    }
}
    
    
})

btnNew.addEventListener('click',  init)