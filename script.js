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
const diceEl = document.querySelector('.dice');

// Starting condition
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');
