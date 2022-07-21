const numbers = [1, -1, 2, 3];

//a = 0, c = 1;
//a = 1, c = -1 ==> a = 0
//a = 0, c = 2 ==> a = 2
//a = 2, c = 3 => a = 5
const sum = numbers.reduce(
  (accumulator, currentVlue) => accumulator + currentVlue,
  0
);
//If we don't give an initialValue, accmulator will have same value like first elements.The result goes to:
//a = 1, c = -1 ==> a = 0
//a = 0, c = 2 ==> a = 2
//a = 2, c = 3 => a = 5

console.log(sum); //5
