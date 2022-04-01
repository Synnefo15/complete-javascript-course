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

// *============ 73, 74  ============
const secretNumber = Math.trunc(Math.random() * 20) + 1; // % merandom angka
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

    // % Ketika no input 
	if (!guess) {
		document.querySelector('.message').textContent = 'No Number!';
		// % Ketika menang
	} else if (guess === secretNumber) {
		document.querySelector('.message').textContent = 'Angka anda benar !!!';
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'
        // % ketinggian 
	} else if (guess > secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = 'ketinggian bro!!!';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = 'Anda Kalah!!!';
			document.querySelector('.score').textContent = 0;
		}
        // % kerendahan 
	} else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = 'low bro!!!';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = 'Anda Kalah!!!';
			document.querySelector('.score').textContent = 0;
		}
	}
});
