const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) console.log(key, circle[key]);
for (let key of Object.keys(circle)) console.log(key);
// note that of keyword is used onlu for iterables
// like arrays .... etc

for (let entry of Object.entries(circle)) console.log(entry);

// we can check entries of an object using this format
if ("color" in circle) console.log(true);

// cloning objects
// the old method
const another = {};

for (let key in circle) another[key] = circle[key];

another["radius"] = circle["radius"];

console.log(another);

// the morden way of cloning using asign

const another1 = Object.assign(
  {
    color: "yellow", // additional property
  },
  circle // object we are cloning
);

console.log(another1);

// now the simplest way is to use this

const another3 = { ...circle }; // '...' represent the spread operator
// this takes all the properties and methods of an object and put them between the curly braces
