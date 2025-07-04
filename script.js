'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); // input field
*/
/*Event Listners -something that happens in the page
- wait for a certain evnt to happen then react to it.
- function event handler

function expression remember?
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; //state variable - part of application state - meaning all the data that is relevant to the application

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When no Input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem ';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🤯You lost the game!';
      displayMessage('🤯You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   // Guess to HIgh
  // } else if (guess > secretNumber) {
  //   // Guess to low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤯You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  //rest
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

/*refractoring - restructuring the code without changing how it works */

/*Binary Search
public int BinarySearch(int[] nums, int target) {
int l = 0, r = nums.Length - 1;

while (l <= r) {
int mid = l - (l - r) / 2;
if (nums[mid] > target) {
   r = m - 1;
}
else if (nums[mid] < target) {
  l = m + 1;
}
  else {
  return mid;
  }
}

return -1;
}





*/
