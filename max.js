function max(num1, num2) {
    if (num1 > num2) return num1;
    return num2; 
}

function maxTernary(num1, num2) {
  return num1 > num2 ?  num1 :  num2
}

let result = maxTernary(2, 3);
console.log(result);