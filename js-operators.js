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
z *= 3;  // multiplication asignment operator
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
console.log('1' === 1); //false

// loose equality
console.log(1 == 1); //true
console.log('1' == 1); //true
console.log(true == 1); //true

// its more advisable to use strict operators 



// if a customer has more gold than 100points
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.


let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);