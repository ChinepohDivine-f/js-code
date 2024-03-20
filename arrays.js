const numbers = [3, 4, 1]; //m const does not stop 
// us from adding elements to an array

numbers.push(5, 6); // append new element to the array


numbers.unshift(1, 2); // add elements to the begining of an array 

numbers.splice(2, 0, 'a', 'b'); // place new elements in a precise location
// 2 is the starting index an 0 is the delete count
console.log(numbers);

console.log(numbers.indexOf('a')); // returns the index if the elment exist in the array

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
    { id: 2, userName: 'king' },
    {id: 4, userName: 'Boss'}
];

// using the find method and a callback function

const course = courses.find(function (course) {
    return course.name === 'a';
});

// if the index of an element is not available
// javascript returns -1 

console.log(course)