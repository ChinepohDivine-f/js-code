const numbers = [3, 4, 1]; //m const does not stop
// us from adding elements to an array

numbers.push(5, 6); // append new element to the array

numbers.unshift(1, 2); // add elements to the begining of an array

numbers.splice(2, 0, "a", "b"); // place new elements in a precise location
// 2 is the starting index an 0 is the delete count
console.log(numbers);

console.log(numbers.indexOf("a")); // returns the index if the elment exist in the array

// to get the last index of a character
console.log(numbers.lastIndexOf(1));

// to check if an element exist
console.log(numbers.includes(1));

// all of this methods have and extra parameter
// the parameter specifies the index of the character we dealing with
// array
console.log(numbers.indexOf(1, 2)); // this finds the second instance of 1 in the array

/// finding elements ( reference types)

const courses = [
  { id: 2, userName: "king" },
  { id: 4, userName: "Boss" },
];

// using the find method and a callback function

const course = courses.find(function (course) {
  return course.name === "king";
});

// if the index of an element is not available
// javascript returns -1

// using arrow functions make the code cleaner
// they are when there is a callback function
// if the is no parameter the we use ()
// if there is only one parameter then we remove the brackets around it
const course2 = courses.findIndex((course) => course.name === "Boss");

console.log(course);
console.log(course2);


// removing elements
numbers.pop(); // remove from end
numbers.shift(); // remove from beginnig
numbers.splice(); // remove from middle


// using these method, the element that was removed is return 
// this can be store for later use

// e.g
const last = numbers.pop();
console.log(last, numbers);



// empty and array 
numbers = []; // cannot be use when the memory has been referenced
numbers.length = 0; // best solution
numbers.splice(0, numbers.length);


