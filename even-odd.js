showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i < limit + 1; i++) {
    (i % 2 === 0) ? console.log(i,"Even") : console.log(i,"ODD");
  }
}
