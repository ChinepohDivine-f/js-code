const message = "this is the first message"; // string primitive
console.log(message.includes("is"));
console.log(message.startsWith("is"));
console.log(message.endsWith("is"));
console.log(message[1]);
console.log(message.length);
console.log(message.indexOf("is"));
console.log(message.replace("first", "second"));
console.log(message.toUpperCase());
console.log(message.trim); // we can also trip left and right separately


// string object
const another = new String("hi");
 

// we can also use escape notation in js

console.log('He\'ll how are you. \nDid you eat yesterday!');