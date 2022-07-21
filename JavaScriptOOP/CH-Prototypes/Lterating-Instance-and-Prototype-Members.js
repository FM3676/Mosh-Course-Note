function Circle(radius) {
  // Instance members --> Private
  this.radius = radius;
  this.move = function () {
    console.log("move");
  };
}

// Prototype members --> Public
Circle.prototype.draw = function () {
  console.log("draw");
};

const c1 = new Circle(1);

// Only returns instance members.
console.log(Object.keys(c1)); // [ 'radius', 'move' ]

// Returns all members (instance + prototype)
for (let key in c1) console.log(key);//radius move draw

//----------------------------

//In JavaScript we often use 'own' instead of 'instance', so in some books or code, ownProperty is instance.

console.log(c1.hasOwnProperty('radius')); // true

console.log(c1.hasOwnProperty('draw')); // false
//!! draw() is an prototype methods!!
