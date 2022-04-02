'use strict';

// *============ 72 Selecting & Manipulate ============
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'bener sekali';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value);

// *============ Project 1 guess number  ============
let secretNumber = Math.trunc(Math.random() * 20) + 1; // % merandom angka
let score = 20;
document.querySelector('.number').textContent = secretNumber;
let highScore = 0;


const displayMessage = function(message){
	document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	// % Ketika no input
	if (!guess) {
		displayMessage('No Number!!!')
		// % Ketika menang
	} else if (guess === secretNumber) {
		
		displayMessage('Angka anda benar !!!');
		document.querySelector('body').style.backgroundColor = '#60b347';

		document.querySelector('.number').style.width = '30rem';

		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}

	} else if(guess !== secretNumber){
		// % ketinggian / kerendahan
		if (score > 1) {
			displayMessage(guess > secretNumber ? 'ketinggian bro!!!' : 'terlalu kecil');
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('Anda Kalah...')
			document.querySelector('.score').textContent = 0;
		}

	} 
	
});

document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1; // % merandom angka

	displayMessage('mulai tebak ...');
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';

	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});
