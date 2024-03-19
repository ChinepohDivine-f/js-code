//Divisible by 3 => fizz
//Divisible by 5 => Buzz
//Divisible by both 3 and 5 => fizzbuzz
// not divisibe by 3 or 5 => input
// not a number => 'Not a Number

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN; // nan is a number that is not a number ..hahaha
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}
