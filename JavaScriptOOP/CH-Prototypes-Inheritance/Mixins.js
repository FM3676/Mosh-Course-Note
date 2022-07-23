const canEat = {
  eat: () => console.log("eating"),
};
const canWalk = {
  walk: () => {
    console.log("walking");
  },
};

//Object.assign()

/*  
    Copy the values of all of the enumerable own properties 
    from one or more source objects to a target object. 
    Returns the target object. 
*/

const person = Object.assign({}, canEat, canWalk);
console.log(person); // { eat: [Function: eat], walk: [Function: walk] }

function Person() {}

Object.assign(Person.prototype, canEat, canWalk);
//Here we change the Person.prototype, we don't need to return value
// And now evertime we create an Person obj, it has these capabilities.
const newPerson = new Person();
console.log(newPerson.__proto__);
/* 
    [[Prototype]]: Object
        eat: () => console.log("eating")
        walk: () => { console.log("walking"); }
        constructor: ƒ Person()
            [[Prototype]]: Object
 */
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

mixin(Person.prototype, canEat, canWalk);