/* Find the sum of all the multiples of 3 or 5 below 1000. */

function findMultiples(factor, limit) {
	let multiples = [];
	let product = factor;
	while (product < limit) {
		multiples.push(product);
		product += factor;
	}
	return multiples;
}

function sumValues(array) {
	return array.reduce((a, b) => a + b)
}

let multiplesOf3 = findMultiples(3, 1000);
let multiplesOf5 = findMultiples(5, 1000);

// this is basically the inverse of fizz buzz
// filter *one* array for duplicates (i.e. multiples of 15)


let multiplesOf3Filtered = multiplesOf3.filter(product => product % 15 !== 0)

let multiples = multiplesOf3Filtered.concat(multiplesOf5);

// console.log(sumValues(multiplesOf3) + sumValues(multiplesOf5));
console.log(sumValues(multiples));
