/* What is the 10001st prime number? */

// borrowing isPrime from Project Euler #3
let isPrime = require('./3-largest-prime-factor.js').isPrime;

function findNthPrime(n) {
	let count = 0;
	let start = 2;
	while (count <= n) {
		if (!isPrime(start)) {
			start ++;
		} else {
			count ++;
			console.log('found prime #', count, 'with value:', start);
			if (count === n) return start;
			else start ++;
		}
	}
}

findNthPrime(6); // should return 13
findNthPrime(10001);
