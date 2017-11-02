//Executing this function returns 'in block' both times. This tells me that the second
// variable assignment, inside the block, overwrites the first assignment, outside the block, when using `var`
// to make the assignment inside a block. This makes sense because `var` is a function-level assignment.

function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

// Executing this function returns 'in block' first, then 'out of block'. This tells me
// that `const` is a block-level assignment.
function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

// Executing this function returns an error 'SyntaxError: Identifier 'x' has already been declared'.
// This makes sense because `var` is a function-level assignment and constants cannot
// be overwritten without throwing an error.
function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}


// Executing this code returns the same result as the second example using `const`.
// This makes sense because, like `const`, `let` is a block-level assignment.
function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}

// Here the same error is thrown as in the third example: 'SyntaxError: Identifier 'x' has already been declared'.
// This makes sense because `let` has already assigned `x` at the same level earlier in the block.
function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}

// Write a function that takes three strings - a verb, an adjective, and a noun - 
// uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE
//  NOUN".Use ES6 template literals.

// For example, 
// madLib('make', 'best', 'guac');
// "We shall MAKE the BEST GUAC."

function madLib(verb, adjective, noun) {
  return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}.`
}

// Input
// i.  A String, called searchString.
// ii. A String, called subString.
// Output: A Boolean.true if the subString is a part of the searchString.

function isSubstring(string, substring) {
  return string.includes(substring);
}

// Return array of integers that are either divisible by 5 or 3 but not both.

function fizzBuzz(array) {
  const fizzBuzzArr = []

  array.forEach(el => {
    if ((el % 3 === 0)^(el % 5 === 0)) {
      fizzBuzzArr.push(el);
    }
  });

  return fizzBuzzArr;
}

// Return boolean re: n is prime?

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    } 
  }

  return true
}

// Return the sum of the the first n primes

function sumOfNPrimes(n) {
  let sum = 0;
  let countPrimes = 0;
  let i = 2;

  while (countPrimes < n) {
    if (isPrime(i)) {
      countPrimes++;
      sum += i;
    }
    i++
  }

  return sum
}




