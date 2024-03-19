// this is my first javascript code
console.log("hello cherie");

let myName = "CHeeky"; // we cannot use researved keywords here
console.log(myName);

// cannot be a reserved keyworkd
// should be meaningful
// cannot start with a number
// cannot contain a space or hyphen(-)

let firstName; // camel notation is used as the namin convention for javascript
// declare mulitiple variables
// -- the modern best practive is to name them each on a new line

// constants

const interestRate = 0.3; // with constants we an create values that cannot be reasigned
// interestRate = 1; 
console.log(interestRate);



// we have different types in js
// primitives / Value types and Reference types

// Primitives

let name = "Pete"; // string literal
let age = 30; // number literal
let isApproved = true; // boolean literal
//NB: true and false are reserved keywords
let myFirstName = undefined; // not a common practice to do so
let selectedColor = null; //  used to clear the value of a variable
// print(name)


// javascript objects

let person = {
    name: 'Mosh',
    age: 45,
}

// Dot notation 
person.name = 'Josh';

// bracket notation
let selection = 'name';
person[selection] = 'Maria';

console.log(person.name)


// arrays: a data structure used to represent a list of items

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);