/* considering the terms in the Fibonacci sequence
whose values do not exceed four million,
find the sum of the even-valued terms. */

let starter = [1, 2, 3, 5, 8];

function generateFibonacci(sequence, limit) {
	// find next digit by adding together the last two entries in the sequence
	let next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
	while (next < limit) {
		sequence.push(next);
		return generateFibonacci(sequence, limit);
	}
	return sequence;
}

let fibs = generateFibonacci(starter, 4000000);
let evenFibs = fibs.filter(fib => fib % 2 === 0);
let sum = evenFibs.reduce((a, b) => a + b);
console.log(sum);
