const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((v) => v >= 0);

const items = filtered.map((n) => "<li>" + n + "</li>");

console.log(items);
//["<li>1</li>", "<li>2</li>", "<li>3</li>"];

const objItems = filtered.map((n) => ({ value: n }));
//Put {} in a (), we can't code like |n => {balue: n}|, JavaScript will look at this as a code line;

console.log(objItems);
//[ { value: 1 }, { value: 2 }, { value: 3 } ]

//Simplify
//const items = numbers
//  .filter((v) => v >= 0)
//  .map((n) => ({ value: n }));

console.log(
  numbers
    .filter((v) => v >= 0)
    .map((n) => ({ value: n }))
    .filter((obj) => obj.value > 1)
    .map((obj) => obj.value)
);

//[ 2, 3 ]