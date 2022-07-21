const allPositiveNumbers = [1, 2, 3];

const allPositive = allPositiveNumbers.every(value => value >= 0);

console.log(allPositive);  //true
//Whether all the members of an array satisfy the specified test.

const numbers = [1, -1];

const atLeastOnePositive = numbers.some((value) => value >= 0);

console.log(atLeastOnePositive); //true
//Whether the specified callback function returns true for any element of an array.

//Old version browsers may don't support.