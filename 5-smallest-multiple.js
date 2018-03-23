/* What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */

function findLCM(a, b) {
	let product = a;
	while (product % b !== 0) {
		product += a;
	}
	return product;
}

// this function will find the least common multiple of two *adjacent* numbers (counting down)
function findLCMAdjacent(start) {
	let product = start;
	let next = start - 1;
	while (product % next !== 0) {
		product += start;
	}
	return product;
}

// console.log('LCM of 3 and 5:', findLCM(3, 5));
// console.log('LCM of 4 and 5:', findLCMAdjacent(5));

// use one of the LCM functions to iterate, looping through factors *or* counting down?

// using array of factors:
// only go down to 11, since numbers below 10 are already factors of this group
let factors = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
console.log(factors.reduce(findLCM));
