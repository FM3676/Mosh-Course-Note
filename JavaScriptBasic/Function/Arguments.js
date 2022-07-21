function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2)); //3
console.log(sum(1, 2, 3)); //3

function argSum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(argSum(1, 2, 3, 4, 5)); // 15
//Delete formal parameters, it still work.The function has property: arguments
//Which icludes all the parameters.
