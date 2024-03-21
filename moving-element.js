const numbers = [1, 2, 3, 5, 4, 7];

const output = move(numbers, 2, -1);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("invalid Offset.");
    return;
  }

  let clone = [...array];
  const indexValue = clone.splice(index, 1)[0];
  clone.splice(offset + offset, indexValue);
  return clone;

  console.log(indexValue);
}
