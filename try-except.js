const numbers = [1, 2, 3, 4, 5, 6];

try {
  const count = countOccurences(null, 1);
  console.log(count);
} catch (e) {
  console.error(e.message);
}

function countOccurences(array, searchElement) {
if(!Array.isArray(array)) throw new Error('Invalid array...')

  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurence;
  });
}


