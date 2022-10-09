'use strict';
// start model elements
const startModel = document.querySelector(".start-model")
const startModelXbtn = document.querySelector('.close-start-model')
const winnerModelXbtn = document.querySelector('.close-winner-model')
const toggleRule = document.querySelector('.btn--instruction')
const startGameBtn = document.querySelector('.start-game-btn')
const overlay = document.querySelector('.overlay')
const winnerModel = document.querySelector('.winner-model')
const winner = document.querySelector('.winner')
const winEmoji = document.querySelector('.winner-emoji')

startGameBtn.addEventListener('click', closeStartModel)
startModelXbtn.addEventListener('click', closeStartModel)
toggleRule.addEventListener('click', closeStartModel)
winnerModelXbtn.addEventListener('click', closeWinnerModel)


// closing Start Model
function closeStartModel(){
    if((currentScore > 0) || (scores[0] > 0 || scores[1] > 0 )){
        startGameBtn.textContent = "⏸ Resume"
    }
    else{
        startGameBtn.textContent = "▶ PLAY"
    }
    startModel.classList.toggle('hidden');
    overlay.classList.toggle('hidden')
}

// closing Winner Model
function closeWinnerModel(){
    winnerModel.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
}


// Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


// Initializing the scores
score0El.textContent = 0
score1El.textContent = 0

let scores = [0, 0]
let currentScore = 0
let activePlayer = 0
let playing = true
let winnerEmoji = ['😁', '😎', '🎉', '🥳', '👍']



// Hiding the dice image.
diceEl.classList.add('hidden')


const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}


// Rolling dice functionality
btnRoll.addEventListener('click', 
    function(){
        if (playing)
        {
            // 1. Generating a random dice roll
            const dice = Math.trunc(Math.random() * 6) + 1
            console.log(dice);

            // 2. Display dice
            diceEl.classList.remove('hidden')
            diceEl.src = `images/dice-${dice}.png`

            // 3. Check for rolled 1: if true , switch to next player.
            if (dice !== 1){
                // add the dice to the current score.
                currentScore += dice
                document.getElementById(`current--${activePlayer}`).textContent = currentScore
            }
            else{
                // switch to the next player.
                switchPlayer()
            }
        }
    }
)

//Holding the current score
btnHold.addEventListener('click', 
    function(){
        if (playing)
        {
            // 1. Add current score to active player's score
            scores[activePlayer] += currentScore
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
            
            // 2. Check if player's score is >= 100
            // Finish the game
            if (scores[activePlayer] >= 30){
                //Finish the game
                playing = false
                document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
                document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
                document.querySelector('.dice').classList.add('hidden')
                winner.textContent = `Player${activePlayer+1}`
                winnerModel.classList.toggle('hidden')
                overlay.classList.toggle('hidden')    
            }else{
            // 3. Switch the player
                switchPlayer() 
            }
        }
    }
)

// Reset the game.
document.querySelector('.btn--new').addEventListener('click',
    function(){

        // display the initial conditions.
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
        diceEl.classList.add('hidden')
        player0El.classList.add('player--active')
        player1El.classList.remove('player--active')
        score0El.textContent = 0
        score1El.textContent = 0
        current0El.textContent = 0
        current1El.textContent = 0

        // Initialize the score.
        activePlayer = 0
        scores = [0, 0]
        currentScore = 0
        playing = true
    }
)

