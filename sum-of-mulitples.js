console.log(sum(10));

// mulitples of 3 and 5 with the limit

function sum(limit) {
  const firstMultiple = 3;
  const secondMulitple = 5;
  let sum = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}
