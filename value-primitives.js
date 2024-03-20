//primitives are copies by their value
// objects are copied by their reference 


let x = 30;
let y = x; // asigns the value of x to y

x = 43;

console.log(x, y);

let p = {value: 30};
let q = p; // asigns the address of x to y
// like pointer they now point to thesame 
// memory location

p.value = 43;

console.log(p, q);

// we should also take note ot scope

// value types 
// Number, string, Boolean, symbol, undefined, null

// reference types
// Object, function, array 