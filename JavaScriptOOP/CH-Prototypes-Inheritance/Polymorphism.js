function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle() {}

function Shape() {}

function Square() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log("duplicate circle");
};

extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log("duplicate square");
};

const shapes = [new Circle(), new Square()];

for (let shape of shapes) {
  shape.duplicate();
  //If we don't have polymorphism, our code will be redundancy, like this
/*     
    if (shape.type === 'circle')
        duplicateCircle();
    else if (shape.type === 'square')
        duplicateSquare();
    else
        duplicateShape() 
*/
} 
