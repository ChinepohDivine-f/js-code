const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
    let numbers = [];
    for (min; min <= max; min++) {
        numbers.push(min);
    }
    return numbers;
}
