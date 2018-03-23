/* What is the 10001st prime number? */

// borrowing findFactors and isPrime from Project Euler #3
let findFactors = require('./3-largest-prime-factor.js').findFactors;
let isPrime = require('./3-largest-prime-factor.js').isPrime;

// do we need to import findFactors? it's in the other global scope, but that's where isPrime will reference it???

// don't just want to brute force check hundreds of thousands of numbers to see if they're prime...
// filter by dividing by 2 / 3 / 5 or something?
// also, could elminate even numbers and increment by two each time?

function findNthPrime(n) {
	// for expediency, count 2, 3, and 5 as first three primes, and start at 6
	let count = 3;
	let start = 6;
	while (count <= n) {
		// for a non-prime, this will evaluate to truthy
		if (start % 2 === 0 || start % 3 === 0 || start % 5 === 0) {
			console.log('number was divisible by 2, 3, or 5');
			start ++;
		} else if (!isPrime(start)) {
			console.log('number was divisible by some other factor');
			start ++;
		} else {
			count ++;
			console.log('found prime #', count, 'value: ', start);
			if (count === n) return start;
			else start ++;
		}
	}
}

// findNthPrime(6); // should return 13
// findNthPrime(10001); // oh boy
