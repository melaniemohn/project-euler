/* Find the difference between the sum of the squares of the
first one hundred natural numbers and the square of the sum. */

// write a function to find sum of range (inclusive), then square this number
function findSumSquared(start, end) {
	let sum = 0;
	while (start <= end) {
		sum += start;
		start ++;
	}
	return sum * sum;
}

function findSumOfSquares(start, end) {
	let sum = 0;
	while (start <= end) {
		sum += start * start;
		start ++;
	}
	return sum;
}

// console.log('sum of 1 to 100 squared: ', findSumSquared(1, 10));
// console.log('sum of squares from 1 to 100: ', findSumOfSquares(1, 10));

let diff = Math.abs(findSumSquared(1, 100) - findSumOfSquares(1, 100));

console.log('sum square difference: ', diff);
