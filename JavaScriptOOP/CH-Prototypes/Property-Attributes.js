let person = { name: "Jack" };

for (let key in person) console.log(key); // name
console.log(Object.keys(person)); // name

// None of the property's define or methods are visible here

// Because in JavaScript, all the property has attributes attached to them.

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);
// {
//   value: [Function: toString],
//   writable: true, --> We could overwrite it.
//   enumerable: false, --> We can't see the toString method.
//   configurable: true --> We can delete it.
// }

Object.defineProperty(person, "name", {
  writable: false, // Now it becomes read only.
});

person.name = "Fan";
console.log(person.name); // Jack

//--------------------------

Object.defineProperty(person, "name", {
  configurable: false, // Now the 'name' can't be deleted.
});

delete person.name;

console.log(person); // { name: 'Jack' }

//--------------------------

Object.defineProperty(person, "name", {
  enumerable: false, // Now it won't show on Object.keys
});

console.log(Object.keys(person)); // []
