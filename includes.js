const numbers = [1, 3, 4, 5];

console.log(numbers.includes(1));

console.log(includes(numbers, 4));

function includes(array, searchElement) {
  for (let i of array) if (i === searchElement) return true;
  return false;
}
