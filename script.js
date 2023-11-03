'use strict';

// Selecting elements
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

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
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
    current0El.textContent = currentScore; // CHANGE LATER
  } else {
    //switch to next player
  }
});
