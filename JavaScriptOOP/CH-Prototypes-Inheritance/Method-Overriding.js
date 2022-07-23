function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius) {
  this.radius = radius;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

extend(Circle, Shape);

// Overriding the duplicate() of Circle, we must write down after the extend().
Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this); // Using call() if this methods need 'this'.
    // This is the way we use Parent's methods.

  console.log("duplicate circle");
};

Circle.prototype.draw = function () {
  console.log("draw");
};

const c = new Circle(1);

c.duplicate();
//duplicate
//duplicate circle
