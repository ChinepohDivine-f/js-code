console.log("control flow....");

// Hour
// if hour is between 6 am and 12pm: Good moring
// if it is between 12pm and 6pm: Good afternoon
// otherwise: Good evening

let hour = 21;
if (hour >= 6 && hour < 12) console.log("Good morning!");
else if (hour >= 12 && hour < 18) console.log("Good afternoon!");
else console.log("Good evening!");


// switch case statements

let role;
switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log("Moderator User");
        break;
    default:
        console.log('Unkown User');
}

// if else statements are preferable as the shorten the line of code



// for loops
for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i); // this program prints the ood number from 1 to 5
}


// white loops
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

// do while loop: always executed aleast once
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 10);
