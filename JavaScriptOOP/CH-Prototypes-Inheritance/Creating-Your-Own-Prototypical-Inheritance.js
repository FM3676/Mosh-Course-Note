function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

// To set up inheritance here, we want circleBase inherit from shapeBase

// Create a Obj from a given prototype
Circle.prototype = Object.create(Shape.prototype); //Before this line,Circle.prototype = objectBase
//Shape.prototype == shapeBase

Circle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(1);
