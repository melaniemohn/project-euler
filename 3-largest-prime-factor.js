/* what is the largest prime factor of the number 600851475143 ? */

function findFactors(product) {
	let factors = [];
	let root = Math.floor(Math.sqrt(product));
	for (i = 2; i < root; i++) {
		if (product % i === 0) {
			factors.push(i);
			factors.push(product/i)
		}
	}
	return factors;
}

function isPrime(number) {
	let factors = findFactors(number);
	if (!factors.length) return true;
}

// console.log(findFactors(13));
// console.log(isPrime(13));

// no need to sort . . .
let primeFactors = findFactors(600851475143).filter(factor => isPrime(factor));
let largest = primeFactors[primeFactors.length - 1]
// console.log(primeFactors);
// console.log(largest);

module.exports = ({findFactors, isPrime});
