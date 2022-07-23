function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

console.log(Circle.prototype.constructor); // [Function: Circle]
// So, we can dynamic create circle obj:  new Circle(1) = new Circle.prototype.constructor(1);
Circle.prototype = Object.create(Shape.prototype);
// But after this
console.log(Circle.prototype.constructor); // [Function: Shape]
// See, we lost the Circle constructor. This is because the constrctor is in the
// Circle.prototype, now we set it's prototype as shapeBase
Circle.prototype.constructor = Circle;
console.log(Circle.prototype.constructor);// [Function: Circle]
// See, now we reset the constructor, so remember to reset the constructor after inheritance.

Circle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(1);
