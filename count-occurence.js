const numbers = [1, 2, 3, 4, 5, 2];

const count = countOccurences(numbers, 1);


const count2 = countOccurences2(numbers, 1);


console.log(count, count2);

function countOccurences(array, searchElement) {
  let count = 0;
  for (let value of array) if (value === searchElement) count++;
  return count;
}

function countOccurences2(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    console.log((accumulator, current, searchElement));
    return accumulator + occurence;
  }, 0);
}
