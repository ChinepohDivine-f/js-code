const numbers = [3, 4]; //m const does not stop 
// us from adding elements to an array

numbers.push(5, 6); // append new element to the array


numbers.unshift(1, 2); // add elements to the begining of an array 

numbers.splice(2, 0, 'a', 'b'); // place new elements in a precise location
// 2 is the starting index an 0 is the delete count
console.log(numbers);
