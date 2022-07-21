// !!Abstraction: Hide the details. Show the essentials.!!

function BadCircle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 1, y: 1 };

  this.computeOtimumLocation = function (factor) {
    // ...
  };

  this.draw = function () {
    this.computeOtimumLocation(0.1);
    console.log("draw");
  };
}

const badCircle = new BadCircle();
circle.computeOtimumLocation(0.1);
circle.draw();

// We can visit this methods and propertys from the outside, this id bad.
// We can change the methods, like: circle.computeOtimumLocation = true; it will cause damage result.
// So these methods it's not accessible from the outside

// Also in the line 19, we may be need to change the factor everytime when we use it.
// One simple change in the implementational Obj, result a number of changes in the source codes.

// !!Abstraction: Hide the details. Show the essentials.!!