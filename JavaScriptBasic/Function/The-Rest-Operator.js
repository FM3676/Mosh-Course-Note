function sum(...args) {
  return args.reduce((a, b) => a + b);
}

// !!We can't ellipsis the ...operator, othwewise the function will only accept the first parameters.
// and assign the args.

// ...operator will put every arguments into an array.

console.log(sum(1, 2, 3, 4, 5, 10)); //console.log(args):   [ 1, 2, 3, 4, 5, 10 ]

function accountThePrice(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

// In this example, discount will be 0.1. and the other arguments will be prices[].
// !! Rest parameter must be last formal parameter.
// !!NO!!: accountThePrice(...prices, discount)
console.log(accountThePrice(0.1, 20, 30, 40)); //81
