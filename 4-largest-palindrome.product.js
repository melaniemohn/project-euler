/* Find the largest palindrome made from the product of two 3-digit numbers. */

// notes to self... 999 * 999 = 998001, so answer will have to be < 997799

function findNextPalindrome(start) {
	// instead of passing in half of palindrome, pass in full number and then cut in half
		// to accommodate odd or even lengths, truncate at length / 2 rounded up
			// but, for odd length string, leave off the last digit when reversing
	let string = start + '';
	let firstHalf = string.substring(0, Math.ceil(string.length / 2));

	let next = (firstHalf - 1) + '';
	let array = string.length % 2 === 0 ? next.split('') : next.split('').slice(0, next.length - 1);
	let reversed = array.reverse().join('');
	let newPalindrome = next + reversed;
	// console.log(newPalindrome);
	return newPalindrome;
}

function findLargeFactors(product) {
	let factors = [];
	let root = Math.floor(Math.sqrt(product));
	for (let i = 100; i <= root; i++) {
		if (product % i === 0 && product / i > 99 && product / i < 1000) {
			factors.push(i);
			factors.push(product / i);
		}
	}
	return factors;
}

// console.log(findLargeFactors(998001));
// console.log(findNextPalindrome(999999));
// console.log(findNextPalindrome(99999));

function findPalindromeProduct(start) {
	if (findLargeFactors(start).length > 0) {
		console.log(start);
		return start;
	} else {
		return findPalindromeProduct(findNextPalindrome(start));
	}
}

findPalindromeProduct(999999);
