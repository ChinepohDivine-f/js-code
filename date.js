const now = new Date();

// date string should be in the format recognized by Date.parse  
const date1 = new Date('May 11 2018 9:00'); 
const date2 = new Date(2018, 4, 11, 9);
console.log(now, date1,  date2);