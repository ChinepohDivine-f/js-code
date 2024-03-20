const circle = {
    radius: 1,
    draw() {
        console.log('draw');

    }
};



for (let key in circle) console.log(key, circle[key]);
for (let key of Object.keys(circle)) console.log(key);
// note that of keyword is used onlu for iterables
// like arrays .... etc

for (let entry of Object.entries(circle)) console.log(entry)

// we can check entries of an object using this format
if ('color' in circle) console.log(true);