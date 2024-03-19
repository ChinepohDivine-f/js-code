showPrimes(20);

// prime numbers are divisible by only one and itself

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}


// code in nested loops should be 
// extracted and placed in a different function