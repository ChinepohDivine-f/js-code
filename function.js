// function declaration

function walk() {
  console.log("walk");
}

// anonymous function expression
let run = function () {
  console.log("run");
};

// named function expression
let runOh = function run() {
  console.log("run Oh");
};

let move = run;
walk();
run();
move();

// INTERVIEW QUESTION: HOISTING
// this is when the js compiler move all function
// declaration to the top be for executon of the code

/// java script arguments
function sum() {
  // no need to pass parameter as are dealing with arguments
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

// the arguments are pass to the function
// using the for of loop we can iterate over the arguments
// because it is iterable.
console.log(sum(3, 5, 2, 5, 7));

// the rest parameter

function summer(discount, ...prices) {
  // the rest returns an array of prices and the rest is always used as the last argument of the function
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.2, 20, 49));

// setting defual values in js

function interest(principal, rate = 3.5, years = 5) {
  // te defualt's should be definde at ends of argument declaration space
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, 3, 5)); // we can use undefined to skip a defualt parameter

// getter and setter

// getter are used to get properties
// setters are used to set properties

const person = {
  firstName: "Mosh",
  lastName: "Peeker",
  get fullName() {
    return "${person.firsName} ${person.lastName}";
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string");

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name");

    this.firstName = parts[0];
    this.lastName = parts[1];
  }, // the getter and setter have thesame name
};

try {

    person.fullName = "John Bush";
} catch (e) {
    console.log(e);
}

console.log(person);



// scope a variable defined in a block will b scoped to the block
// avoid declaring global variables for constants
// { } changes make a variable in a block can only be used in the block
