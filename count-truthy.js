const array = [0, null, undefined, '', 2, 3];

countTruthy(array);


function countTruthy(array) {
    let count = 0;
    for (let i in array) {
        if (array[i]) count ++;
    }
    console.log(count);
}


// javascript automatically determine if
// a value is truth and return a boolean so we  an
// take advantage of that and loop each element at a time to determine if it is truthy
// then incriment the count

