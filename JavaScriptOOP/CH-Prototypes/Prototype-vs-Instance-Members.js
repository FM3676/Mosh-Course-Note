function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const c1 = new Circle(1);

// If we have c1 ~ c10000, we will have thousands copies of draw() methods.
// It will waste many memories.

function Circle(radius) {
  // Instance members --> Private
  this.radius = radius;
}

// Prototype members --> Public
Circle.prototype.draw = function () {
  console.log("draw");
};

// Every Circle obj can use the draw() method.
// Also, we can overwrite those existed methods.

Circle.prototype.toString = function () {
    return "Circle with radius " + this.radius;
}

console.log(c1.toString()); // Circle with radius 1