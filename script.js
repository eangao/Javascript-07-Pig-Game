'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');

// So this works exactly the same as this,
// but the get element by ID
// is supposed to be a little bit faster than query selector,
// but I guess that's only relevant
// if you're selecting like thousands of elements at once.
// So usually I like to always use query selector,
// but I still wanted to show you that there also exists
// get element by ID. Alright?
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting condition
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');

// because remember that player number 1 is player 0
// and player 2 is here in our code player number 1.
// And in fact, let me explain you right away, why that is.
// So the reason is that we will store the scores
// of both players in an array.
// And remember that the array is zero-based
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  //     So we will use toggle now.
  // And what toggle will do is that
  // it will add the class if it is not there
  // and if it is there, it will remove it, okay.
  // So we could do that manually also
  // by checking if the class is there
  // and only removing it if it is,
  // but using toggle takes that work away from us.
  // So actually we
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; // to generate 1 to 6 random number
    console.log(dice);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; //to diplay the dice image

    // 3. Check for rolled 1 dice
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    //  scores[1] = scorecs[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
