// arithmetic operators

let x = 40;
let y = 34;

console.log(x + y); // x +y is an expression: something that produces a value
console.log(x - y);
console.log(x % y);
console.log(x * y);
console.log(x / y);
console.log(x ** y);

// special operators
// incriment
console.log(++x); // incriment then prints the value
console.log(x++); // prints the value then incriments it

// decriment
console.log(--y); // decriments then print the value
console.log(y--); // prints the value then decriments it

// asignment operators

let z = 50; // using the "=" sign called the asignment operators we can asign values to variables in js
z += 1; // addition asignment operator
z *= 3; // multiplication asignment operator
// and vice versa it works for all operators

// comparison operators
// relational operators
console.log(z > 0);
console.log(z >= 1);
console.log(z <= 1);
console.log(z < 1);

// equality operators in js
console.log(z === 1);
console.log(z !== 1);

// special equality operators
// in js we have strict equality and loose equality operators

// strict equaity
console.log(1 === 1); // true
console.log("1" === 1); //false

// loose equality
console.log(1 == 1); //true
console.log("1" == 1); //true
console.log(true == 1); //true

// its more advisable to use strict operators

// if a customer has more gold than 100points
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? "gold" : "silver";

console.log("The customer is of type: " + type);

// logical operators

// logical AND (&&)
// return true if both operands are TRUE

console.log("the AND operator");
console.log(true && false);
console.log(false && false);
console.log(true && true);
console.log(false && true);

// logical AND (||)
// return true if any operand is TRUE

console.log("the OR operator");
console.log(true || false);
console.log(false || false);
console.log(true || true);
console.log(false || true);

// Not(!)
let eligable = true;
let applicationRefused = !eligable;
console.log("Application Refused:", applicationRefused);

// javascript truthy and falsy values

// Falsy (false)

// undefined
// null
// 0
// false
// '' or ""
// NaN

// Anything that is not falsy is truthy

// javacript short - circuting
console.log(false || 1 || 2); //returns 1 because it is the first truthy value from the left hand side

let userColor = "red";
let defualtColor = "blue";
let currentColor = userColor || defualtColor;

console.log(currentColor); // if the user set  a color it is displayed else the defualt
// color with be display as the user color will be undefined hence falsy and the truthy with the defualt color will be displayed

// bitwise operators

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// 0 = 00000000 ..etc

console.log(1 | 2); // bitwise or: return 3
console.log(1 & 2); // bitwise and: return 0

// simple access control system using bitwise operators
// Read, wirte , execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
let message = myPermission & readPermission ? "yes" : "no";

console.log(message);

// with bitwise OR we can add Permissions
//  with the bitwise AND we can check permissions
// .. this is one real world usecase

// precedence of operators

// js using bodmas to measure precedence
// the safest way is to use bracket to group the expression 4

console.log((4 + 4) ** 2);

// swapping in js
let a = "red";
let b = "blue";

// swap varaible is required to swap
let swap = a;
 a = b;
 b = temp;

console.log(a);
console.log(b);
